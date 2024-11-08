import { Link } from "react-router-dom";
const artikel = [
  {
    _id: "11",
    judul: "kenapa ayam",
    images:
      "https://i.pinimg.com/474x/d9/b2/b9/d9b2b9480c1e6ee25c6bbd046a78533a.jpg",
    teks: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!",
    tanggal: "02-06-2004",
  },
  {
    _id: "1",
    judul: "kenapa ayam",
    images:
      "https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg",
    teks: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quam alias. Nostrum iure assumenda possimus obcaecati voluptatibus minima, quos aut debitis temporibus eos velit excepturi recusandae consectetur enim rem dolorem!",
    tanggal: "02-06-2004",
  },
];

export const ArtikelTable = () => {
  return (
    <section className="">
      <div className="relative overflow-x-auto">
        <table className="text-left text-sm text-gray-500 w-full">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
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
                teks
              </th>
              <th scope="col" className="px-6 py-3">
                tanggal
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
                    ? `${artikel.name.substring(0, 25)}...`
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
                <td className="w-96 px-6 py-4 ">
                  <p>{artikel.teks}</p>
                </td>
                <td className="px-6 py-4">
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID")}
                </td>
                <td className="space-x-4 px-6 py-4">
                  <Link
                    to={`/dashboard/artikel/edit/${artikel._id}`}
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
