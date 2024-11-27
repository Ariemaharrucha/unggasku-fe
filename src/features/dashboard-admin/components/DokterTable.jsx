import { useState } from "react";
import { Link } from "react-router-dom";

export const DokterTable = () => {
  // Menambahkan data dummy ke dalam state listDokter
  const [listDokter, setListDokter] = useState([
    {
      id: 1,
      username: "dr. John Doe",
      image_profile:
        "https://i.pinimg.com/736x/23/00/eb/2300eb83c15e0926c126d851c4948ad4.jpg",
      email: "johndoe@example.com",
      nomer_str: "STR12345678",
      nomer_telepon: "081234567890",
      spesialis: "Dokter Unggas",
      alumni: "Universitas A",
      tempat_praktek: "Jl. Sehat No. 10, Jakarta",
      jam_kerja: "08:00 - 16:00",
    },
  ]);

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
                Nama Dokter
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor STR
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor Telepon
              </th>
              <th scope="col" className="px-6 py-3">
                Spesialis
              </th>
              <th scope="col" className="px-6 py-3">
                Alumni
              </th>
              <th scope="col" className="px-6 py-3">
                Tempat Praktek
              </th>
              <th scope="col" className="px-6 py-3">
                Jam Kerja
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listDokter.map((dokter, index) => (
              <tr key={dokter.id} className="border-b bg-white">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap px-6 py-6 flex items-center gap-4">
                  <div className="size-10 overflow-hidden rounded-full">
                    <img src={dokter?.image_profile} alt="" />
                  </div>
                  <div>
                  {dokter?.username.length > 20
                    ? `${dokter.username.substring(0, 25)}...`
                    : dokter?.username}
                  </div>
                </td>
                <td className="px-6 py-4 ">{dokter.email}</td>
                <td className="px-6 py-4">{dokter.nomer_str}</td>
                <td className="px-6 py-4">{dokter.nomer_telepon}</td>
                <td className="px-6 py-4">{dokter.spesialis}</td>
                <td className="px-6 py-4  whitespace-nowrap">{dokter.alumni}</td>
                <td className="px-6 py-4  whitespace-nowrap">{dokter.tempat_praktek}</td>
                <td className="px-6 py-4  whitespace-nowrap">{dokter.jam_kerja}</td>
                <td className="space-x-4 px-6 py-4">
                  <Link
                    to={`/dashboard/admin/dokter/edit/${dokter?.id}`}
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
