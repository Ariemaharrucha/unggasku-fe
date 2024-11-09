import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/authentication/Login.jsx";
import { Register } from "../pages/authentication/Register.jsx";
import { ArtikelPage } from "../pages/clients/ArtikelPage.jsx";
import { Dashboard } from "../pages/dashboard/index.dashboard.jsx";
import { ArtikelDetails } from "../pages/clients/ArtikelDetails.jsx";
import { Artikel } from "../pages/dashboard/Artikel.jsx";
import { FormAddArtikel } from "../pages/dashboard/FormAddArtikel.jsx";
import { FormEditArtikel } from "../pages/dashboard/FormEditArtikel.jsx";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/artikel" element={<ArtikelPage/>}></Route>
      <Route path="/artikel/detailsArtikel" element={<ArtikelDetails/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/dashboard/artikel" element={<Artikel/>}></Route>
      <Route path="/dashboard/artikel/create" element={<FormAddArtikel/>}></Route>
      <Route path="/dashboard/artikel/edit/:id" element={<FormEditArtikel/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
