import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export const FormEditArtikel = () => {
  const { id } = useParams();
  const [content, setContent] = useState(""); // Menyimpan konten editor Quill
  const [article, setArticle] = useState(null); // Menyimpan data artikel
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // Memuat data artikel berdasarkan ID
  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/admin/artikel/${id}`);
        const contentType = response.headers.get("Content-Type");

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setArticle(data);
          setContent(data.teks || ""); // Mengatur nilai awal editor Quill
          setIsLoading(false);
          // Mengatur nilai input form sesuai data artikel
          setValue("judul", data.judul);
          setValue("author_name", data.author_name);
          setValue("kategori", data.kategori);
          setValue("tanggal", data.tanggal);
        } else {
          const text = await response.text();
          throw new Error(`Expected JSON, but got: ${text}`);
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchArtikel();
  }, [id, setValue]);

  // Menangani perubahan di editor Quill
  const handleChange = (value) => {
    setContent(value);
  };

  // Mengirim data form untuk diperbarui
  const onSubmit = async (data) => {
    setIsLoading(true); // Mengindikasikan bahwa proses sedang berjalan
    try {
      const response = await fetch(`http://localhost:3000/api/v1/admin/artikel/${id}`, {
        method: "PUT", // Menggunakan metode PUT untuk memperbarui artikel
        headers: {
          "Content-Type": "application/json", // Mengindikasikan data yang dikirimkan dalam format JSON
        },
        body: JSON.stringify({
          judul: data.judul,
          author_name: data.author_name,
          kategori: data.kategori,
          teks: content, // Konten artikel dari editor Quill
          tanggal: data.tanggal,
        }),
      });

      const result = await response.json(); // Menangani hasil dari response API
      if (!response.ok) {
        throw new Error(result.message || "Gagal memperbarui artikel.");
      }

      setSuccessMessage("Artikel berhasil diperbarui!"); // Tampilkan pesan sukses
      reset(); // Mengatur form kembali ke keadaan awal
    } catch (error) {
      console.error("Error updating article:", error); // Debugging error
      setError(error.message); // Tampilkan pesan error
    } finally {
      setIsLoading(false); // Menyelesaikan status loading
    }
  };

  return (
    <DashboardAdminLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Edit Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {article && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label htmlFor="judul">Judul Artikel</label>
                <Input
                  placeholder="Judul artikel"
                  className="mt-2 font-normal"
                  {...register("judul", { required: "Judul wajib diisi" })}
                />
                {errors.judul && <p className="text-red-500">{errors.judul.message}</p>}
              </div>

              <div>
                <label htmlFor="author_name">Nama Author</label>
                <Input
                  placeholder="Nama author"
                  className="mt-2 font-normal"
                  {...register("author_name", { required: "Nama author wajib diisi" })}
                />
                {errors.author_name && <p className="text-red-500">{errors.author_name.message}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="kategori">Kategori</label>
                <select
                  name="kategori"
                  id="kategori"
                  className="w-fit border mt-2 p-2 rounded-md bg-white"
                  {...register("kategori", { required: "Kategori wajib dipilih" })}
                >
                  <option value="">Pilih kategori</option>
                  <option value="pakan">Pakan</option>
                  <option value="lingkungan">Lingkungan</option>
                  <option value="nutrisi">Nutrisi</option>
                  <option value="kesehatan-unggas">Kesehatan Unggas</option>
                </select>
                {errors.kategori && <p className="text-red-500">{errors.kategori.message}</p>}
              </div>

              <div>
                <label htmlFor="konten">Konten:</label>
                <ReactQuill
                  value={content}
                  onChange={handleChange}
                  placeholder="Tulis di sini"
                  className="block w-full mt-2"
                />
              </div>

              <div className="w-1/3">
                <label htmlFor="image_artikel">Add images</label>
                <input
                  type="file"
                  name="image_artikel"
                  id="image_artikel"
                  className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 cursor-pointer"
                  {...register("image_artikel")}
                />
              </div>

              <div>
                <label htmlFor="tanggal">Tanggal</label>
                <input
                  type="date"
                  className="block mt-2 border p-2 rounded-md"
                  {...register("tanggal", { required: "Tanggal wajib diisi" })}
                />
                {errors.tanggal && <p className="text-red-500">{errors.tanggal.message}</p>}
              </div>

              <div className="flex gap-4">
                <Link
                  to="/dashboard/admin/artikel"
                  className="w-1/3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center"
                >
                  Cancel
                </Link>

                <Button
                  variant="secondary"
                  className="w-1/3 flex items-center justify-center"
                  type="submit"
                >
                  {isLoading ? "Loading..." : "Update"}
                </Button>
              </div>
            </form>
          )}

          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </section>
      </main>
    </DashboardAdminLayout>
  );
};