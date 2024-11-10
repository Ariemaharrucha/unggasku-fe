import React from "react";
import { Layout } from "../../layouts/Layout";
import Button from "../../components/ui/Button";
import SliderLayanan from "../../hooks/SliderLayanan";
import { AiOutlineLike } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";

function scrollToSection() {
  const section = document.getElementById("detail");
  section.scrollIntoView({ behavior: "smooth" });
}

const DokterList = [
  {
    nama: "Dr.Stefanus fandi wibowo",
    spesialis: "Nutrisi hewan unggas",
    like: "90.0%",
    pengalaman: "2 tahun",
    harga: "50000",
    discont: "100000",
    status: "Online",
    alumni: [
      {
        kampus1: "S1 Universitas Gadjah Mada, 2020",
        kampus2: "S2 Universitas Gadjah Mada, 2023",
      },
    ],
    praktik: "Kab. Depok, Yogyakarta",
    nomorStr: "712183827489239",
    foto: "src/assets/Images/layanan/dr_card1.jpeg",
  },
  {
    nama: "Dr.Ahmad syariffudin",
    spesialis: "Nutrisi hewan unggas",
    like: "95.0%",
    pengalaman: "4 tahun",
    harga: "150000",
    discont: "200000",
    status: "Offline",
    alumni: [
      {
        kampus1: "S1 Universitas Gadjah Mada, 2020",
        kampus2: "S2 Universitas Gadjah Mada, 2023",
      },
    ],
    praktik: "Kab. Depok, Yogyakarta",
    nomorStr: "712183827489239",
    foto: "src/assets/Images/layanan/dr_card2.jpeg",
  },
  {
    nama: "Dr.Candra dewi",
    spesialis: "Nutrisi hewan unggas",
    like: "93.0%",
    pengalaman: "3 tahun",
    harga: "250000",
    discont: "300000",
    status: "Online",
    alumni: [
      {
        kampus1: "S1 Universitas Gadjah Mada, 2020",
        kampus2: "S2 Universitas Gadjah Mada, 2023",
      },
    ],
    praktik: "Kab. Depok, Yogyakarta",
    nomorStr: "712183827489239",
    foto: "src/assets/Images/layanan/dr_card3.jpeg",
  },
  {
    nama: "Dr.Wulan safitri",
    spesialis: "Nutrisi hewan kucing",
    like: "92.0%",
    pengalaman: "6 tahun",
    harga: "120000",
    discont: "170000",
    status: "Offline",
    alumni: [
      {
        kampus1: "S1 Universitas Airlangga, 2017",
        kampus2: "S2 Universitas Gadjah Mada, 2021",
      },
    ],
    praktik: "Kab. Bantul, Yogyakarta",
    nomorStr: "912183827489231",
    foto: "src/assets/Images/layanan/dr_card4.jpeg",
  },
  {
    nama: "Dr.Lisa maharani",
    spesialis: "Kesehatan hewan anjing",
    like: "96.5%",
    pengalaman: "7 tahun",
    harga: "250000",
    discont: "320000",
    status: "Online",
    alumni: [
      {
        kampus1: "S1 Universitas Gadjah Mada, 2016",
        kampus2: "S2 Universitas Indonesia, 2020",
      },
    ],
    praktik: "Kab. Kulon Progo, Yogyakarta",
    nomorStr: "712183827489233",
    foto: "src/assets/Images/layanan/dr_card5.jpeg",
  },
  {
    nama: "Dr.Andi saputra",
    spesialis: "Dokter hewan umum",
    like: "94.0%",
    pengalaman: "8 tahun",
    harga: "200000",
    discont: "270000",
    status: "Offline",
    alumni: [
      {
        kampus1: "S1 Universitas Padjajaran, 2015",
        kampus2: "S2 Universitas Airlangga, 2019",
      },
    ],
    praktik: "Kab. Sleman, Yogyakarta",
    nomorStr: "712183827489232",
    foto: "src/assets/Images/layanan/dr_card6.jpeg",
  },
  {
    nama: "Dr.Bagus pramudito",
    spesialis: "Kesehatan hewan ternak",
    like: "88.0%",
    pengalaman: "5 tahun",
    harga: "175000",
    discont: "225000",
    status: "Online",
    alumni: [
      {
        kampus1: "S1 Universitas Indonesia, 2018",
        kampus2: "S2 Universitas Indonesia, 2022",
      },
    ],
    praktik: "Kab. Sleman, Yogyakarta",
    nomorStr: "812183827489230",
    foto: "src/assets/Images/layanan/dr_card7.jpeg",
  },
  {
    nama: "Dr. Eka prasetya ",
    spesialis: "Kesehatan hewan ternak",
    like: "98.0%",
    pengalaman: "3 tahun",
    harga: "105000",
    discont: "225000",
    status: "Offline",
    alumni: [
      {
        kampus1: "S1 Universitas Indonesia, 2018",
        kampus2: "S2 Universitas Indonesia, 2022",
      },
    ],
    praktik: "Kab. Sleman, Yogyakarta",
    nomorStr: "812183827489230",
    foto: "src/assets/Images/layanan/dr_card8.jpeg",
  },
];

