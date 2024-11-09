import { FiPlusCircle } from "react-icons/fi";
import Button from "../../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";

export const DokterOverview = () => {
  return (
    <DashboardLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Daftar Dokter</h3>
          </div>
          <Link to="/dashboard/dokter/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Tambah Dokter
            </Button>
          </Link>
        </section>
        <section className="mt-4">{/* list dokter */}</section>
      </main>
    </DashboardLayout>
  );
};
