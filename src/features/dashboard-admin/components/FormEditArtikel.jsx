import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const FormEditArtikel = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const quillRef = useRef(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/admin/artikel/${id}`);
        const data = response.data;

        setArticle(data);
        setContent(data.teks || "");
        reset({
          judul: data.judul || "",
          author_name: data.author_name || "",
          kategori: data.kategori || "",
          tanggal: data.tanggal || "",
        });
        setIsLoading(false);
      } catch (fetchError) {
        console.error("Error fetching article:", fetchError);
        setError(fetchError.message);
        setIsLoading(false);
      }
    };

    fetchArtikel();
  }, [id, reset]);

  const handleChange = (value) => {
    setContent(value);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("judul", data.judul);
      formData.append("author_name", data.author_name);
      formData.append("kategori", data.kategori);
      formData.append("teks", content);
      formData.append("tanggal", data.tanggal);
      if (data.image_artikel?.[0]) {
        formData.append("image_artikel", data.image_artikel[0]);
      }

      const response = await axios.put(
        `http://localhost:3000/api/v1/admin/artikel/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Artikel berhasil diperbarui!");
        reset();
      } else {
        throw new Error(response.data.message || "Gagal memperbarui artikel.");
      }
    } catch (error) {
      console.error("Error updating article:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
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
              <input type="hidden" value="admin" {...register("role")} />

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
                  className="w-full border mt-2 p-2 rounded-md bg-white"
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
                  ref={quillRef}
                  value={content}
                  onChange={handleChange}
                  placeholder="Tulis di sini"
                  className="block w-full mt-2"
                />
              </div>

              <div className="w-1/3">
                <label htmlFor="image_artikel">Tambah Gambar</label>
                <input
                  type="file"
                  name="image_artikel"
                  id="image_artikel"
                  className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
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