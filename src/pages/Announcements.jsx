import { motion } from 'framer-motion';
import { Calendar, AlertCircle, Info, CheckCircle, Megaphone } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Ujian Tengah Semester',
      date: '18 November 2025',
      category: 'Akademik',
      priority: 'high',
      content: 'Ujian Tengah Semester akan dilaksanakan mulai tanggal 25 November - 2 Desember 2025. Harap mempersiapkan diri dengan baik.',
    },
    {
      id: 2,
      title: 'Praktikum Jaringan Tambahan',
      date: '17 November 2025',
      category: 'Praktikum',
      priority: 'medium',
      content: 'Akan ada praktikum tambahan untuk persiapan sertifikasi MTCNA pada hari Sabtu, 23 November 2025 pukul 08:00 - 12:00 di Lab 2.',
    },
    {
      id: 3,
      title: 'Iuran Kas Kelas Bulan November',
      date: '15 November 2025',
      category: 'Keuangan',
      priority: 'medium',
      content: 'Pengumpulan iuran kas kelas bulan November sebesar Rp 20.000 paling lambat tanggal 20 November 2025. Hubungi bendahara kelas.',
    },
    {
      id: 4,
      title: 'Lomba Networking Competition',
      date: '10 November 2025',
      category: 'Event',
      priority: 'high',
      content: 'Selamat kepada tim kelas kita yang meraih Juara 2 dalam Lomba Networking Competition tingkat Provinsi! 🎉',
    },
    {
      id: 5,
      title: 'Study Tour ke Data Center',
      date: '8 November 2025',
      category: 'Event',
      priority: 'low',
      content: 'Dokumentasi lengkap study tour ke data center sudah tersedia di galeri. Terima kasih atas partisipasi semua siswa.',
    },
    {
      id: 6,
      title: 'Pengumpulan Project Akhir Semester',
      date: '5 November 2025',
      category: 'Akademik',
      priority: 'high',
      content: 'Deadline pengumpulan project akhir semester adalah tanggal 15 Desember 2025. Format pengumpulan: dokumentasi + presentasi.',
    },
    {
      id: 7,
      title: 'Rapat Kelas',
      date: '3 November 2025',
      category: 'Kelas',
      priority: 'medium',
      content: 'Rapat kelas akan diadakan pada hari Jumat, 22 November 2025 setelah jam pelajaran. Agenda: persiapan acara akhir tahun.',
    },
    {
      id: 8,
      title: 'Pembaruan Website Kelas',
      date: '1 November 2025',
      category: 'Informasi',
      priority: 'low',
      content: 'Website kelas telah diperbarui dengan fitur-fitur baru. Silakan eksplorasi dan berikan feedback kepada admin.',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 mr-1" />;
      case 'medium':
        return <Info className="w-4 h-4 mr-1" />;
      case 'low':
        return <CheckCircle className="w-4 h-4 mr-1" />;
      default:
        return <Info className="w-4 h-4 mr-1" />;
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'Penting';
      case 'medium': return 'Sedang';
      case 'low': return 'Info';
      default: return 'Info';
    }
  };

  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-2"
          >
            Pengumuman Kelas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Informasi terbaru dan penting untuk Kelas XI TJKT 1
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/30">
              <AlertCircle className="w-7 h-7 text-red-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Penting</h4>
            <p className="text-3xl font-bold text-red-400">
              {announcements.filter(a => a.priority === 'high').length}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
              <Info className="w-7 h-7 text-yellow-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Sedang</h4>
            <p className="text-3xl font-bold text-yellow-400">
              {announcements.filter(a => a.priority === 'medium').length}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <CheckCircle className="w-7 h-7 text-green-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Info</h4>
            <p className="text-3xl font-bold text-green-400">
              {announcements.filter(a => a.priority === 'low').length}
            </p>
          </motion.div>
        </div>

        <div className="space-y-6 mb-12">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h2 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{announcement.title}</h2>
                    <span className={`flex items-center text-xs px-3 py-1 rounded-full border font-medium ${getPriorityColor(announcement.priority)}`}>
                      {getPriorityIcon(announcement.priority)}
                      {getPriorityLabel(announcement.priority)}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {announcement.date}
                    </span>
                    <span className="bg-white/5 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium border border-white/10">
                      {announcement.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{announcement.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 border border-primary-500/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
              <Megaphone className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ada Pengumuman Penting?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Jika ada informasi penting yang perlu disampaikan ke seluruh kelas, segera hubungi perangkat kelas untuk ditambahkan ke papan pengumuman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-btn-primary">
                Hubungi Ketua Kelas
              </button>
              <button className="glass-btn">
                Hubungi Sekretaris
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Announcements;
