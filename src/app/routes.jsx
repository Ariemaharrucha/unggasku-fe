import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Beranda } from "../pages/clients/Beranda";
import { Layanan } from "../pages/clients/Layanan";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Beranda/>}></Route>
      <Route path="/layanan" element={<Layanan/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
