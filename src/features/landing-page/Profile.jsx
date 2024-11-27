import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import fotoProfil from "../../assets/card profil-tentang-kami1.jpg";
import { Navbar } from "../../components/shared/Navbar.jsx";

export const UserProfile = () => {
  const [fullName, setFullName] = useState("Stefanus Fandi Wibowo");
  const [email, setEmail] = useState("stefanusfandi45@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordUpdate = () => {
    alert("Password updated successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
          Selamat Datang di Halaman Akun Anda
        </h1>

        <div className="flex flex-col items-center mb-8">
          <img
            src={fotoProfil}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 border-2 border-gray-300"
          />
          <button className="text-primary-500 hover:underline focus:outline-none">
            Ganti Gambar Profil
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Kata Sandi
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <button
            onClick={handlePasswordUpdate}
            className="px-4 py-2 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
          >
            Perbarui Kata Sandi
          </button>
        </div>
      </div>
    </div>
  );
};

