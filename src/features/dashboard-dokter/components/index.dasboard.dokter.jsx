import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import ProfileDokter from "../../../assets/Images/layanan/dr_card1.jpeg";

export const DashboardDokter = () => {
  return (
    <DashboardDokterLayout>
      <div className="flex justify-center items-center md:px-40">
        <div className="flex w-full bg-white shadow-xl rounded-xl">
          <div className="flex mx-auto justify-center items-center">
            <img
              src={ProfileDokter}
              alt="Doctor"
              className="w-80 h-80 object-cover object-top rounded-full border-4 border-black"
            />
          </div>

          <div className="w-1/2 p-10 space-y-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nama Lengkap
              </label>
              <span className="text-gray-800 text-lg">Dr. Stefanus Fandi Wibowo</span>
            </div>

            {/* Nomor STR */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor STR
              </label>
              <span className="text-gray-800 text-lg">712183827489239</span>
            </div>

            {/* Nomor Telepon */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor Telepon
              </label>
              <span className="text-gray-800 text-lg">085565988112</span>
            </div>

            {/* Profesi */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Profesi
              </label>
              <span className="text-gray-800 text-lg">Dokter Hewan Unggas</span>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-3 bg-yellow-400 text-black text-lg font-bold rounded-full hover:bg-yellow-500">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardDokterLayout>
  );
};