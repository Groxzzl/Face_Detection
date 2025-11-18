const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-auto border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">XI</span>
              </div>
              <h3 className="text-lg font-bold">Kelas XI TJKT 1</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              SMK NU Hasyim Asyari
              <br />
              Teknik Jaringan Komputer dan Telekomunikasi
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>Email: tjkt1@smknuhasyimasyari.sch.id</p>
              <p>Telp: (021) 1234-5678</p>
              <p>Alamat: Jl. Pendidikan No. 123</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 text-sm font-medium">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 text-sm font-medium">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 text-sm font-medium">
                YT
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-8">
          <p className="text-slate-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Kelas XI TJKT 1 SMK NU Hasyim Asyari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
