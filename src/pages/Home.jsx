import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Selamat Datang di Kelas XI TJKT 1
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              SMK NU Hasyim Asyari
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Teknik Jaringan Komputer dan Telekomunikasi - Kelas yang solid, kompak, dan berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Lihat Profil Kelas
              </Link>
              <Link to="/students" className="btn-secondary bg-primary-700 hover:bg-primary-600 text-white">
                Daftar Siswa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tentang Kelas Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">36 Siswa</h3>
              <p className="text-gray-600">Siswa-siswi berprestasi dan berbakat</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Berprestasi</h3>
              <p className="text-gray-600">Aktif dalam berbagai kompetisi dan lomba</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Fokus pada teknologi jaringan dan telekomunikasi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Kegiatan Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Praktikum Jaringan</h3>
                <p className="text-gray-600 mb-4">Praktikum konfigurasi router dan switch di lab komputer</p>
                <span className="text-sm text-primary-600 font-medium">15 November 2025</span>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Study Tour</h3>
                <p className="text-gray-600 mb-4">Kunjungan ke perusahaan IT dan data center</p>
                <span className="text-sm text-primary-600 font-medium">10 November 2025</span>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lomba Networking</h3>
                <p className="text-gray-600 mb-4">Juara 2 Lomba Konfigurasi Jaringan tingkat Provinsi</p>
                <span className="text-sm text-primary-600 font-medium">5 November 2025</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary">
              Lihat Galeri Lengkap
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Motto Kelas</h2>
          <p className="text-2xl font-semibold italic mb-8">
            "Bersama Membangun Jaringan, Bersama Meraih Prestasi"
          </p>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Kami adalah keluarga besar yang saling mendukung dalam belajar dan berkembang di bidang teknologi jaringan komputer dan telekomunikasi
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
