import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-700/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Selamat Datang di <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Kelas XI TJKT 1</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              SMK NU Hasyim Asyari
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-700 leading-relaxed">
              Teknik Jaringan Komputer dan Telekomunikasi - Kelas yang solid, kompak, dan berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile" className="btn-primary bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg">
                Lihat Profil Kelas
              </Link>
              <Link to="/students" className="btn-secondary hover:bg-slate-200">
                Daftar Siswa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Tentang Kelas Kami</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-16">Komitmen kami dalam mengembangkan potensi setiap siswa</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">36 Siswa</h3>
              <p className="text-slate-600">Siswa-siswi berprestasi dan berbakat dari berbagai latar belakang</p>
            </div>

            <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Berprestasi</h3>
              <p className="text-slate-600">Aktif dalam berbagai kompetisi, lomba, dan kegiatan akademik</p>
            </div>

            <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Networking</h3>
              <p className="text-slate-600">Fokus pada teknologi jaringan dan telekomunikasi modern</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Kegiatan Terbaru</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-16">Dokumentasi momen-momen berharga kelas kami</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Praktikum Jaringan</h3>
                <p className="text-slate-600 mb-4 text-sm">Praktikum konfigurasi router dan switch di lab komputer dengan peralatan modern</p>
                <span className="text-sm text-primary-600 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  15 November 2025
                </span>
              </div>
            </div>

            <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Study Tour</h3>
                <p className="text-slate-600 mb-4 text-sm">Kunjungan edukatif ke perusahaan IT dan data center untuk memperluas wawasan</p>
                <span className="text-sm text-primary-600 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  10 November 2025
                </span>
              </div>
            </div>

            <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Lomba Networking</h3>
                <p className="text-slate-600 mb-4 text-sm">Juara 2 Lomba Konfigurasi Jaringan tingkat Provinsi - Pencapaian membanggakan</p>
                <span className="text-sm text-primary-600 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  5 November 2025
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              Lihat Galeri Lengkap
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Motto Kelas</h2>
          <p className="text-2xl md:text-3xl font-semibold italic mb-8 text-primary-100">
            "Bersama Membangun Jaringan, Bersama Meraih Prestasi"
          </p>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Kami adalah keluarga besar yang saling mendukung dalam belajar dan berkembang di bidang teknologi jaringan komputer dan telekomunikasi. Bersama kita wujudkan impian dan raih kesuksesan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
