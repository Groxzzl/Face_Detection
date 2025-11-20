import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <span className="text-white font-bold text-lg">XI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Kelas XI TJKT 1</h3>
                <p className="text-slate-400 text-sm">SMK NU Hasyim Asyari</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Membangun generasi teknisi jaringan yang kompeten, berkarakter, dan siap menghadapi tantangan industri masa depan.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
              Kontak Kami
            </h3>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="group-hover:text-slate-300 transition-colors">tjkt1@smknuhasyimasyari.sch.id</span>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="group-hover:text-slate-300 transition-colors">(021) 1234-5678</span>
              </div>
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="group-hover:text-slate-300 transition-colors">Jl. Pendidikan No. 123, Tarub, Tegal</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
              Ikuti Kami
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Kelas XI TJKT 1. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed with <span className="text-red-500">❤</span> by Antigravity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
