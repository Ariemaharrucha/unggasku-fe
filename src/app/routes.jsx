import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/authentication/Login.jsx";
import { Register } from "../pages/authentication/Register.jsx";
import { DetailsArtikel } from "../pages/clients/Artikel.jsx";
import { ArtikelPage } from "../pages/clients/ArtikelPage.jsx";
import { Dashboard } from "../pages/dashboard/index.dashboard.jsx";
import { ArtikelTable } from "../pages/dashboard/ArtikelTable.jsx";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/artikel" element={<ArtikelPage/>}></Route>
      <Route path="/artikel/detailsArtikel" element={<DetailsArtikel/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/dashboard/artikel" element={<ArtikelTable/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
