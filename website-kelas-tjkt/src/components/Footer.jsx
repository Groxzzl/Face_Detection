const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Kelas XI TJKT 1</h3>
            <p className="text-gray-400 text-sm">
              SMK NU Hasyim Asyari
              <br />
              Teknik Jaringan Komputer dan Telekomunikasi
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <p className="text-gray-400 text-sm">
              Email: tjkt1@smknuhasyimasyari.sch.id
              <br />
              Telp: (021) 1234-5678
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kelas XI TJKT 1 SMK NU Hasyim Asyari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
