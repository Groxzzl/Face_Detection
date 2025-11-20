import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, User, Send, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      role: 'Wali Kelas',
      name: 'Bapak/Ibu Guru',
      phone: '0812-3456-7890',
      email: 'walikelas@smknuhasyimasyari.sch.id',
      color: 'from-blue-500 to-blue-600',
    },
    {
      role: 'Ketua Kelas',
      name: 'Ahmad Rizki',
      phone: '0856-7890-1234',
      email: 'ahmad.rizki@student.sch.id',
      color: 'from-green-500 to-green-600',
    },
    {
      role: 'Wakil Ketua',
      name: 'Siti Nurhaliza',
      phone: '0857-8901-2345',
      email: 'siti.nurhaliza@student.sch.id',
      color: 'from-purple-500 to-purple-600',
    },
    {
      role: 'Sekretaris',
      name: 'Dewi Lestari',
      phone: '0858-9012-3456',
      email: 'dewi.lestari@student.sch.id',
      color: 'from-pink-500 to-pink-600',
    },
    {
      role: 'Bendahara',
      name: 'Budi Santoso',
      phone: '0859-0123-4567',
      email: 'budi.santoso@student.sch.id',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      role: 'Koordinator',
      name: 'Andi Pratama',
      phone: '0851-2345-6789',
      email: 'andi.pratama@student.sch.id',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-2"
          >
            Kontak
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Hubungi pengurus kelas untuk informasi lebih lanjut
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-glass-lg hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{contact.role}</h3>
              <p className="text-primary-400 font-semibold mb-4 text-sm">{contact.name}</p>
              <div className="space-y-3">
                <a href={`tel:${contact.phone}`} className="flex items-center text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 mr-2.5 text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 mr-2.5 text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-sm break-all">{contact.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Globe className="w-6 h-6 mr-2 text-primary-400" />
              Informasi Sekolah
            </h2>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-primary-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Alamat</h3>
                  <p className="text-slate-400 text-sm mt-1">Jl. Pendidikan No. 123, Kota, Provinsi 12345</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-primary-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Telepon</h3>
                  <p className="text-slate-400 text-sm mt-1">(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-slate-400 text-sm mt-1">info@smknuhasyimasyari.sch.id</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="p-2 bg-white/5 rounded-lg mr-4 group-hover:bg-primary-500/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Website</h3>
                  <p className="text-slate-400 text-sm mt-1">www.smknuhasyimasyari.sch.id</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Send className="w-6 h-6 mr-2 text-primary-400" />
              Kirim Pesan
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all duration-300 bg-white/5 text-white placeholder-slate-500"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all duration-300 bg-white/5 text-white placeholder-slate-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all duration-300 bg-white/5 text-white placeholder-slate-500"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button type="submit" className="glass-btn-primary w-full justify-center">
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 bg-gradient-to-r from-primary-900/50 to-purple-900/50 text-white text-center border border-primary-500/20"
        >
          <h2 className="text-3xl font-bold mb-4">Media Sosial Kelas</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Ikuti media sosial kami untuk update terbaru dan konten eksklusif seputar kegiatan kelas</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="glass-btn hover:bg-white hover:text-primary-600 group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Instagram
            </a>
            <a href="#" className="glass-btn hover:bg-white hover:text-blue-600 group">
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Facebook
            </a>
            <a href="#" className="glass-btn hover:bg-white hover:text-red-600 group">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              YouTube
            </a>
            <a href="#" className="glass-btn hover:bg-white hover:text-green-600 group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
