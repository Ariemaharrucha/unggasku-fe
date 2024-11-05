import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export const DashboardLayout = ({children}) => {
  return (
    <div className="flex h-screen">
      <aside className="flex w-[240px] flex-col justify-between bg-gradient-to-b from-primary-50/50 to-violet-50/50 p-6">
        <section className="space-y-2">
          <div className="mb-4 px-3 py-2 text-base font-bold text-slate-600">
            Unggasku.id
          </div>
        <Menu label={'Create artikel'} to={'/dashboard/create'} />
        <Menu label={'Daftar artikel'} to={'/dashboard/artikel'} />
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
        className="flex items-center text-md gap-2 rounded-lg bg-secondary-300 py-2.5 px-4 font-medium transition duration-200 hover:bg-secondary-400"
      >
        {label}
        {icon || ' '}
      </Link>
    )
}