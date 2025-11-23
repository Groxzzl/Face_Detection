import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 pb-24 md:pb-10 border-t border-white/5 bg-black/20 backdrop-blur-lg">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-white inline-block">
              <span className="font-futuristic">XI TJKT 1</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Membangun generasi teknisi jaringan yang kompeten, berkarakter, dan siap menghadapi tantangan industri masa depan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-primary-500 hover:shadow-neon">
                <Instagram size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-primary-500 hover:shadow-neon">
                <Facebook size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-primary-500 hover:shadow-neon">
                <Youtube size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/students" className="hover:text-primary-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Students</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Gallery</Link></li>
              <li><Link to="/schedule" className="hover:text-primary-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Schedule</Link></li>
              <li><Link to="/announcements" className="hover:text-primary-400 transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">Announcements</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <Mail size={16} className="text-primary-500" />
                </div>
                <span className="group-hover:text-white transition-colors">tjkt1@smknuhasyimasyari.sch.id</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <Phone size={16} className="text-primary-500" />
                </div>
                <span className="group-hover:text-white transition-colors">(021) 1234-5678</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <MapPin size={16} className="text-primary-500" />
                </div>
                <span className="group-hover:text-white transition-colors">Jl. Pendidikan No. 123, Tarub, Tegal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} XI TJKT 1. All rights reserved.</p>
          <p>Designed By <span className="text-red-500 animate-pulse">XI TJKT 1 Student</span> for the future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
