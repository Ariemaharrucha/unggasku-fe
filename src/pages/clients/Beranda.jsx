import React from "react";
import { Layout } from "../../layouts/Layout";
import Button from "../../components/ui/Button";
import { IoIosArrowForward } from "react-icons/io";

export const Beranda = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <div className="min-h-screen md:mx-24 flex justify-center items-center p-16">
        <div className="flex flex-col w-fit h-fit bg-primary-950 p-10 rounded-2xl relative">
          <img
            className=""
            src="src\assets\Images\beranda\beranda-header.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:gap-14 sm:gap-12 p-10 text-center">
            <h1 className="text-xl md:text-5xl sm:text-4xl text-primary-50 font-extrabold text-center">
              Unggasku.id
            </h1>
            <div className="flex flex-col gap-y-3 items-center">
              <h2 className="text-primary-50 font-extrabold text-sm md:text-4xl sm:text-2xl">
                Belajar cara memelihara unggas yang sehat
              </h2>
              <p className="text-primary-50 font-medium text-sm md:text-2xl sm:text-lg">
                Dapatkan saran ahli dari tim ilmuwan unggas dan dokter hewan
                kami
              </p>
              {/* Button Daftar and Masuk */}
                <div className="flex items-center justify-center gap-x-5">
                  <Button
                    variant="secondary"
                    size="large"
                    className="xl:py-4 xl:px-6 xl:text-lg md:py-3 md:px-4 md:text-sm py-2 sm:px-3 sm:text-xs"
                  >
                    Daftar
                  </Button>
                  <Button
                    variant="secondary"
                    size="large"
                    className="xl:py-4 xl:px-6 xl:text-lg md:py-3 md:px-4 md:text-sm py-2 sm:px-3 sm:text-xs"
                  >
                    Masuk
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex items-center justify-center gap-x-5 my-40">
        <img
          className="w-[384px] h-[453px]"
          src="src\assets\Images\beranda\beranda-unggas.jpg"
          alt=""
        />
        <div className="flex justify-center items-start flex-col gap-y-3 max-w-[50%]">
          <div className="bg-primary-950 p-5 rounded-br-3xl rounded-tl-3xl">
            <h2 className="text-secondary-300 text-6xl font-bold">
              Unggasku.id
            </h2>
          </div>
          <div className="bg-secondary-300 p-3 rounded-l-2xl rounded-br-2xl">
            <p className="font-semibold text-base">
              Unggasku.id, solusi cerdas untuk peternak unggas! Konsultasikan
              ternak Anda langsung dengan dokter ahli dan tingkatkan
              produktivitas, kualitas, serta kesejahteraan ternak secara
              optimal.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center justify-center max-w-[100%] gap-y-12 my-10 mx-10 flex-wrap">
        <h2 className="text-primary-950 text-6xl font-bold">
          Mengapa Unggasku.id ?
        </h2>
        <div className="flex flex-1 items-center">
          <div className="flex absolute bg-primary-950 p-10 w-12 h-12 justify-center items-center text-2xl font-semibold rounded-full text-white shadow-[2px_2px_3px_2px_rgba(0,0,0,0.3)] z-10">
            1.
          </div>
          <div className="bg-secondary-300 p-5 sm:max-w-[90%] md:min-w-[800px] text-2xl font-semibold pl-24 rounded-full ml-3">
            Sumber Informasi Kesehatan Unggas Terpercaya
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex absolute bg-primary-950 p-10 w-12 h-12 justify-center items-center text-2xl font-semibold rounded-full text-white shadow-[2px_2px_3px_2px_rgba(0,0,0,0.3)] z-10">
            2.
          </div>
          <div className="bg-secondary-300 p-5 sm:max-w-[90%] md:min-w-[800px] text-2xl font-semibold pl-24 rounded-full ml-3">
            Konsultasi Kesehatan dengan Ahli Unggas
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex absolute bg-primary-950 p-10 w-12 h-12 justify-center items-center text-2xl font-semibold rounded-full text-white shadow-[2px_2px_3px_2px_rgba(0,0,0,0.3)] z-10">
            3.
          </div>
          <div className="bg-secondary-300 p-5 sm:max-w-[90%] md:min-w-[800px] text-2xl font-semibold pl-24 rounded-full ml-3">
            Panduan Pencegahan Penyakit yang Komprehensif
          </div>
        </div>
        <div className="flex flex-warp items-center">
          <div className="flex absolute bg-primary-950 p-10 w-12 h-12 justify-center items-center text-2xl font-semibold rounded-full text-white shadow-[2px_2px_3px_2px_rgba(0,0,0,0.3)] z-10">
            4.
          </div>
          <div className="bg-secondary-300 p-5 sm:max-w-[90%] md:min-w-[800px] text-2xl font-semibold pl-24 rounded-full ml-3">
            Pemantauan Kesehatan yang Efektif
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col justify-center items-center gap-y-16 max-h-[80%] max-w-[80%] mx-auto mb-20 mt-40">
        <h2 className="text-primary-950 text-6xl font-bold">
          Rekomendasi Artikel
        </h2>
        <div className="flex flex-col md:flex-row md:gap-10 gap-10 max-w-full mx-auto">
          <a
            className="flex flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition bg-primary-950 dark:shadow-neutral-700/70 w-full"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="src\assets\Images\beranda\artikel_1.jpg"
                alt="Card Image"
              />
            </div>
            <div className="p-4 md:p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold text-primary-50">
                Pakan Ternak Unggas
              </h3>
              <p className="mt-1 text-primary-50 flex-grow line-clamp-3">
                Inovasi pakan ternak unggas tingkatkan produktivitas
                <h5 className="text-secondary-50 italic font-thin mt-2">
                  13 Oktober 2024
                </h5>
              </p>
              <div className="flex justify-end items-center gap-2 mt-auto">
                <a href="" className="text-secondary-300">
                  Detail
                </a>
                <IoIosArrowForward className="text-secondary-50" />
              </div>
            </div>
          </a>
          <a
            className="flex flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition bg-primary-950 dark:shadow-neutral-700/70 w-full"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="src\assets\Images\beranda\artikel_2.jpg"
                alt="Card Image"
              />
            </div>
            <div className="p-4 md:p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold text-primary-50">
                Linkungan Hewan Ternak
              </h3>
              <p className="mt-1 text-primary-50 flex-grow">
                Hanya berbekal insting, induk ayam dapat lindungi anak dari
                ancaman predator
                <h5 className="text-secondary-50 italic font-thin mt-2">
                  22 September 2024
                </h5>
              </p>
              <div className="flex justify-end items-center gap-2 mt-auto">
                <a href="" className="text-secondary-300">
                  Detail
                </a>
                <IoIosArrowForward className="text-secondary-50" />
              </div>
            </div>
          </a>
          <a
            className="flex flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition bg-primary-950 dark:shadow-neutral-700/70 w-full"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="src\assets\Images\beranda\artikel_3.jpg"
                alt="Card Image"
              />
            </div>
            <div className="p-4 md:p-5 flex flex-col h-full">
              <h3 className="text-lg font-bold text-primary-50">
                Linkungan Hewan Ternak
              </h3>
              <p className="mt-1 text-primary-50 flex-grow line-clamp-3">
                Perilaku Unik Ayam Jantan dan Betina: Apa Saja Bedanya?
                <h5 className="text-secondary-50 italic font-thin mt-2">
                  11 Oktober 2024
                </h5>
              </p>
              <div className="flex justify-end items-center gap-2 mt-auto">
                <a href="" className="text-secondary-300">
                  Detail
                </a>
                <IoIosArrowForward className="text-secondary-50" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-end items-center gap-2">
          <a href="" className="text-secondary-300 text-xl">
            Lainnya
          </a>
          <IoIosArrowForward className="text-secondary-300 text-xl" />
        </div>
      </div>
    </Layout>
  );
};