import { Link } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DokterLayout.jsx"; 
import Button from "../../components/ui/Button.jsx";
import { DokterArtikelTable } from "./DokterArtikelTable.jsx";
import { FiPlusCircle } from "react-icons/fi";

export const DokterArtikelOverview = () => {
  return (
    <DashboardLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2">
          <div>
            <h3 className="text-xl">Artikel untuk Dokter</h3>
            <p className="text-sm text-gray-600">Kelola dan lihat artikel kesehatan yang relevan untuk pasien dan pengobatan.</p>
          </div>
          <Link to="/dashboard/artikel/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Buat Artikel
            </Button>
          </Link>
        </section>
        <section className="mt-4">
          <DokterArtikelTable />
        </section>
      </main>
    </DashboardLayout>
  );
};