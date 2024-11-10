import { Layout } from "../../layouts/Layout";
import { IoIosArrowForward } from "react-icons/io";
import imagejumbotron from "../../assets/Images/beranda/beranda-header.jpg";
import { Link } from "react-router-dom";
import { CardRekomendasi } from "../../components/shared/CardRekomendasi.jsx";

export const Beranda = () => {
  const listItem = [
    { text: "Sumber Informasi Kesehatan Unggas Terpercaya" },
    { text: "Konsultasi Kesehatan dengan Ahli Unggas" },
    { text: "Panduan Pencegahan Penyakit yang Komprehensif" },
    { text: "Pemantauan Kesehatan yang Efektif" },
  ];
  
  const artikelKategori = [
    {
      title: "Pakan Ternak Unggas",
      description: "Inovasi pakan ternak unggas tingkatkan produktivitas",
      date: "13 Oktober 2024",
      imgSrc: "src/assets/Images/beranda/artikel_1.jpg",
      detailLink: "#"
    },
    {
      title: "Lingkungan Hewan Ternak",
      description: "Hanya berbekal insting, induk ayam dapat lindungi anak dari ancaman predator",
      date: "22 September 2024",
      imgSrc: "src/assets/Images/beranda/artikel_2.jpg",
      detailLink: "#"
    },
    {
      title: "Lingkungan Hewan Ternak",
      description: "Perilaku Unik Ayam Jantan dan Betina: Apa Saja Bedanya?",
      date: "11 Oktober 2024",
      imgSrc: "src/assets/Images/beranda/artikel_3.jpg",
      detailLink: "#"
    }
  ];

  return (
    <Layout>
      {/* Section 1 */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto p-6 my-8 h-[650px] bg-primary-950 rounded-2xl relative">
          <div className="overflow-hidden h-full rounded-xl ">
            <img
              src={imagejumbotron}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col  justify-evenly items-center">
            <h1 className="text-xl md:text-5xl sm:text-4xl text-primary-50 font-extrabold text-center">
              Unggasku.id
            </h1>
            <div className="text-center">
              <h2 className="text-primary-50 font-extrabold text-sm md:text-4xl sm:text-2xl">
                Belajar cara memelihara unggas yang sehat
              </h2>
              <p className="text-primary-50 font-medium text-sm md:text-xl sm:text-lg">
                Dapatkan saran ahli dari tim ilmuwan unggas dan dokter hewan
                kami
              </p>
              <div className="mt-10 space-x-5">
                <Link
                  to={"/register"}
                  className="px-12 py-3 rounded-3xl font-semibold bg-secondary-300 hover:bg-secondary-500 transition-all"
                >
                  Daftar
                </Link>

                <Link
                  to={"/login"}
                  className="px-12 py-3 rounded-3xl font-semibold bg-secondary-300 hover:bg-secondary-500 transition-all"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <div className="min-h-screen flex items-center justify-center gap-x-5 py-8">
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
      <div className="py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-center text-primary-950 text-5xl font-bold">
            Mengapa Unggasku.id ?
          </h2>
          <div className="flex flex-col items-center gap-y-4">
            <div className="space-y-4">
            {listItem.map((item, index)=>{
              return (
                <List key={index} num={index + 1} text={item.text} ></List>
              )
            })}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-4/5 py-8  mx-auto">
        <h2 className="text-primary-950 text-5xl text-center font-bold">
          Rekomendasi Artikel
        </h2>
        <div className="flex flex-col mt-10 md:flex-row md:gap-10 gap-10 max-w-full mx-auto">
          {artikelKategori.map((item, index)=>{
            return (
              <CardRekomendasi key={index} title={item.title} date={item.date} description={item.description} image={item.imgSrc} detailLink={item.detailLink}/>
            )
          })}
        </div>
        <div className="flex justify-end items-center gap-2 mt-5">
          <a href="" className="text-secondary-300 text-xl font-semibold">
            Lainnya
          </a>
          <IoIosArrowForward className="text-secondary-300 text-xl" />
        </div>
      </div>
    </Layout>
  );
};

const List = ({ num, text }) => {
  return (
    <div className="flex">
      <div className="flex absolute bg-primary-950 p-8 size-10 justify-center items-center text-lg font-semibold rounded-full text-white shadow-[2px_2px_3px_2px_rgba(0,0,0,0.3)] z-10">
        {num}.
      </div>
      <div className="bg-secondary-300 w-full py-4 pe-16 text-2xl font-semibold pl-20 rounded-full ml-3">
        {text}
      </div>
    </div>
  );
};
