const Profile = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title mb-2">Profil Kelas XI TJKT 1</h1>
          <p className="section-subtitle">SMK NU Hasyim Asyari</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Visi Kelas
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Menjadi kelas yang unggul dalam bidang Teknik Jaringan Komputer dan Telekomunikasi,
              berakhlak mulia, dan mampu bersaing di era digital dengan mengedepankan nilai-nilai
              keislaman dan kearifan lokal.
            </p>
          </div>

          <div className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 text-primary-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Misi Kelas
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-primary-400 mr-3 font-bold">•</span>
                <span>Meningkatkan prestasi akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3 font-bold">•</span>
                <span>Mengembangkan keterampilan di bidang jaringan komputer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3 font-bold">•</span>
                <span>Membangun karakter yang berakhlak mulia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3 font-bold">•</span>
                <span>Menciptakan lingkungan belajar yang kondusif</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Struktur Organisasi Kelas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Wali Kelas", name: "Bapak/Ibu Guru", code: "WK", color: "from-primary-600 to-primary-700" },
              { role: "Ketua Kelas", name: "Ahmad Rizki", code: "KK", color: "from-primary-600 to-primary-700" },
              { role: "Wakil Ketua", name: "Siti Nurhaliza", code: "WK", color: "from-primary-600 to-primary-700" },
              { role: "Sekretaris", name: "Dewi Lestari", code: "S", color: "from-purple-600 to-purple-700" },
              { role: "Bendahara", name: "Budi Santoso", code: "B", color: "from-purple-600 to-purple-700" },
              { role: "Koordinator", name: "Andi Pratama", code: "K", color: "from-purple-600 to-purple-700" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xl font-bold">{item.code}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-white">{item.role}</h3>
                <p className="text-primary-300 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-primary-400 mb-2">36</div>
            <p className="text-slate-300 font-medium">Total Siswa</p>
          </div>

          <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-emerald-400 mb-2">20</div>
            <p className="text-slate-300 font-medium">Siswa Laki-laki</p>
          </div>

          <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-purple-400 mb-2">16</div>
            <p className="text-slate-300 font-medium">Siswa Perempuan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
