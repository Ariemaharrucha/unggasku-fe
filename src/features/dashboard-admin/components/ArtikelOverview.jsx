import { Link } from "react-router-dom";
import { ArtikelTable } from "./ArtikelTable.jsx";
import { FiPlusCircle } from "react-icons/fi";
import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export const ArtikelOverview = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/admin/artikel");
        setArticles(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Gagal mengambil data artikel");
        setLoading(false); 
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DashboardAdminLayout>
      <main className="max-w-6xl">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2 ">
          <div>
            <h3 className="text-xl">Artikel</h3>
          </div>
          <Link to="/dashboard/admin/artikel/create">
            <Button variant="secondary">
              <FiPlusCircle size={24} />
              Buat Artikel
            </Button>
          </Link>
        </section>
        <section className="mt-4">
          <ArtikelTable articles={articles}></ArtikelTable>
        </section>
      </main>
    </DashboardAdminLayout>
  );
};