import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import ttg1 from '../../assets/tentangkami-1.jpg';
import kelvinImage from '../../assets/card profil-tentang-kami1.jpg';
import hasanImage from '../../assets/card profil-tentang-kami2.jpg';
import { Layout } from '../../layouts/Layout';


const testimonials = [
    { text: "Unggasku.id memberi solusi tepat untuk kesehatan ayam saya...", author: "Kelvin", role: "Peternak", image: kelvinImage },
    { text: "Unggasku.id membantu saya mencegah wabah penyakit...", author: "Hasan", role: "Peternak", image: hasanImage },
];

const team = [
  { name: "Stefanus F", role: "Project Manager", description: "Seorang peternak handal...", social: "#",image: kelvinImage },
  { name: "Amallia B", role: "Hipster", description: "Seorang peternak handal...", social: "#",image: kelvinImage },
  { name: "Rizkia A", role: "Hipster", description: "Seorang peternak handal...", social: "#",image: kelvinImage },
  { name: "Didik V", role: "Hipster", description: "Konsultan yang berpengalaman dalam peternakan unggas...", social: "#",image: kelvinImage },
  { name: "I Komang R S", role: "Hacker", description: "Ahli pemasaran yang siap membantu peternak...", social: "#",image: kelvinImage },
  { name: "Arie M Z", role: "Hacker", description: "Peneliti yang fokus pada kesehatan unggas...", social: "#",image: kelvinImage },
  { name: "Stefanus D C", role: "Hacker", description: "Teknisi unggas berpengalaman...", social: "#",image: kelvinImage },
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
    };

    const displayedMembers = [
        team[(currentIndex - 1 + team.length) % team.length],
        team[currentIndex],
        team[(currentIndex + 1) % team.length]
    ];

    return (
        <Layout>
        <div className="font-poppins">
            <section className=" text-black py-20 px-5 md:px-20 flex flex-col md:flex-row items-center min-h-96">
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold">Visi & Misi</h2>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed">Menjadi platform terpercaya yang mendukung kesehatan unggas dan kesejahteraan peternak melalui solusi digital yang inovatif dan berkelanjutan.</p>
                    <ul className="mt-6 space-y-4 text-lg md:text-xl leading-relaxed">
                        <li>🌐 Menyediakan akses mudah ke panduan kesehatan unggas yang komprehensif dan akurat.</li>
                        <li>🤝 Memberikan dukungan kepada peternak melalui fitur konsultasi ahli dan komunitas interaktif.</li>
                        <li>⚙️ Mengembangkan teknologi praktis untuk meningkatkan pengelolaan peternakan unggas secara efektif.</li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-center mt-10 md:mt-0">
                    <img src={logo} alt="Unggasku Logo" className="bg-primary-900 rounded-lg max-w-md h-80 md:max-w-md md:h-80" />
                </div>
            </section>

            <section className="bg-secondary-300 text-black my-20 py-20 px-5 md:px-20 flex flex-col md:flex-row items-center min-h-96">
                <div className="flex-1 flex justify-center mb-10 md:mb-0">
                    <img src={ttg1} alt="Tentang Unggasku" className="bg-primary-900 rounded-full max-w-md h-80 md:max-w-md md:h-80" />
                </div>
                <div className="flex-1 flex flex-col justify-center text-left md:max-w-md mx-40">
                    <h2 className="text-4xl md:text-5xl font-bold">Tentang Unggasku.id</h2>
                    <p className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed">
                        Unggasku.id didirikan sejak 2024 sebagai platform digital untuk mendukung kesehatan unggas. Kami menyediakan layanan konsultasi ahli dan panduan lengkap agar peternak dapat menjaga kesehatan ternaknya dengan lebih mudah. Dengan Unggasku.id, kami berkomitmen membantu mewujudkan peternakan unggas yang sehat dan berkelanjutan.
                    </p>
                </div>
            </section>

            <section className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-8">Apa kata mereka tentang Unggasku.id</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-yellow-300 p-4 rounded-lg shadow-md max-w-sm">
                            <img src={testimonial.image} alt={testimonial.author} className="w-full h-40 object-cover rounded-t-lg" />
                            <p className="mt-4 italic">"{testimonial.text}"</p>
                            <div className="mt-4 text-right font-bold">{testimonial.author}</div>
                            <div className="text-right text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-900 text-white p-8 text-center rounded-full m-8">
                <div className="flex justify-around">
                    <div className="mx-4">
                        <p className="text-lg font-semibold">Rp 5 Miliar</p>
                        <p>Kepuasan Pengguna</p>
                    </div>
                    <div className="mx-4">
                        <p className="text-lg font-semibold">2500+</p>
                        <p>Pengalaman Konsultasi</p>
                    </div>
                    <div className="mx-4">  
                        <p className="text-lg font-semibold">250+</p>
                        <p>Peternak Aktif</p>
                    </div>
                </div>
            </section>

            <section className="p-8 text-center">
                    <h2 className="text-2xl font-bold mb-8">Kenalan dengan Tim Kami</h2>
                    <div className="flex items-center justify-center space-x-4">
                        <button onClick={handlePrevious} className="font-bold text-xl text-white p-2 rounded-full bg-primary-800 hover:bg-primary-600">
                            {'<'}
                        </button>
                        {displayedMembers.map((member, index) => (
                            <div key={index} className="bg-yellow-300 p-4 rounded-lg shadow-md text-center w-64 mx-2">
                                <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                                <div className="text-3xl font-bold">{member.name}</div>
                                <div className="text-sm text-gray-600">{member.role}</div>
                                <p className="mt-2 text-gray-800">{member.description}</p>
                                <a href={member.social} className="mt-4 inline-block bg-black text-white py-1 px-4 rounded-lg">Sosial Media</a>
                            </div>
                        ))}
                        <button onClick={handleNext} className="font-bold text-xl text-white p-2 rounded-full bg-primary-800 hover:bg-primary-600">
                            {'>'}
                        </button>
                    </div>
            </section>
        </div>
        </Layout>
    );
};

export default About;