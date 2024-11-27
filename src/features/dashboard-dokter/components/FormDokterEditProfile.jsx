import { useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";

export const FormDokterEditProfile = () => {
  const id = useParams();
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <DashboardDokterLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1 mx-32">
          <h3 className="text-lg text-black">Tambah Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form action="" className="space-y-3" onSubmit={handleSubmit()}>
            {/* id */}
            <div className="hidden">
              <label htmlFor="author_id"></label>
              <Input value={"1"} readOnly {...register("author_id")}></Input>
              
            </div>
            {/* jdudul */}
            <div>
              <label htmlFor="judul" className="">
                Judul Artikel
              </label>
              <Input
                placeholder="Judul artikel"
                className={"mt-2 font-normal"}
                {...register("judul", { required: "Judul wajib diisi" })}
              ></Input>
            </div>
            {/* author name */}
            <div>
              <label htmlFor="author-name" className="">
                Nama Author
              </label>
              <Input
                placeholder="nama author"
                className={"mt-2 font-normal"}
                {...register("author_name", {
                  required: "Author name wajib diisi",
                })}
              ></Input>
            </div>
            {/* kategori */}
            <div className="flex flex-col">
              <label htmlFor="kategori" className="">
                kategori
              </label>
              <select
                name="kategori"
                id="kategori"
                className="w-fit border mt-2 p-2 rounded-md bg-white"
                {...register("kategori", {
                  required: "Kategori wajib dipilih",
                })}
              >
                <option value="">pilih kategori</option>
                <option value="pakan">Pakan</option>
                <option value="lingkungan">Lingkungan</option>
                <option value="nutrisi">Nutrisi</option>
                <option value="kesehatan-unggas">Kesehatan-unggas</option>
              </select>
            </div>
            {/* konten */}
            <div>
              <label htmlFor="konten">Konten:</label>
              <ReactQuill
                value={content}
                onChange={handleChange}
                placeholder="Tulis di sini"
                className="block w-full mt-2"
              />
            </div>
            {/* image-artikel */}
            <div className="w-1/3">
              <label htmlFor="image_artikel" className="">
                Add images
              </label>
              <input
                type="file"
                name="image_artikel"
                id="image_artikel"
                accept="image/png, image/jpeg"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 cursor-pointer
              file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4"
                {...register("image_artikel", {
                  required: "Gambar artikel wajib diunggah",
                })}
              />
            </div>
            {/* tanggal */}
            <div>
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                className="block mt-2 border p-2 rounded-md"
                {...register("tanggal", { required: "Tanggal wajib diisi" })}
              />
            </div>
            {/* role */}
            <div className="hidden">
              <label htmlFor="role"></label>
              <Input value={"dokter"} readOnly></Input>
            </div>
            {/* button */}
            <div className="flex gap-4">
              <Button
                variant="secondary"
                className={
                  "w-1/3 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                }
                onClick={() => {
                  reset();
                  setContent("");
                  setSuccessMessage("");
                }}
              >
                Clear
              </Button>

              <Button
                variant="secondary"
                className={"w-1/3 flex items-center justify-center"}
              >
                {isLoading ? "Loading..." : "Tambahkan"}
              </Button>
            </div>
          </form>
          {isLoading && <p className="text-blue-500">Mengirim artikel...</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </section>
      </main>
    </DashboardDokterLayout>
  );
};
