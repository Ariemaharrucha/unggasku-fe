import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import { IoNewspaper } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export const DashboardLayout = ({children}) => {
  return (
    <div className="flex h-screen">
      <aside className="flex w-[240px] flex-col justify-between bg-gradient-to-b from-primary-50/50 to-violet-50/50 p-6">
        <section className="space-y-2">
          <div className="mb-4 px-3 py-2 text-base font-bold text-slate-600">
            Unggasku.id
          </div>
        <Menu label={'Home'} to={'/dashboard'} icon={<IoMdHome size={24}/>} />
        <Menu label={'Artikel'} to={'/dashboard/artikel'} icon={<IoNewspaper size={24}/>} />
        <Menu label={'Dokter'} to={'/dashboard/dokter'} icon={<FaUserDoctor size={24}/>} />
        <Menu label={'Users'} to={'/dashboard/users'} icon={<FaUser size={24}/>} />
        </section>
        <div>
          <Button variant="secondary" className={"flex justify-center w-full"}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="w-[calc(100vw-240px)] overflow-y-scroll px-6">
        <div className="m-auto p-6">
            {children}
        </div>
      </main>
    </div>
  );
};

const Menu = ({to, label, icon}) => {
    return (
        <Link
        to={to}
        className="flex items-center text-md gap-3 rounded-lg bg-secondary-300 py-2.5 px-4 font-medium transition duration-200 hover:bg-secondary-400"
      >
        {icon || ' '}
        {label}
      </Link>
    )
}