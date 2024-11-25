import React, { useState } from 'react'
import { Layout } from '../../layouts/Layout'
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Button from '../../components/ui/Button';

export const Langganan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (plan) => {
    setSelectedPlan((prev) => (prev === plan ? null : plan))
  }

  return (
    <Layout>
      <section className='min-h-screen my-auto bg-gray-200 p-16'>
        <div className='flex flex-col w-full my-auto'>
          <div className=' flex justify-center items-center mx-auto flex-col'>
            <div className='w-28'>
              <img src="/src/assets/logo.png" alt="" />
            </div>
            <h1 className='font-bold text-4xl'>Unggasku.id</h1>
            <p className='text-sm px-80 pt-3 pb-6 text-center'>
              Tingkatkan Langganan Anda untuk Solusi Unggas yang Lebih Lengkap! Unggasku.id hadir untuk mendukung keberhasilan peternakan unggas Anda! Dengan berlangganan paket premium.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-10 mx-10'>
            {["Standar", "Premium", "Ultimate"].map((plan, index) => (
              <div key={index}
                className='bg-primary-950 pt-4 px-2 pb-2 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out' onClick={() => handleSelect(plan)}>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl px-4">
                  <div className='flex justify-between items-center mt-3'>
                    <div className='bg-secondary-300 p-1 px-2 w-fit rounded-md'>
                      <p className='text-sm text-primary-950 font-bold'>Diskon {30 + index * 20}%</p>
                    </div>
                    <FaCheckCircle
                      className={`text-2xl cursor-pointer ${
                        selectedPlan === plan ? "text-green-400" : "text-black"
                      }`}
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-3xl font-normal text-gray-800">
                      {plan}
                    </h1>
                    <div className='flex justify-between items-center border-b-2 border-primary-950'>
                      <div>
                        <p className="mt-2 text-4xl font-semibold">
                          Rp. {(130000 + index * 20000).toLocaleString("id-ID")}
                        </p>
                        <p className="mt-2 text-xl opacity-50 font-semibold">
                          <del>Rp. {(150000 + index * 50000).toLocaleString("id-ID")}</del>
                        </p>
                      </div>
                      <p className='py-3 px-6 border-primary-950 border-2 rounded-lg text-xl font-medium'>{1 + index} Bulan</p>
                    </div>
                    <p className='text-center text-sm px-3'>Langganan sekarang di unggasku.id dan nikmati benefitnya, serta selesaikan semua permasalah anda unggas disini.</p>
                    <div className='text-center my-4 flex items-center p-2 gap-2'>
                      <FaCheck className='text-green-400' />
                      <p className='text-sm'>Konsultasi online dengan dokter ahli unggas</p>
                    </div>
                    <p className='text-sm text-center'>Dapatkan benefit konsultasi sepuasnya dengan semua dokter unggas diwebsite ini selama 1 bulan</p>
                    <Button className={"w-full justify-center my-5 bg-secondary-300 hover:bg-secondary-300"}>Beli</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout >
  )
}