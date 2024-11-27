import { Link } from "react-router-dom";
const artikel = [
  {
    _id: "11",
    judul: "kenapa ayam",
    images:
      "https://i.pinimg.com/564x/3b/9e/46/3b9e46620204718c614b1f89b6ff268a.jpg",
    teks: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!",
    tanggal: "02-06-2004",
  },
  {
    _id: "1",
    judul: "kenapa ayam",
    images:
      "https://i.pinimg.com/236x/6d/f1/a5/6df1a510d05a33d260ad91b4d1384fd4.jpg",
    teks: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!",
    tanggal: "02-06-2004",
  },
];

export const ArtikelDokterTable = () => {
  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="text-left text-sm text-gray-500 w-full">
          <thead className="bg-gray-50 text-sm uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Judul
              </th>
              <th scope="col" className="px-6 py-3">
                Images
              </th>
              <th scope="col" className="px-6 py-3">
                konten
              </th>
              <th scope="col" className="px-6 py-3">
                kategori
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {artikel.map((artikel, index) => (
              <tr key={artikel._id} className="border-b bg-white">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-4">
                  {artikel.judul.length > 20
                    ? `${artikel.judul.substring(0, 25)}...`
                    : artikel.judul}
                </td>
                <td className="px-6 py-4 overflow-hidden">
                  <div className="size-52 ">
                    <img
                      src={artikel.images}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="block w-96 px-6 py-4 ">
                  <p>{artikel.teks.length > 400
                    ? `${artikel.teks.substring(0, 425)}...`
                    : artikel.teks}</p>
                </td>
                <td className="px-6 py-4">
                  {'lingkungan'}
                </td>
                <td className="px-6 py-4">
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID")}
                </td>
                <td className="px-6 py-4">
                  {'admin || dokter'}
                </td>
                <td className="space-x-4 px-6 py-4">
                  <Link
                    to={`/dashboard/dokter/artikel/edit/${artikel._id}`}
                    className="text-white p-2 rounded-md bg-primary-400"
                  >
                    Update
                  </Link>
                  <a
                    href="#"
                    className="text-white p-2 rounded-md bg-red-500"
                    onClick={() => {}}
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
