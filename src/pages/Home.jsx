import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Trophy, Network, ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    <div className="overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary-200 text-sm font-medium mb-8 backdrop-blur-md shadow-glass-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              SMK NU Hasyim Asyari
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Kelas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-white to-primary-300">XI TJKT 1</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Membangun masa depan digital dengan keahlian Teknik Jaringan Komputer dan Telekomunikasi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/profile" className="glass-btn-primary w-full sm:w-auto text-lg px-8 py-4 group">
                Lihat Profil
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/students" className="glass-btn w-full sm:w-auto text-lg px-8 py-4 group">
                Daftar Siswa
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Users, count: "36", label: "Siswa Berbakat", color: "text-blue-400", bg: "bg-blue-500/20" },
              { icon: Trophy, count: "15+", label: "Penghargaan", color: "text-yellow-400", bg: "bg-yellow-500/20" },
              { icon: Network, count: "100%", label: "Dedikasi", color: "text-emerald-400", bg: "bg-emerald-500/20" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 flex items-center gap-6 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-1">{stat.count}</h3>
                  <p className="text-slate-400 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-24 relative">
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
                image: "https://images.unsplash.com/photo-1558494949-efc527b89406?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Kunjungan Industri",
                desc: "Study tour ke Data Center Telkom Indonesia.",
                date: "10 Nov 2025",
                image: "https://images.unsplash.com/photo-1558494949-efc527b89406?auto=format&fit=crop&w=800&q=80" // Placeholder, ideally different
              },
              {
                title: "Juara LKS",
                desc: "Meraih juara 2 Lomba Kompetensi Siswa tingkat Provinsi.",
                date: "05 Nov 2025",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-xs font-medium text-white/80 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">{item.desc}</p>
                  <Link to="/gallery" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="glass-btn inline-flex items-center gap-2">
              Lihat Semua Kegiatan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="glass-panel p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Siap Menjadi Bagian dari Masa Depan?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam mengeksplorasi dunia teknologi yang tanpa batas. Jadilah ahli jaringan masa depan.
            </p>
            <Link to="/contact" className="glass-btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
