const Profile = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profil Kelas XI TJKT 1</h1>
          <p className="text-xl text-gray-600">SMK NU Hasyim Asyari</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">Visi Kelas</h2>
            <p className="text-gray-700 leading-relaxed">
              Menjadi kelas yang unggul dalam bidang Teknik Jaringan Komputer dan Telekomunikasi, 
              berakhlak mulia, dan mampu bersaing di era digital dengan mengedepankan nilai-nilai 
              keislaman dan kearifan lokal.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">Misi Kelas</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Meningkatkan prestasi akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Mengembangkan keterampilan di bidang jaringan komputer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Membangun karakter yang berakhlak mulia</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Menciptakan lingkungan belajar yang kondusif</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Struktur Organisasi Kelas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">WK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Wali Kelas</h3>
              <p className="text-gray-600">Bapak/Ibu Guru</p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">KK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Ketua Kelas</h3>
              <p className="text-gray-600">Ahmad Rizki</p>
            </div>

            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">WK</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Wakil Ketua</h3>
              <p className="text-gray-600">Siti Nurhaliza</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Sekretaris</h3>
              <p className="text-gray-600">Dewi Lestari</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Bendahara</h3>
              <p className="text-gray-600">Budi Santoso</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">K</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Koordinator</h3>
              <p className="text-gray-600">Andi Pratama</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">36</div>
            <p className="text-gray-600">Total Siswa</p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">20</div>
            <p className="text-gray-600">Siswa Laki-laki</p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">16</div>
            <p className="text-gray-600">Siswa Perempuan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
