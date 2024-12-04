import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import ProfileDokter from "../../../assets/Images/layanan/dr_card1.jpeg";
import Button from "../../../components/ui/Button.jsx";
import useUser from "../../../stores/useStore.js";

export const DashboardDokter = () => {
  const {user} = useUser();
  const [Id, setId] = useState(1);
  const [fullName, setFullName] = useState("Stefanus Fandi Wibowo");
  const [nomorSTR, setNomorSTR] = useState("712183827489239");
  const [teleponHP, setTeleponHP] = useState("085565988112");
  const [Spesialis, setSpesialis] = useState("Dokter Hewan Unggas");

  return (
    <DashboardDokterLayout>
      <div className="flex justify-center items-center md:px-40">
        <div className="flex w-full bg-white shadow-xl rounded-xl">
          <div className="flex mx-auto justify-center items-center">
            <img
              src={user.image}
              alt="Doctor"
              className="w-80 h-80 object-cover object-top rounded-full border-4 border-black"
            />
          </div>

          <div className="w-1/2 p-10 space-y-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nama Lengkap
              </label>
              <span className="text-gray-800 text-lg">{fullName}</span>
            </div>

            {/* Nomor STR */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor STR
              </label>
              <span className="text-gray-800 text-lg">{nomorSTR}</span>
            </div>

            {/* Nomor Telepon */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Nomor Telepon
              </label>
              <span className="text-gray-800 text-lg">{teleponHP}</span>
            </div>

            {/* Profesi */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <label className="block text-gray-700 text-lg font-bold mb-1">
                Spesialis
              </label>
              <span className="text-gray-800 text-lg">{Spesialis}</span>
            </div>

            <div className="flex justify-end mt-6">
              <Link to={`/dashboard/dokter/profile/edit/${Id}`}>
                <Button variant="secondary" className={"px-8 py-3 bg-secondary-300 text-black text-lg font-bold rounded-full"}>
                  {"Edit"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardDokterLayout>
  );
};