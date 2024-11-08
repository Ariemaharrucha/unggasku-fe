import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout.jsx";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NewUserTable } from "./NewUserTable.jsx";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <main className="max-w-6xl fixed w-full">
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-2">
          <div className="flex items-center gap-3">
            <div className="bg-secondary-300 flex justify-center items-center p-2 rounded-lg">
              <AiOutlineDashboard size={24} />
            </div>
            <h3 className="text-xl font-semibold">Dashboard</h3>
          </div>
        </section>

        <section className="mt-6">
          <div className="grid grid-cols-12 gap-6">
            <StatisticCard title="Artikel" count={100} icon={<LuFiles />} />
            <StatisticCard title="Dokter" count={100} icon={<FaUserDoctor />} />
            <StatisticCard title="User" count={100} icon={<FaUser />} />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3">
            <div className="bg-secondary-300 flex justify-center items-center p-2 rounded-lg">
              <FaUser size={24} />
            </div>
            <h3 className="text-xl font-semibold">User Terbaru</h3>
          </div>
          {/* tabel new user */}
          <section className="mt-4 ">
            <NewUserTable></NewUserTable>
          </section>
        </section>
      </main>
    </DashboardLayout>
  );
};

const StatisticCard = ({ title, count, icon, iconSize = 70 }) => {
  const iconWithSize = React.cloneElement(icon, { size: iconSize });
  return (
    <div className="col-span-4 py-4 px-10 bg-secondary-300 rounded-2xl flex items-center justify-around h-32">
      <div className="w-2/3">
        <p className="text-lg font-semibold text-slate-600">Total {title}</p>
        <p className="text-2xl py-2 font-semibold">{count}</p>
      </div>
      <div className="w-auto flex justify-center">{iconWithSize}</div>
    </div>
  );
};
