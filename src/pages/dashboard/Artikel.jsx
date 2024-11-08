import { Link } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";
import Button from "../../components/ui/Button.jsx";
import { ArtikelTable } from "./ArtikelTable.jsx";
import { FiPlusCircle } from "react-icons/fi";

export const Artikel = () => {
  return (
    <DashboardLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Artikel</h3>
          </div>
          <Link to="/dashboard/artikel/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Buat Artikel
            </Button>
          </Link>
        </section>
        <section className="mt-4">
          <ArtikelTable></ArtikelTable>
        </section>
      </main>
    </DashboardLayout>
  );
};
