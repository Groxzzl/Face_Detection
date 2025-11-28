import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, Camera, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'praktikum', name: 'Praktikum' },
    { id: 'event', name: 'Event' },
    { id: 'lomba', name: 'Lomba' },
    { id: 'kelas', name: 'Kegiatan Kelas' },
  ];

  const galleryItems = [
    { id: 1, title: 'Praktikum Mikrotik', category: 'praktikum', date: '15 Nov 2025', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Konfigurasi Router Cisco', category: 'praktikum', date: '14 Nov 2025', color: 'from-indigo-400 to-indigo-600' },
    { id: 3, title: 'Study Tour ke PT ICON PLUS SEMARANG', category: 'event', date: '10 Nov 2025', color: 'from-green-400 to-green-600' },
    { id: 4, title: 'Lomba Networking Competition', category: 'lomba', date: '5 Nov 2025', color: 'from-purple-400 to-purple-600' },
    { id: 5, title: 'Workshop Mikrotik', category: 'event', date: '3 Nov 2025', color: 'from-pink-400 to-pink-600' },
    { id: 6, title: 'Presentasi Project Akhir', category: 'kelas', date: '1 Nov 2025', color: 'from-yellow-400 to-yellow-600' },
    { id: 7, title: 'Praktikum Fiber Optic', category: 'praktikum', date: '28 Okt 2025', color: 'from-red-400 to-red-600' },
    { id: 8, title: 'Pelatihan Sertifikasi MTCNA', category: 'event', date: '25 Okt 2025', color: 'from-teal-400 to-teal-600' },
    { id: 9, title: 'Juara 2 LKS Jaringan', category: 'lomba', date: '20 Okt 2025', color: 'from-orange-400 to-orange-600' },
    { id: 10, title: 'Diskusi Kelompok Project', category: 'kelas', date: '18 Okt 2025', color: 'from-cyan-400 to-cyan-600' },
    { id: 11, title: 'Praktikum Wireless Network', category: 'praktikum', date: '15 Okt 2025', color: 'from-lime-400 to-lime-600' },
    { id: 12, title: 'Kunjungan Industri', category: 'event', date: '10 Okt 2025', color: 'from-emerald-400 to-emerald-600' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-4"
          >
            Galeri Kegiatan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Dokumentasi lengkap momen-momen kelas kami
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer glass-card overflow-hidden hover:shadow-glass-lg transition-all duration-300 p-0"
              >
                <div className={`h-64 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="bg-white/20 backdrop-blur-md p-3 rounded-full"
                    >
                      <Camera className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center text-xs font-medium bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full border border-primary-500/30">
                      <Tag className="w-3 h-3 mr-1" />
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-400 text-lg">Tidak ada kegiatan dalam kategori ini</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-3xl glass-panel p-8 md:p-12 text-center border border-primary-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Punya Foto Kegiatan?</h3>
              <p className="text-slate-300 mb-8 text-lg">
                Bagikan momen seru kelas! Hubungi tim dokumentasi untuk menambahkan foto ke galeri.
              </p>
              <button className="glass-btn-primary px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                Hubungi Tim Dokumentasi
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel overflow-hidden shadow-2xl p-0 border border-white/10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              <div className={`h-96 md:h-[500px] bg-gradient-to-br ${selectedImage.color} flex items-center justify-center`}>
                {/* Placeholder for actual image */}
                <Camera className="w-32 h-32 text-white/50" />
              </div>

              <div className="p-6 md:p-8 bg-slate-900/50 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full uppercase tracking-wider border border-primary-500/30">
                    {categories.find(c => c.id === selectedImage.category)?.name}
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedImage.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-slate-300">
                  Dokumentasi kegiatan {selectedImage.title} yang dilaksanakan pada tanggal {selectedImage.date}.
                  Kegiatan ini diikuti oleh seluruh siswa dengan antusias.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
