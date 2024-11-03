import { useState } from "react";
import { Layout } from "../../layouts/Layout.jsx";
import Button from "../../components/ui/Button.jsx";
import image from "../../assets/jumbotronArtikelPage.png";
import { IoSearch } from "react-icons/io5";
import { Cardkateori } from "../../components/shared/Cardkateori.jsx";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";


const categoriesData = {
  kesehatan: [
    { title: "Penyakit Umum", image: 'https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg' },
    { title: "Pencegahan dan Vaksinasi", image: 'https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg' },
  ],
  pakan: [
    { title: "Pakan", image: 'https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg' },
  ],
  nutrisi: [
    { title: "Nutrisi Unggas", image: 'https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg' },
  ],
  lingkungan: [
    { title: "Lingkungan", image: 'https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg' },
  ],
};

export const ArtikelPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("kesehatan");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = categoriesData[selectedCategory].filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Jumbotron */}
      <section className="min-h-screen bg-primary-950 ">
        <div className="container mx-auto grid grid-cols-2 py-8 gap-20 items-center">
          <div className="col-span-1">
            <div className="overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-1 px-8">
            <div className="text-balance space-y-4 w-fit">
              <h1 className="text-secondary-300 text-6xl font-bold">Baca Artikel Terbaru</h1>
              <p className="text-white">
                Dapatkan informasi terbaru mengenai penyakit hewan unggas, gejala, dan pencegahannya.
                Temukan wawasan praktis yang relevan untuk menjaga kesehatan unggas.
              </p>
              <Button variant="secondary" className="rounded-3xl">Baca Selengkapnya</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-secondary-300 py-16">
        <div className="text-center space-y-4">
          <h4 className="text-2xl font-bold">Temukan Artikel Terbaru Terkait Unggas</h4>
          <h2 className="text-4xl font-bold">Unggasku.id</h2>
        </div>
        <div className="w-11/12 mx-auto mt-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="peer py-3 px-4 ps-11 block w-full bg-white border-none rounded-3xl focus:border-primary-950 focus:ring-primary-950"
              placeholder="Cari Artikel di sini"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
              <IoSearch size={22} color="gray" />
            </div>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="container mx-auto py-10">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-semibold">Kategori</h2>
          <p className="font-semibold">Temukan artikel lengkap berdasarkan kategori</p>
        </div>

        {/* Button Kategori */}
        <div className="grid grid-cols-4 mt-10">
          {Object.keys(categoriesData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`col-span-1 text-center py-4 ${
                selectedCategory === category ? 'border-b-4 border-black' : 'text-slate-400  border-b border-slate-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          {filteredArticles.map((item, index) => (
            <div key={index} className="col-span-1 flex flex-col justify-between p-4 border rounded-md min-h-96 relative overflow-hidden">
            <div className={`absolute inset-0 bg-[url('https://i.pinimg.com/474x/df/1c/2e/df1c2e9da37bda778f82127e96103e53.jpg')] bg-no-repeat bg-cover brightness-75`}></div>
            <div className="relative z-[1]">
              <div className="flex justify-between items-center text-balance">
                <h5 className="text-white">{item.title}</h5>
                <MdFavoriteBorder size={24} className="text-white cursor-pointer" />
              </div>
            </div>
            <Link className="block relative px-4 py-2 text-black border w-fit ml-auto bg-white rounded-md">Lihat detail</Link>
          </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