const Dokter = () => {
  return (
    <section className="p-10 md:min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Daftar Dokter Ahli
        </h2>
        <SliderLayanan>
          {DokterList.map((dokter, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-300 p-5 rounded-lg">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    className="rounded-t-lg"
                    src={dokter.foto}
                    alt={dokter.nama}
                  />
                </div>
                <div className="border-black border-x-2 border-b-2 pt-2">
                  <h3 className="text-xl font-semibold pl-3">{dokter.nama}</h3>
                  <p className="text-sm font-normal pl-3">{dokter.spesialis}</p>
                  <div className="flex gap-2 my-2 pl-3">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                      <AiOutlineLike className="text-lg" />
                      {dokter.like}
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                      <FiBriefcase className="text-lg" />
                      {dokter.pengalaman}
                    </span>
                  </div>
                  <div className="bg-gray-50 w-full pl-3 py-1">
                    <p>Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}</p>
                    <s className="opacity-50">
                      Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                    </s>
                  </div>
                </div>
                <div className="border-black border-x-2 border-b-2 rounded-b-lg">
                  <div className="pl-8 py-3">
                    <h3 className="text-base font-semibold">Alumni</h3>
                    <ul>
                      {dokter.alumni.map((alumni, index) => (
                        <li key={index}>
                          {Object.values(alumni).map((kampus, idx) => (
                            <p key={idx}>{kampus}</p>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-8">
                    <h3 className="text-base font-semibold">Praktik di</h3>
                    <p className="text-sm font-medium">{dokter.praktik}</p>
                  </div>
                  <div className="pl-8 py-3">
                    <h3 className="text-base font-semibold">Nomor STR</h3>
                    <p className="text-sm font-medium">{dokter.nomorStr}</p>
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

export const Layanan = () => {
  return (
    <Layout>
      <section className="md:min-h-screen justify-center">
        <div className="container h-screen items-center justify-center mx-auto grid md:grid-cols-12 py-8">
          <div className="md:col-span-6 order-2 md:order-1 grid-cols-12 px-8">
            <div className="text-pretty space-y-4 w-fit">
              <h1 className="font-bold md:text-6xl text-4xl">
                Temukan Docter Terbaik Anda
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

      <Dokter />

      <section id="detail" className="h-auto my-32">
        <h2 className="w-6/12 mx-auto text-pretty text-center text-5xl font-bold text-black">
          Atur Jadwal Konsultasi dengan Mudah
        </h2>
        <div className="bg-primary-900 w-5/12 h-24 mx-auto mt-12 flex justify-between items-center px-11 rounded-xl">
          <h3 className="text-2xl text-white font-semibold">
            Riwayat Konsultasi
          </h3>
          <div className="bg-white py-3 px-7 rounded-xl">
            <a href="">Detail</a>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-auto grid grid-cols-1 p-12">
          <div className="bg-secondary-300 p-20 grid md:grid-cols-[2fr_0.5fr_2fr] gap-5 md:gap-y-10">
            {DokterList.map((dokter, index) => (
              <div
                key={index}
                className={`card bg-white rounded-lg shadow-lg w-full p-5 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <div className="flex flex-row items-center">
                  <div className="block">
                    <div className="overflow-hidden w-28 h-28 border-black border-2 rounded-full">
                      <img
                        className="object-cover object-center rounded-full mx-auto border-black"
                        src={dokter.foto}
                        alt={`Foto Dokter ${dokter.nama}`}
                      />
                    </div>
                    <div className="flex items-center justify-center mt-2 gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-full bg-green-500 ${
                          index % 2 === 0 ? "bg-green-500" : "bg-red-600"
                        }`}
                      ></span>
                      <p className="text-center">{dokter.status}</p>
                    </div>
                  </div>
                  <div className="flex flex-col pl-7">
                    <h3 className="text-xl font-semibold">{dokter.nama}</h3>
                    <p className="text-base font-normal">{dokter.spesialis}</p>
                    <div className="flex flex-row gap-x-4 mt-2">
                      <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <AiOutlineLike className="text-lg" />
                        {dokter.like}
                      </span>
                      <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <FiBriefcase className="text-lg" />
                        {dokter.pengalaman}
                      </span>
                    </div>
                    <p className="text-lg font-normal mt-1">
                      Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}
                    </p>
                    <s className="text-sm opacity-50">
                      Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                    </s>
                    <Button
                      variant="primary"
                      size="medium"
                      className="w-24 py-2 text-center flex text-lg justify-center mt-2"
                    >
                      {"Chat"}
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