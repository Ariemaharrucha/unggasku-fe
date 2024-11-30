import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const ArtikelTable = () => {
  const [artikelList, setArtikelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/admin/artikel");
        setArtikelList(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Gagal mengambil data artikel");
        setLoading(false);
      }
    };

    fetchArtikel();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/v1/admin/artikel/${id}`);
        if (response.status === 200) {
          setArtikelList((prevList) => prevList.filter((artikel) => artikel._id !== id));
        }
      } catch (err) {
        setError("Failed to delete the article");
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <div className="relative overflow-x-auto">
        <table className="text-left text-sm text-gray-500 w-full">
          <thead className="bg-gray-50 text-sm uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">No</th>
              <th scope="col" className="px-6 py-3">Judul</th>
              <th scope="col" className="px-6 py-3">Images</th>
              <th scope="col" className="px-6 py-3">Konten</th>
              <th scope="col" className="px-6 py-3">Kategori</th>
              <th scope="col" className="px-6 py-3">Tanggal</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {artikelList.map((artikel, index) => (
              <tr key={artikel._id} className="border-b bg-white">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                  {artikel.judul && artikel.judul.length > 20
                    ? `${artikel.judul.substring(0, 25)}...`
                    : artikel.judul}
                </td>
                <td className="px-6 py-4 overflow-hidden">
                  <div className="size-52">
                    <img
                      src={artikel.image_artikel || "default_image_url"}
                      alt={artikel.judul}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="block w-96 px-6 py-4">
                  <p>{artikel.teks && artikel.teks.length > 400 ? `${artikel.teks.substring(0, 425)}...` : artikel.teks}</p>
                </td>
                <td className="px-6 py-4">
                  {artikel.kategori || 'lingkungan'}
                </td>
                <td className="px-6 py-4">
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID")}
                </td>
                <td className="px-6 py-4">
                  {artikel.role || 'admin || dokter'}
                </td>
                <td className="space-x-4 px-6 py-4">
                  <Link
                    to={`/dashboard/admin/artikel/edit/${artikel._id}`}
                    className="text-white p-2 rounded-md bg-primary-400"
                  >
                    Update
                  </Link>
                  <a
                    href="#"
                    className="text-white p-2 rounded-md bg-red-500"
                    onClick={() => handleDelete(artikel._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};