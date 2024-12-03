import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import ReactQuill from "react-quill";
import { useUpdateArtikelDokter } from "../hooks/useUpdateArtikelDokter.jsx";

export const FormDokterEditArtikel = () => {
  const { id } = useParams();
  const {
    artikel,
    isLoading,
    successMessage,
    error,
    imagePreview,
    register,
    handleSubmit,
    errors,
    handleImageChange,
    onSubmit,
    content,
  } = useUpdateArtikelDokter(id);


  if (!artikel) {
    return <p>Loading...</p>;
  }

  return (
    <DashboardDokterLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1 mx-32">
          <h3 className="text-lg text-black">Edit Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            {/* judul */}
            <div>
              <label htmlFor="judul">Judul Artikel</label>
              <Input
                placeholder="Judul artikel"
                className={"mt-2 font-normal"}
                {...register("judul", { required: "Judul wajib diisi" })}
                defaultValue={artikel?.judul || ""}
              />
              {errors.judul && <p className="text-red-500">{errors.judul.message}</p>}
            </div>
            {/* author name */}
            <div>
              <label htmlFor="author-name">Nama Author</label>
              <Input
                placeholder="Nama author"
                className={"mt-2 font-normal"}
                {...register("author_name", { required: "Author name wajib diisi" })}
              />
              {errors.author_name && <p className="text-red-500">{errors.author_name.message}</p>}
            </div>
            {/* kategori */}
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
            {/* konten */}
            <div>
              <label htmlFor="konten">Konten</label>
              <ReactQuill
                value={content}
                placeholder="Tulis konten di sini"
                className="block w-full mt-2"
              />
              {errors.konten && <p className="text-red-500">{errors.konten.message}</p>}
            </div>
            {/* image-artikel */}
            <div className="w-1/3">
              <label htmlFor="image_artikel" className="">
                Add images
              </label>
              <input
                type="file"

                id="image_artikel"
                accept="image/png, image/jpeg"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 cursor-pointer
              file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4"
                {...register("image_artikel")}
                onChange={handleImageChange}

              />
              {errors.image_artikel && (
                <p className="text-red-500">{errors.image_artikel.message}</p>
              )}
            </div>
            <div className="size-40 overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
              ) : (
                // Display the current image if no new image is selected
                artikel?.image_artikel && (
                  <img src={artikel.image_artikel} alt="Existing Artikel" className="h-full w-full object-cover" />
                )
              )}
            </div>
            {/* tanggal */}
            <div>
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                className="block mt-2 border p-2 rounded-md"
                {...register("tanggal", { required: "Tanggal wajib diisi" })}
              />
              {errors.tanggal && <p className="text-red-500">{errors.tanggal.message}</p>}
            </div>
            {/* button */}
            <div className="flex gap-4">
              <Link
                to={"/dashboard/dokter/artikel"}
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
          {isLoading && <p className="text-blue-500">Edit artikel...</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </section>
      </main>
    </DashboardDokterLayout>
  );
};
