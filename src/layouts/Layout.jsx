import { Footer } from "../components/shared/Footer.jsx";
import { Navbar } from "../components/shared/Navbar.jsx";

export const Layout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}
