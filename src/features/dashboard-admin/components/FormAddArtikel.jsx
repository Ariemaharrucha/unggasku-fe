import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const FormAddArtikel = () => {
  const [content, setContent] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (value) => {
    setContent(value);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("judul", data.judul);
      formData.append("author_name", data.author_name);
      formData.append("kategori", data.kategori);
      formData.append("teks", content);
      formData.append("tanggal", data.tanggal);

      if (data.image_artikel && data.image_artikel[0]) {
        formData.append("image_artikel", data.image_artikel[0]);
      }

      console.log("FormData yang dikirim:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      const response = await axios.post("http://localhost:3000/api/v1/admin/artikel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setSuccessMessage("Artikel berhasil ditambahkan!");
        reset();
        setContent("");
      } else {
        setErrorMessage("Gagal menambahkan artikel. Coba lagi.");
      }
    } catch (err) {
      setErrorMessage("Gagal menambahkan artikel. Silakan coba lagi.");
      console.error("Error adding article:", err.response ? err.response.data : err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardAdminLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Tambah Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="hidden">
              <label htmlFor="author_id"></label>
              <Input value={"1"} readOnly {...register("author_id")} />
            </div>

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

            <div>
              <label htmlFor="kategori" className="mr-2">Kategori</label>
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
              <label htmlFor="image_artikel">Tambah Gambar</label>
              <input
                type="file"
                name="image_artikel"
                id="image_artikel"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                accept="image/png, image/jpeg"
                {...register("image_artikel", { required: "Gambar artikel wajib diunggah" })}
              />
              {errors.image_artikel && <p className="text-red-500">{errors.image_artikel.message}</p>}
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
              <Button
                variant="secondary"
                className="w-1/3 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                onClick={() => {
                  reset();
                  setContent("");
                  setSuccessMessage("");
                  setErrorMessage("");
                }}
              >
                Clear
              </Button>
              <Button
                variant="secondary"
                className="w-1/3 flex items-center justify-center"
                type="submit"
              >
                {isLoading ? "Loading..." : "Tambahkan"}
              </Button>
            </div>
          </form>

          {isLoading && <p className="text-blue-500">Mengirim artikel...</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </main>
    </DashboardAdminLayout>
  );
};