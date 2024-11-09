import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from "../pages/clients/Beranda";
import { Layanan } from "../pages/clients/Layanan";

import About from "../pages/clients/About";
import Contact from "../pages/clients/Contact";
import UserProfile from "../pages/clients/Profile";
import { Login } from "../pages/authentication/Login.jsx";
import { Register } from "../pages/authentication/Register.jsx";
import { ArtikelPage } from "../pages/clients/ArtikelPage.jsx";
import { Dashboard } from "../pages/dashboard/index.dashboard.jsx";
import { ArtikelDetails } from "../pages/clients/ArtikelDetails.jsx";
import { ArtikelOverview } from "../pages/dashboard/ArtikelOverview.jsx";
import { FormAddArtikel } from "../pages/dashboard/FormAddArtikel.jsx";
import { FormEditArtikel } from "../pages/dashboard/FormEditArtikel.jsx";
import { DokterOverview } from "../pages/dashboard/DokterOverview.jsx";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Beranda/>}></Route>
      <Route path="/layanan" element={<Layanan/>}></Route>
      <Route path="/" element={''}></Route>
      <Route path="/tentang_kami" element={<About/>}></Route>
      <Route path="/kontak_kami" element={<Contact/>}></Route>
      <Route path="/profile" element={<UserProfile/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/artikel" element={<ArtikelPage/>}></Route>
      <Route path="/artikel/detailsArtikel" element={<ArtikelDetails/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/dashboard/artikel" element={<ArtikelOverview/>}></Route>
      <Route path="/dashboard/artikel/create" element={<FormAddArtikel/>}></Route>
      <Route path="/dashboard/artikel/edit/:id" element={<FormEditArtikel/>}></Route>
      <Route path="/dashboard/dokter" element={<DokterOverview/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
