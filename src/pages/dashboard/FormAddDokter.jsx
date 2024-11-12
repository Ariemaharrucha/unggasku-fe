import Button from "../../components/ui/Button.jsx"
import Input from "../../components/ui/Input.jsx"
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx"

export const FormAddDokter = () => {
  return (
    <DashboardLayout>
    <main>
      <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
        <h3 className="text-lg text-black">Tambah Artikel</h3>
      </section>
      <section className="max-w-2xl m-auto mt-1">
        <form action="" className="space-y-3">
          <div>
            <label htmlFor="namaDokter" className="">
              Nama dokter
            </label>
            <Input
              placeholder="Nama dokter"
              className={"mt-2 font-normal"}
            ></Input>
          </div>
          <div>
            <label htmlFor="nomeStr" className="">
                Nomer STR
                </label>
                <Input
                placeholder="Nomer STR"
                className={"mt-2 font-normal"}
            ></Input>
          </div>
          <div>
          <label htmlFor="nomerTelepon" className="">
                Nomer Telepon
                </label>
                <Input
                placeholder="Nomer Telepon"
                className={"mt-2 font-normal"}
            ></Input>
          </div>
          <div>
              <label htmlFor="profesi" className="">
                Profesi
              </label>
              <select name="profesi" id="profesi" className="w-full mt-2 border p-2 rounded-md bg-white">
                <option value="">Pilih Profesi</option>
                <option value="bebek">Bebek</option>
                <option value="unggas">Unggas</option>
              </select>
            </div>
          <div className="w-1/3">
            <label htmlFor="file-input" className="">
              Foto
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
          <div className="flex gap-4">
            <Button
              variant="secondary"
              className={
                "w-1/3 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
              }
            >
              Clear
            </Button>
            <Button
              variant="secondary"
              className={"w-1/3 flex items-center justify-center"}
            >
              Tambahkan
            </Button>
          </div>
        </form>
      </section>
    </main>
  </DashboardLayout>
  )
}
