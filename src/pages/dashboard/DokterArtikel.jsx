import React, { useState } from "react";
import { DashboardLayout } from "../../layouts/DokterLayout";

const DokterArtikel = () => {
  const [formData, setFormData] = useState({
    judul: "",
    artikel: "",
    file: null,
    tanggal: "",
  });
  
  const [showForm, setShowForm] = useState(true);
  const [articles, setArticles] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setArticles([...articles, formData]);
    setFormData({ judul: "", artikel: "", file: null, tanggal: "" });
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
          >
            Tambah Artikel
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
          >
            Lihat Artikel
          </button>
        </div>

        {showForm ? (
          <form
            className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Judul Artikel */}
            <div>
              <label htmlFor="judul" className="block text-gray-700 text-lg font-bold">
                Judul Artikel
              </label>
              <input
                type="text"
                id="judul"
                name="judul"
                value={formData.judul}
                onChange={handleInputChange}
                className="mt-2 w-full border rounded px-6 py-3 bg-gray-100 text-lg"
                placeholder="Masukkan judul artikel"
              />
            </div>

            {/* Artikel */}
            <div>
              <label htmlFor="artikel" className="block text-gray-700 text-lg font-bold">
                Artikel:
              </label>
              <textarea
                id="artikel"
                name="artikel"
                value={formData.artikel}
                onChange={handleInputChange}
                className="mt-2 w-full border rounded px-6 py-4 bg-gray-100 text-lg h-56"
                placeholder="Tulis artikel di sini"
              />
            </div>

            {/* Upload File */}
            <div>
              <label htmlFor="file" className="block text-gray-700 text-lg font-bold">
                Upload File
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="border rounded px-6 py-3 bg-gray-100 text-lg"
                />
              </div>
            </div>

            {/* Tanggal */}
            <div>
              <label htmlFor="tanggal" className="block text-gray-700 text-lg font-bold">
                Tanggal
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleInputChange}
                className="mt-2 w-full border rounded px-6 py-3 bg-gray-100 text-lg"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-gray-700"
              >
                Tambahkan
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-bold mb-4">Daftar Artikel</h2>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">No</th>
                  <th className="px-4 py-2 border-b text-left">Judul</th>
                  <th className="px-4 py-2 border-b text-left">Images</th>
                  <th className="px-4 py-2 border-b text-left">Teks</th>
                  <th className="px-4 py-2 border-b text-left">Tanggal</th>
                  <th className="px-4 py-2 border-b text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {articles.length > 0 ? (
                  articles.map((article, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{article.judul}</td>
                      <td className="px-4 py-2 border-b">
                        {article.file ? (
                          <img
                            src={URL.createObjectURL(article.file)}
                            alt="Article Image"
                            className="w-16 h-16 object-cover"
                          />
                        ) : (
                          <span>No image</span>
                        )}
                      </td>
                      <td className="px-4 py-2 border-b">{article.artikel}</td>
                      <td className="px-4 py-2 border-b">{article.tanggal}</td>
                      <td className="px-4 py-2 border-b">
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => {
                            const updatedArticles = articles.filter(
                              (item, idx) => idx !== index
                            );
                            setArticles(updatedArticles);
                          }}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">Tidak ada artikel untuk ditampilkan.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DokterArtikel;