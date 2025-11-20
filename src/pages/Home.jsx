import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Trophy, Network, ArrowRight, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-primary-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-purple-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6 backdrop-blur-sm">
              SMK NU Hasyim Asyari
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Kelas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">XI TJKT 1</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Membangun masa depan digital dengan keahlian Teknik Jaringan Komputer dan Telekomunikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/profile" className="btn-primary text-lg px-8 py-4 group">
                Lihat Profil
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/students" className="px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2 backdrop-blur-sm">
                Daftar Siswa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-10 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">36</h3>
              <p className="text-slate-500 font-medium">Siswa Berbakat</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">15+</h3>
              <p className="text-slate-500 font-medium">Penghargaan</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">100%</h3>
              <p className="text-slate-500 font-medium">Dedikasi</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Kegiatan Terbaru</h2>
            <p className="section-subtitle">Momen-momen berharga dalam perjalanan pembelajaran kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Praktikum Jaringan",
                desc: "Konfigurasi router dan switch di lab komputer modern.",
                date: "15 Nov 2025",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Kunjungan Industri",
                desc: "Study tour ke Data Center Telkom Indonesia.",
                date: "10 Nov 2025",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Juara LKS",
                desc: "Meraih juara 2 Lomba Kompetensi Siswa tingkat Provinsi.",
                date: "05 Nov 2025",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-secondary inline-flex items-center gap-2">
              Lihat Semua Kegiatan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Menjadi Bagian dari Masa Depan?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Bergabunglah dengan kami dalam mengeksplorasi dunia teknologi yang tanpa batas.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Hubungi Kami
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
