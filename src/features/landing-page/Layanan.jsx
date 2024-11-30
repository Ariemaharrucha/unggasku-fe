import { Layout } from "../../layouts/Layout";
import { AiOutlineLike } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import { getDokter } from "./services/api.layanan.js";

function scrollToSection() {
  const section = document.getElementById("detail");
  section.scrollIntoView({ behavior: "smooth" });
}

export const Layanan = () => {
  const [listDokter, setListDokter] = useState([]);

  useEffect(()=>{
    const fetchDokter = async () => {
      try {
        const response = await getDokter();
        console.log(response);
        
        setListDokter(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDokter();
  },[]);

  return (
    <Layout>
      <section className="md:min-h-screen justify-center">
        <div className="container md:h-screen items-center justify-center mx-auto grid md:grid-cols-12 py-8">
          <div className="md:col-span-6 order-2 md:order-1 grid-cols-12 px-8 md:mt-0 mt-8">
            <div className="text-pretty space-y-4 w-fit">
              <h1 className="font-bold md:text-6xl text-4xl">
                Temukan Dokter Terbaik Anda
              </h1>
              <p>
                Dokter hewan unggas terbaik yang siap membantu Anda menjaga
                kesehatan hewan ternak. Dapatkan konsultasi cepat dan solusi
                tepat untuk setiap masalah kesehatan unggas Anda, kapan saja dan
                dimana saja.
              </p>
              <Button
                variant="primary"
                size="large"
                className="xl:py-4 xl:px-6 xl:text-lg md:py-3 md:px-4 md:text-sm py-2 sm:px-3 sm:text-xs rounded-full"
                onClick={scrollToSection}
              >
                Jadwalkan Konsultasi
              </Button>
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 grid-cols-12 px-8">
            <div className="overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="src\assets\Images\layanan\Layanan_header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <CardDokter data={listDokter} />

      <section id="detail" className="h-auto my-32">
        <h2 className="w-6/12 mx-auto text-pretty text-center text-5xl font-bold text-black">
          Atur Jadwal Konsultasi dengan Mudah
        </h2>
        <div className="bg-primary-900 w-5/12 h-24 mx-auto mt-12 flex justify-between items-center px-11 rounded-xl">
          <h3 className="text-2xl text-white font-semibold">
            Riwayat Konsultasi
          </h3>
          <div className="bg-white py-3 px-7 rounded-xl">
            <Link to={'/layanan/konsultasi'}>Riwayat Konsultasi</Link>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-auto grid grid-cols-1 p-12">
          <div className="bg-secondary-300 p-20 grid md:grid-cols-[2fr_0.5fr_2fr] gap-5 md:gap-y-10">
            {listDokter && listDokter.map((dokter, index) => (
              <div
                key={dokter.dokter_id}
                className={`card bg-white rounded-lg shadow-lg w-full p-5 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <div className="flex flex-row items-center">
                  <div className="block">
                    <div className="overflow-hidden w-28 h-28 border-black border-2 rounded-full">
                      <img
                        className="object-cover object-center rounded-full mx-auto border-black"
                        src={dokter.image_profile}
                        alt={`Foto Dokter ${dokter.nama_dokter}`}
                      />
                    </div>
                    {/* <div className="flex items-center justify-center mt-2 gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-full bg-green-500 ${
                          index % 2 === 0 ? "bg-green-500" : "bg-red-600"
                        }`}
                      ></span>
                      <p className="text-center">{dokter.status}</p>
                    </div> */}
                  </div>
                  <div className="flex flex-col pl-7">
                    <h3 className="text-xl font-semibold">{dokter.nama_dokter}</h3>
                    <p className="text-base font-normal">{dokter.spesialis}</p>
                    <div className="flex flex-row gap-x-4 mt-2">
                      {/* <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <AiOutlineLike className="text-lg" />
                        {dokter.like}
                      </span> */}
                      <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <FiBriefcase className="text-lg" />
                        {dokter.pengalaman}
                      </span>
                    </div>
                    {/* <p className="text-lg font-normal mt-1">
                      Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}
                    </p>
                    <s className="text-sm opacity-50">
                      Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                    </s> */}
                    <p className="text-sm mt-2 font-semibold">jam kerja: {dokter.jam_kerja}</p>
                    <Button
                      variant="primary"
                      size="medium"
                      className="w-24 py-2 text-center flex text-lg justify-center mt-2"
                    >
                      <Link to={'/layanan/konsultasi/chat/123'}>Chat</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

function SliderLayanan({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...{... settings}}>{children}</Slider>
    </div>
  );
}

const CardDokter = ({data}) => {

  return (
    <section className="p-10 md:min-h-screen">
      <div className="container mx-auto">
        <h2 className="md:text-5xl text-4xl font-bold mb-10 text-center">
          Daftar Dokter Ahli
        </h2>
        <SliderLayanan>
          {data && data.map((dokter, index) => (
            <div key={dokter.dokter_id} className="p-4">
              <div className="bg-gray-300 p-5 rounded-lg">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    className="rounded-t-lg"
                    src={dokter.image_profile}
                    alt={dokter.nama_dokter}
                  />
                </div>
                <div className="border-black border-x-2 border-b-2 pt-2">
                  <h3 className="text-xl font-semibold pl-3">{dokter.nama_dokter}</h3>
                  <p className="text-sm font-normal pl-3">{dokter.spesialis}</p>
                  <div className="flex gap-2 my-2 pl-3">
                    {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                      <AiOutlineLike className="text-lg" />
                      {dokter.like}
                    </span> */}
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                      <FiBriefcase className="text-lg" />
                      {dokter.pengalaman}
                    </span>
                  </div>
                  {/* <div className="bg-gray-50 w-full pl-3 py-1">
                    <p>Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}</p>
                    <s className="opacity-50">
                      Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                    </s>
                  </div> */}
                </div>
                <div className="border-black border-x-2 border-b-2 rounded-b-lg">
                  <div className="pl-8 py-3">
                    <h3 className="text-base font-semibold">Alumni</h3>
                    <ul>
                      {dokter.alumni}
                    </ul>
                  </div>
                  <div className="pl-8">
                    <h3 className="text-base font-semibold">Praktik di</h3>
                    <p className="text-sm font-medium">{dokter.tempat_praktek}</p>
                  </div>
                  <div className="pl-8 py-3">
                    <h3 className="text-base font-semibold">Nomor STR</h3>
                    <p className="text-sm font-medium">{dokter.nomer_str}</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="large"
                  className="w-full flex justify-center mt-4"
                >
                  {"Chat"}
                </Button>
              </div>
            </div>
          ))}
        </SliderLayanan>
      </div>
    </section>
  );
};