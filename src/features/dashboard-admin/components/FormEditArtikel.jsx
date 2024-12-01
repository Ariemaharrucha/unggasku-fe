import { useParams } from "react-router-dom";  
import { Link } from "react-router-dom";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export const FormEditArtikel = () => {
  const { id } = useParams(); // Ambil ID artikel
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [oldImage, setOldImage] = useState(""); // Menyimpan gambar lama
  const [artikelData, setArtikelData] = useState(null);

  // Default user setup
  const [user, setUser] = useState({
    id: "admin", // Default ID untuk admin
    role: "admin", // Default role sebagai admin
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (value) => {
    setContent(value);
  };

  // Fetch artikel saat pertama kali di render
  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/admin/artikel/${id}`);
        if (response.ok) {
          const artikel = await response.json();
          setArtikelData(artikel); // Menyimpan data artikel yang diambil
          setContent(artikel.konten); // Muat konten awal
          setOldImage(artikel.image_artikel ? `http://localhost:3000/uploads/${artikel.image_artikel}` : "");
          
          // Memuat artikel ke form dengan menggunakan reset
          reset({
            judul: artikel.judul,
            author_name: artikel.author_name,
            kategori: artikel.kategori,
            tanggal: artikel.tanggal,
          });
        } else {
          console.error("Gagal memuat artikel");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchArtikel();
  }, [id, reset]);

  const onSubmit = async (data) => {
    console.log("Data yang diterima dalam onSubmit:", data);
    setLoading(true);
    const formData = new FormData();
  
    // Debugging data yang masuk
    console.log("Data image_artikel yang diterima:", data.image_artikel);
  
    formData.append("author_id", user.id);
    formData.append("role", user.role);
    formData.append("judul", data.judul);
    formData.append("author_name", data.author_name);
    formData.append("kategori", data.kategori);
    formData.append("konten", content);
    formData.append("tanggal", data.tanggal);
  
    if (data.image_artikel && data.image_artikel[0]) {
      console.log("Mengirim gambar baru:", data.image_artikel[0]);
      formData.append("image_artikel", data.image_artikel[0]);
    } else if (oldImage) {
      const fileName = oldImage.split("/").pop();
      console.log("Mengirim gambar lama:", fileName);
      formData.append("image_artikel", fileName);
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/v1/admin/artikel/${id}`, {
        method: "PUT",
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        setSuccessMessage("Artikel berhasil diperbarui!");
        reset(); // Reset form setelah berhasil
      } else {
        const error = await response.json();
        console.error("Error:", error);
        setSuccessMessage("Gagal memperbarui artikel.");
      }
    } catch (err) {
      console.error("Error:", err);
      setSuccessMessage("Terjadi kesalahan pada server.");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <DashboardAdminLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Edit Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
            encType="multipart/form-data"
          >
            {/* Hidden Field untuk ID Admin */}
            <div className="hidden">
              <label htmlFor="author_id"></label>
              <input
                type="text"
                value={user.id}
                readOnly
                {...register("author_id")}
              />
            </div>

            {/* Hidden Field untuk Role */}
            <div className="hidden">
              <label htmlFor="role"></label>
              <input
                type="text"
                value={user.role}
                readOnly
                {...register("role")}
              />
            </div>

            {/* Judul */}
            <div>
              <label htmlFor="judul">Judul Artikel</label>
              <Input
                placeholder="Judul artikel"
                className={"mt-2 font-normal"}
                {...register("judul", { required: "Judul wajib diisi" })}
              />
              {errors.judul && <p className="text-red-500">{errors.judul.message}</p>}
            </div>

            {/* Author Name */}
            <div>
              <label htmlFor="author-name">Nama Author</label>
              <Input
                placeholder="Nama author"
                className={"mt-2 font-normal"}
                {...register("author_name", {
                  required: "Nama author wajib diisi",
                })}
              />
              {errors.author_name && <p className="text-red-500">{errors.author_name.message}</p>}
            </div>

            {/* Kategori */}
            <div className="flex flex-col">
              <label htmlFor="kategori">Kategori</label>
              <select
                name="kategori"
                id="kategori"
                className="w-fit border mt-2 p-2 rounded-md bg-white"
                {...register("kategori", {
                  required: "Kategori wajib dipilih",
                })}
              >
                <option value="">Pilih kategori</option>
                <option value="pakan">Pakan</option>
                <option value="lingkungan">Lingkungan</option>
                <option value="nutrisi">Nutrisi</option>
                <option value="kesehatan-unggas">Kesehatan-unggas</option>
              </select>
              {errors.kategori && <p className="text-red-500">{errors.kategori.message}</p>}
            </div>

            {/* Konten */}
            <div>
              <label htmlFor="konten">Konten:</label>
              <ReactQuill
                value={content}
                onChange={handleChange}
                placeholder="Tulis di sini"
                className="block w-full mt-2"
              />
            </div>

            {/* Image Artikel */}
            <div>
              <label htmlFor="image_artikel">Tambah Gambar (Opsional)</label>
              {oldImage && (
                <div className="mt-2">
                  <p>Gambar saat ini:</p>
                  <img src={oldImage} alt="Gambar lama" className="w-32 h-32 object-cover" />
                </div>
              )}
              <input
                type="file"
                name="image_artikel"
                id="image_artikel"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm"
                ref={register("image_artikel")}
                onChange={e => {
                  // Debugging untuk melihat file yang dipilih
                  console.log(e.target.files);
                }}
              />
            </div>

            {/* Tanggal */}
            <div>
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                className="block mt-2 border p-2 rounded-md"
                {...register("tanggal", { required: "Tanggal wajib diisi" })}
              />
              {errors.tanggal && <p className="text-red-500">{errors.tanggal.message}</p>}
            </div>

            {/* Button */}
            <div className="flex gap-4">
              <Link
                to={"/dashboard/admin/artikel"}
                className="w-1/3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center"
              >
                Cancel
              </Link>
              <Button
                variant="secondary"
                className={"w-1/3 flex items-center justify-center"}
                type="submit"
              >
                {isLoading ? "Loading..." : "Edit"}
              </Button>
            </div>
          </form>
          {isLoading && <p className="text-blue-500">Mengedit artikel...</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </section>
      </main>
    </DashboardAdminLayout>
  );
};