import { FiPlusCircle } from "react-icons/fi";
import Button from "../../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";

export const DokterOverview = () => {
  const dokter = [
    { _id: 1, nama: 'Itachi', str: '88575480384', telepon: '0867650877076', profesi: 'Dokter Unggas' },
    { _id: 2, nama: 'Sakura', str: '99764325763', telepon: '081234567890', profesi: 'Dokter Unggas' },
    { _id: 3, nama: 'Naruto', str: '12345678901', telepon: '089876543210', profesi: 'Dokter Hewan' },
    { _id: 4, nama: 'Sasuke', str: '23456789012', telepon: '088765432109', profesi: 'Dokter Kesehatan' },
    { _id: 5, nama: 'Kakashi', str: '34567890123', telepon: '087654321098', profesi: 'Dokter Hewan' },
    { _id: 6, nama: 'Hinata', str: '45678901234', telepon: '086543210987', profesi: 'Dokter Unggas' },
    { _id: 7, nama: 'Shikamaru', str: '56789012345', telepon: '085432109876', profesi: 'Dokter Unggas' },
    { _id: 8, nama: 'Gaara', str: '67890123456', telepon: '084321098765', profesi: 'Dokter Kesehatan' },
    { _id: 9, nama: 'Jiraiya', str: '78901234567', telepon: '083210987654', profesi: 'Dokter Hewan' },
    { _id: 10, nama: 'Tsunade', str: '89012345678', telepon: '082109876543', profesi: 'Dokter Unggas' },
    { _id: 11, nama: 'Lee', str: '90123456789', telepon: '081098765432', profesi: 'Dokter Kesehatan' },
    { _id: 12, nama: 'Neji', str: '01234567890', telepon: '089876543210', profesi: 'Dokter Unggas' },
    { _id: 13, nama: 'Choji', str: '22334455667', telepon: '088765432109', profesi: 'Dokter Hewan' },
    { _id: 14, nama: 'Kiba', str: '33445566778', telepon: '087654321098', profesi: 'Dokter Unggas' },
    { _id: 15, nama: 'Ino', str: '44556677889', telepon: '086543210987', profesi: 'Dokter Kesehatan' },
    { _id: 16, nama: 'Temari', str: '55667788990', telepon: '085432109876', profesi: 'Dokter Hewan' },
    { _id: 17, nama: 'Sai', str: '66778899001', telepon: '084321098765', profesi: 'Dokter Unggas' },
    { _id: 18, nama: 'Kurenai', str: '77889900112', telepon: '083210987654', profesi: 'Dokter Kesehatan' },
    { _id: 19, nama: 'Yamato', str: '88990011223', telepon: '082109876543', profesi: 'Dokter Unggas' },
    { _id: 20, nama: 'Asuma', str: '99001122334', telepon: '081098765432', profesi: 'Dokter Hewan' }
  ];

  return (
    <DashboardLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Daftar Dokter</h3>
          </div>
          <Link to="/dashboard/dokter/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Tambah Dokter
            </Button>
          </Link>
        </section>
        <section className="mt-4">
        <div className="relative overflow-x-auto w-full h-[calc(100vh-100px)]  overflow-y-auto">
          <table className="text-left text-sm text-gray-500 w-full">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Dokter
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomer STR
                </th>
                <th scope="col" className="px-6 py-3">
                  Nomer Telepon
                </th>
                <th scope="col" className="px-6 py-3">
                  Profesi
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dokter.map((dokter, index) => (
                <tr key={dokter._id} className="border-b bg-white">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 overflow-hidden rounded-full ">
                        <img src="https://i.pinimg.com/736x/f0/e6/40/f0e6400a5d831c624cf04ce064b88752.jpg" alt="" className="h-full w-full object-cover" />
                      </div>
                      {dokter.nama}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dokter.str}
                  </td>
                  <td className="px-6 py-4">
                    {dokter.telepon}
                  </td>
                  <td className=" px-6 py-4 ">
                    <p>{dokter.profesi}</p>
                  </td>
                  <td className=" px-6 py-4">
                    <div className="flex justify-between">
                    <Link to={`${dokter._id}`} className="text-white py-2 px-3 rounded-md bg-green-500 block">details</Link>
                    <Link to={`${dokter._id}`} className="text-white py-2 px-3 rounded-md bg-blue-400 block">edit</Link>
                    <Link to={`${dokter._id}`} className="text-white py-2 px-3 rounded-md bg-red-500 block">delete</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      </main>
    </DashboardLayout>
  );
};
