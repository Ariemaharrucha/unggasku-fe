import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";
import { Link } from "react-router-dom";

export const FormEditArtikel = () => {
  const id = useParams();

  return (
    <DashboardLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Edit Artikel</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1">
          <form action="" className="space-y-3">
            <div>
              <label htmlFor="judul" className="">
                Judul Artikel
              </label>
              <Input
                placeholder="Judul artikel"
                className={"mt-2 font-normal"}
              ></Input>
            </div>
            <div>
              <label htmlFor="teks" className="">
                Teks
              </label>
              <textarea
                name="teks"
                id=""
                className="block mt-2 w-full border p-2 rounded-md ocus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm"
                rows={8}
              ></textarea>
            </div>
            <div className="w-1/3">
              <label htmlFor="file-input" className="">
                Add images
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 cursor-pointer
                  file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4"
                onChange={() => {}}
              />
            </div>
            <div>
              <label htmlFor="tanggal">Tanggal</label>
              <input type="date" className="block mt-2 border p-2 rounded-md" />
            </div>
            <div className="flex gap-4">
              <Link
                to={"/dashboard/artikel"}
                className="w-1/3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center"
              >
                Batal
              </Link>
              <Button
                variant="secondary"
                className={"w-1/3 flex items-center justify-center"}
              >
                Edit
              </Button>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
};
