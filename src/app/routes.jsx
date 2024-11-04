import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/clients/About";
import Contact from "../pages/clients/Contact";
import UserProfile from "../pages/clients/Profile";

export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={''}></Route>
      <Route path="/tentang_kami" element={<About/>}></Route>
      <Route path="/kontak_kami" element={<Contact/>}></Route>
      <Route path="/profile" element={<UserProfile/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};
