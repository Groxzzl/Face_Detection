const Profile = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title mb-2">Profil Kelas XI TJKT 1</h1>
          <p className="section-subtitle">SMK NU Hasyim Asyari</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Visi Kelas
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Menjadi kelas yang unggul dalam bidang Teknik Jaringan Komputer dan Telekomunikasi, 
              berakhlak mulia, dan mampu bersaing di era digital dengan mengedepankan nilai-nilai 
              keislaman dan kearifan lokal.
            </p>
          </div>

          <div className="card p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-600 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Misi Kelas
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Meningkatkan prestasi akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Mengembangkan keterampilan di bidang jaringan komputer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Membangun karakter yang berakhlak mulia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 font-bold">•</span>
                <span>Menciptakan lingkungan belajar yang kondusif</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">Struktur Organisasi Kelas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">WK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Wali Kelas</h3>
              <p className="text-slate-600 text-sm">Bapak/Ibu Guru</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">KK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Ketua Kelas</h3>
              <p className="text-primary-600 font-semibold text-sm">Ahmad Rizki</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">WK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Wakil Ketua</h3>
              <p className="text-primary-600 font-semibold text-sm">Siti Nurhaliza</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Sekretaris</h3>
              <p className="text-slate-600 text-sm">Dewi Lestari</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">B</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Bendahara</h3>
              <p className="text-slate-600 text-sm">Budi Santoso</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">K</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-slate-900">Koordinator</h3>
              <p className="text-slate-600 text-sm">Andi Pratama</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <div className="text-5xl font-bold text-primary-600 mb-2">36</div>
            <p className="text-slate-700 font-medium">Total Siswa</p>
          </div>

          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-50 to-green-100/50">
            <div className="text-5xl font-bold text-primary-600 mb-2">20</div>
            <p className="text-slate-700 font-medium">Siswa Laki-laki</p>
          </div>

          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <div className="text-5xl font-bold text-primary-600 mb-2">16</div>
            <p className="text-slate-700 font-medium">Siswa Perempuan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
