import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from "../pages/clients/Beranda";
import { Layanan } from "../pages/clients/Layanan";
import { Konsultasi } from "../pages/clients/Konsultasi";
import { UserKonsultasi } from "../pages/clients/UserKonsultasi";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Beranda/>}></Route>
      <Route path="/layanan" element={<Layanan/>}></Route>
      <Route path="/layanan/konsultasi" element={<Konsultasi/>}></Route>
      <Route path="/layanan/konsultasi/user" element={<UserKonsultasi/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
