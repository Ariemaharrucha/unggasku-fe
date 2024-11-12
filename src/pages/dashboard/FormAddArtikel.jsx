import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";
import Input from "../../components/ui/Input.jsx";
import { useState } from "react";
import Button from "../../components/ui/Button.jsx";

export const FormAddArtikel = () => {

  return (
    <DashboardLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Tambah Artikel</h3>
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
            <div>
              <label htmlFor="kategori" className="">
                Kategori
              </label>
              <select name="kategori" id="kategori" className="w-full mt-2 border p-2 rounded-md bg-white">
                <option value="">Pilih Kategori</option>
                <option value="kesehatan">Kesehatan</option>
                <option value="pakan">Pakan</option>
                <option value="nutrisari">Nutrisari</option>
                <option value="lingkungan">Lingkungan</option>
              </select>
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
  );
};
