import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Award, Quote } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 1, name: 'Ahmad Rizki', role: 'Ketua Kelas', motto: 'Belajar tanpa henti', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Wakil Ketua', motto: 'Semangat pantang menyerah', color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'Dewi Lestari', role: 'Sekretaris', motto: 'Teliti dan teratur', color: 'from-pink-500 to-pink-600' },
    { id: 4, name: 'Budi Santoso', role: 'Bendahara', motto: 'Jujur dan amanah', color: 'from-green-500 to-green-600' },
    { id: 5, name: 'Andi Pratama', role: 'Koordinator', motto: 'Kerja keras dan cerdas', color: 'from-orange-500 to-orange-600' },
    { id: 6, name: 'Rina Wati', role: 'Anggota', motto: 'Berprestasi adalah kunci', color: 'from-indigo-500 to-indigo-600' },
    { id: 7, name: 'Dimas Aditya', role: 'Anggota', motto: 'Networking is everything', color: 'from-teal-500 to-teal-600' },
    { id: 8, name: 'Fitri Handayani', role: 'Anggota', motto: 'Belajar dengan hati', color: 'from-rose-500 to-rose-600' },
    { id: 9, name: 'Reza Firmansyah', role: 'Anggota', motto: 'Tekun dan sabar', color: 'from-cyan-500 to-cyan-600' },
    { id: 10, name: 'Nurul Azizah', role: 'Anggota', motto: 'Ilmu adalah cahaya', color: 'from-violet-500 to-violet-600' },
    { id: 11, name: 'Fajar Ramadhan', role: 'Anggota', motto: 'Berusaha dan berdoa', color: 'from-amber-500 to-amber-600' },
    { id: 12, name: 'Indah Permata', role: 'Anggota', motto: 'Sukses dimulai dari niat', color: 'from-fuchsia-500 to-fuchsia-600' },
    { id: 13, name: 'Yoga Pratama', role: 'Anggota', motto: 'Konsisten adalah kunci', color: 'from-lime-500 to-lime-600' },
    { id: 14, name: 'Ayu Lestari', role: 'Anggota', motto: 'Belajar dengan gembira', color: 'from-sky-500 to-sky-600' },
    { id: 15, name: 'Hendra Gunawan', role: 'Anggota', motto: 'Pantang menyerah', color: 'from-red-500 to-red-600' },
    { id: 16, name: 'Sari Rahayu', role: 'Anggota', motto: 'Rajin pangkal pandai', color: 'from-emerald-500 to-emerald-600' },
    { id: 17, name: 'Arif Hidayat', role: 'Anggota', motto: 'Berani mencoba', color: 'from-yellow-500 to-yellow-600' },
    { id: 18, name: 'Lina Marlina', role: 'Anggota', motto: 'Semangat belajar', color: 'from-purple-500 to-purple-600' },
    { id: 19, name: 'Bayu Setiawan', role: 'Anggota', motto: 'Fokus dan disiplin', color: 'from-blue-500 to-blue-600' },
    { id: 20, name: 'Eka Putri', role: 'Anggota', motto: 'Berpikir positif', color: 'from-pink-500 to-pink-600' },
    { id: 21, name: 'Doni Saputra', role: 'Anggota', motto: 'Kerja keras berbuah manis', color: 'from-green-500 to-green-600' },
    { id: 22, name: 'Maya Sari', role: 'Anggota', motto: 'Belajar dari kesalahan', color: 'from-orange-500 to-orange-600' },
    { id: 23, name: 'Rizal Fauzi', role: 'Anggota', motto: 'Terus berkembang', color: 'from-indigo-500 to-indigo-600' },
    { id: 24, name: 'Putri Ayu', role: 'Anggota', motto: 'Optimis meraih cita', color: 'from-teal-500 to-teal-600' },
    { id: 25, name: 'Agus Salim', role: 'Anggota', motto: 'Belajar sepanjang hayat', color: 'from-rose-500 to-rose-600' },
    { id: 26, name: 'Wulan Dari', role: 'Anggota', motto: 'Gigih dan ulet', color: 'from-cyan-500 to-cyan-600' },
    { id: 27, name: 'Irfan Hakim', role: 'Anggota', motto: 'Berilmu dan beramal', color: 'from-violet-500 to-violet-600' },
    { id: 28, name: 'Tari Wulandari', role: 'Anggota', motto: 'Sukses butuh perjuangan', color: 'from-amber-500 to-amber-600' },
    { id: 29, name: 'Fikri Ramadhan', role: 'Anggota', motto: 'Belajar dengan ikhlas', color: 'from-fuchsia-500 to-fuchsia-600' },
    { id: 30, name: 'Dina Mariana', role: 'Anggota', motto: 'Tekun dan teliti', color: 'from-lime-500 to-lime-600' },
    { id: 31, name: 'Wahyu Hidayat', role: 'Anggota', motto: 'Berani bermimpi', color: 'from-sky-500 to-sky-600' },
    { id: 32, name: 'Sinta Dewi', role: 'Anggota', motto: 'Rajin dan disiplin', color: 'from-red-500 to-red-600' },
    { id: 33, name: 'Rian Pratama', role: 'Anggota', motto: 'Fokus pada tujuan', color: 'from-emerald-500 to-emerald-600' },
    { id: 34, name: 'Nisa Aulia', role: 'Anggota', motto: 'Berprestasi untuk bangsa', color: 'from-yellow-500 to-yellow-600' },
    { id: 35, name: 'Faisal Ahmad', role: 'Anggota', motto: 'Kerja cerdas', color: 'from-purple-500 to-purple-600' },
    { id: 36, name: 'Laila Sari', role: 'Anggota', motto: 'Semangat juang tinggi', color: 'from-blue-500 to-blue-600' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-4"
          >
            Daftar Siswa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Kelas XI TJKT 1 - Total <span className="font-bold text-primary-400">{students.length}</span> Siswa
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 max-w-md mx-auto relative"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama siswa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          />
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredStudents.map((student) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                key={student.id}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${student.color || 'from-primary-500 to-primary-600'} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors">{student.name}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-300 bg-primary-500/10 px-2 py-1 rounded-lg border border-primary-500/20">
                      <Award className="w-3 h-3" />
                      {student.role}
                    </span>
                  </div>
                </div>

                <div className="relative p-4 bg-white/5 rounded-xl border border-white/5">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-white/20 transform -scale-x-100" />
                  <p className="text-sm text-slate-300 italic text-center px-2 pt-2">
                    "{student.motto}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <User className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">Tidak ada siswa yang ditemukan</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Students;
