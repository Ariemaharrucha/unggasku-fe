import React from 'react';
import { Layout } from '../../layouts/Layout';

const Contact= () => {
    return (
      <Layout>
      <div className="font-poppins flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-6xl mb-10">
          <div className="bg-secondary-300 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            
            <div className="bg-gray-800 text-white p-8 md:w-1/2">
              <h2 className="text-xl font-semibold">Informasi Kontak</h2>
              <p className="mt-2">Halo, ada yang bisa kami bantu?</p>
              <ul className="mt-4 space-y-2">
                <li>📞 (021) 1234-5678</li>
                <li>✉️ unggasku.id@gmail.com</li>
                <li>🔗 @unggasku_id_official</li>
                <li>📍 Batam, Kepulauan Riau</li>
              </ul>
            </div>
            
            <div className="p-8 bg-secondary-300 md:w-1/2">
              <form>
                <form>
                  <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Nama Depan</label>
                    <input
                      type="text"
                      className="p-3 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Nama Belakang</label>
                    <input
                      type="text"
                      className="p-3 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      className="p-3 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 font-semibold text-gray-700">Nomor Telepon</label>
                    <input
                      type="text"
                      className="p-3 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                    />
                  </div>
                  </div>
                </form>
                
                <div className="mt-4">
                  <label className="block mb-2">Pilih Subjek:</label>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="flex items-center gap-1"><input type="radio" name="subject" /> Umum</label>
                    <label className="flex items-center gap-1"><input type="radio" name="subject" /> Pengaduan</label>
                    <label className="flex items-center gap-1"><input type="radio" name="subject" /> Layanan</label>
                    <label className="flex items-center gap-1"><input type="radio" name="subject" /> Saran dan Masukan</label>
                  </div>
                </div>
                
                <div className="col-span-2 py-6">
                  <label className="block mb-2 font-semibold text-gray-700">Pesan</label>
                  <textarea
                    placeholder="Tulis pesan anda..."
                    className="p-2 mt-4 w-full border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black h-20"
                  />
                </div>

                
                <button type="submit" className="mt-4 bg-gray-800 text-white py-2 px-4 rounded w-full md:w-auto">Kirim</button>
              </form>
            </div>
          </div>
        </div>
  
        <FAQSection />
      </div>
      </Layout>
    );
  };
  
  const FAQSection = () => {
    return (
      <div className="w-full max-w-3xl mt-12 p-6">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <FAQItem 
          question="Di mana saya bisa menemukan panduan lengkap perawatan unggas?" 
          answer="Anda dapat menemukan panduan perawatan unggas di halaman bantuan kami." 
        />
        <FAQItem 
          question="Apakah ada fitur untuk bertanya langsung kepada ahli?" 
          answer="Ya, Anda dapat menggunakan fitur konsultasi langsung untuk bertanya kepada ahli mengenai masalah kesehatan unggas Anda." 
        />
        <FAQItem 
          question="Kapan saya bisa mengakses fitur layanan untuk mendapatkan bantuan?" 
          answer="Fitur ini tersedia 24/7 di situs kami." 
        />
        <FAQItem 
          question="Bagaimana cara memberikan ulasan atau feedback tentang website ini?" 
          answer="Anda dapat memberikan feedback melalui formulir kontak kami." 
        />
      </div>
    );
  };
  
  const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className={`py-3 px-3 ${open ? 'bg-secondary-300' : 'bg-gray'} border-b ${open ? 'bg-secondary-300' : 'border-gray-300'} rounded-lg`}>
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full text-left font-medium text-gray-800 text-xl"
        >
          {question}
          <span>{open ? '−' : '+'}</span>
        </button>
        {open && (
          <p className="mt-2 text-gray-600 text-xl p-2">
            {answer}
          </p>
        )}
      </div>
    );
  };  

export default Contact;