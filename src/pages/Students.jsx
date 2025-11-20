import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Award, Quote, Terminal, Filter, ChevronDown } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'officers', 'members'

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const students = [
    { id: 1, name: 'Ahmad Rizki', role: 'Ketua Kelas', motto: 'Belajar tanpa henti', color: 'from-blue-500 to-blue-600', type: 'officer' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Wakil Ketua', motto: 'Semangat pantang menyerah', color: 'from-purple-500 to-purple-600', type: 'officer' },
    { id: 3, name: 'Dewi Lestari', role: 'Sekretaris', motto: 'Teliti dan teratur', color: 'from-pink-500 to-pink-600', type: 'officer' },
    { id: 4, name: 'Budi Santoso', role: 'Bendahara', motto: 'Jujur dan amanah', color: 'from-green-500 to-green-600', type: 'officer' },
    { id: 5, name: 'Andi Pratama', role: 'Koordinator', motto: 'Kerja keras dan cerdas', color: 'from-orange-500 to-orange-600', type: 'officer' },
    { id: 6, name: 'Rina Wati', role: 'Anggota', motto: 'Berprestasi adalah kunci', color: 'from-indigo-500 to-indigo-600', type: 'member' },
    { id: 7, name: 'Dimas Aditya', role: 'Anggota', motto: 'Networking is everything', color: 'from-teal-500 to-teal-600', type: 'member' },
    { id: 8, name: 'Fitri Handayani', role: 'Anggota', motto: 'Belajar dengan hati', color: 'from-rose-500 to-rose-600', type: 'member' },
    { id: 9, name: 'Reza Firmansyah', role: 'Anggota', motto: 'Tekun dan sabar', color: 'from-cyan-500 to-cyan-600', type: 'member' },
    { id: 10, name: 'Nurul Azizah', role: 'Anggota', motto: 'Ilmu adalah cahaya', color: 'from-violet-500 to-violet-600', type: 'member' },
    { id: 11, name: 'Fajar Ramadhan', role: 'Anggota', motto: 'Berusaha dan berdoa', color: 'from-amber-500 to-amber-600', type: 'member' },
    { id: 12, name: 'Indah Permata', role: 'Anggota', motto: 'Sukses dimulai dari niat', color: 'from-fuchsia-500 to-fuchsia-600', type: 'member' },
    { id: 13, name: 'Yoga Pratama', role: 'Anggota', motto: 'Konsisten adalah kunci', color: 'from-lime-500 to-lime-600', type: 'member' },
    { id: 14, name: 'Ayu Lestari', role: 'Anggota', motto: 'Belajar dengan gembira', color: 'from-sky-500 to-sky-600', type: 'member' },
    { id: 15, name: 'Hendra Gunawan', role: 'Anggota', motto: 'Pantang menyerah', color: 'from-red-500 to-red-600', type: 'member' },
    { id: 16, name: 'Sari Rahayu', role: 'Anggota', motto: 'Rajin pangkal pandai', color: 'from-emerald-500 to-emerald-600', type: 'member' },
    { id: 17, name: 'Arif Hidayat', role: 'Anggota', motto: 'Berani mencoba', color: 'from-yellow-500 to-yellow-600', type: 'member' },
    { id: 18, name: 'Lina Marlina', role: 'Anggota', motto: 'Semangat belajar', color: 'from-purple-500 to-purple-600', type: 'member' },
    { id: 19, name: 'Bayu Setiawan', role: 'Anggota', motto: 'Fokus dan disiplin', color: 'from-blue-500 to-blue-600', type: 'member' },
    { id: 20, name: 'Eka Putri', role: 'Anggota', motto: 'Berpikir positif', color: 'from-pink-500 to-pink-600', type: 'member' },
    { id: 21, name: 'Doni Saputra', role: 'Anggota', motto: 'Kerja keras berbuah manis', color: 'from-green-500 to-green-600', type: 'member' },
    { id: 22, name: 'Maya Sari', role: 'Anggota', motto: 'Belajar dari kesalahan', color: 'from-orange-500 to-orange-600', type: 'member' },
    { id: 23, name: 'Rizal Fauzi', role: 'Anggota', motto: 'Terus berkembang', color: 'from-indigo-500 to-indigo-600', type: 'member' },
    { id: 24, name: 'Putri Ayu', role: 'Anggota', motto: 'Optimis meraih cita', color: 'from-teal-500 to-teal-600', type: 'member' },
    { id: 25, name: 'Agus Salim', role: 'Anggota', motto: 'Belajar sepanjang hayat', color: 'from-rose-500 to-rose-600', type: 'member' },
    { id: 26, name: 'Wulan Dari', role: 'Anggota', motto: 'Gigih dan ulet', color: 'from-cyan-500 to-cyan-600', type: 'member' },
    { id: 27, name: 'Irfan Hakim', role: 'Anggota', motto: 'Berilmu dan beramal', color: 'from-violet-500 to-violet-600', type: 'member' },
    { id: 28, name: 'Tari Wulandari', role: 'Anggota', motto: 'Sukses butuh perjuangan', color: 'from-amber-500 to-amber-600', type: 'member' },
    { id: 29, name: 'Fikri Ramadhan', role: 'Anggota', motto: 'Belajar dengan ikhlas', color: 'from-fuchsia-500 to-fuchsia-600', type: 'member' },
    { id: 30, name: 'Dina Mariana', role: 'Anggota', motto: 'Tekun dan teliti', color: 'from-lime-500 to-lime-600', type: 'member' },
    { id: 31, name: 'Wahyu Hidayat', role: 'Anggota', motto: 'Berani bermimpi', color: 'from-sky-500 to-sky-600', type: 'member' },
    { id: 32, name: 'Sinta Dewi', role: 'Anggota', motto: 'Rajin dan disiplin', color: 'from-red-500 to-red-600', type: 'member' },
    { id: 33, name: 'Rian Pratama', role: 'Anggota', motto: 'Fokus pada tujuan', color: 'from-emerald-500 to-emerald-600', type: 'member' },
    { id: 34, name: 'Nisa Aulia', role: 'Anggota', motto: 'Berprestasi untuk bangsa', color: 'from-yellow-500 to-yellow-600', type: 'member' },
    { id: 35, name: 'Faisal Ahmad', role: 'Anggota', motto: 'Kerja cerdas', color: 'from-purple-500 to-purple-600', type: 'member' },
    { id: 36, name: 'Laila Sari', role: 'Anggota', motto: 'Semangat juang tinggi', color: 'from-blue-500 to-blue-600', type: 'member' },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const matchesFilter = filter === 'all' ||
        (filter === 'officers' && student.type === 'officer') ||
        (filter === 'members' && student.type === 'member');
      return matchesSearch && matchesFilter;
    });
  }, [debouncedSearchTerm, filter, students]);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-4"
          >
            Database Siswa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            <span className="font-futuristic">Kelas XI TJKT 1</span> - Total <span className="font-bold text-primary-400">{students.length}</span> Siswa
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          {/* Terminal-style Search & Filter Bar */}
          <div className="glass-panel p-1.5 md:p-2 flex flex-col md:flex-row gap-2 bg-black/40 border-primary-500/20 shadow-neon">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Terminal className="h-5 w-5 text-primary-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 bg-black/20 border border-white/5 rounded-xl text-primary-100 placeholder-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 sm:text-sm font-mono transition-all"
                placeholder="> search_student..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex bg-black/20 rounded-xl p-1 border border-white/5">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-400 hover:text-white'
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('officers')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === 'officers' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-400 hover:text-white'
                  }`}
              >
                Officers
              </button>
              <button
                onClick={() => setFilter('members')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === 'members' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-400 hover:text-white'
                  }`}
              >
                Members
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudents.map((student) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={student.id}
                className={`glass-card p-4 md:p-6 group relative overflow-hidden ${student.type === 'officer' ? 'border-primary-500/30' : ''
                  }`}
              >
                {student.type === 'officer' && (
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary-500/20 w-full h-full transform rotate-45 translate-x-8 -translate-y-8"></div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${student.color || 'from-primary-500 to-primary-600'} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors">{student.name}</h3>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg border ${student.type === 'officer'
                      ? 'text-primary-300 bg-primary-500/10 border-primary-500/20'
                      : 'text-slate-400 bg-white/5 border-white/10'
                      }`}>
                      <Award className="w-3 h-3" />
                      {student.role}
                    </span>
                  </div>
                </div>

                <div className="relative p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-white/20 transform -scale-x-100" />
                  <p className="text-sm text-slate-300 italic text-center px-2 pt-2 font-light">
                    "{student.motto}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredStudents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
              <User className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Results Found</h3>
            <p className="text-slate-400">Try adjusting your search or filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Students;
