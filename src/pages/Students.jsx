import { useState } from 'react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 1, name: 'Ahmad Rizki', role: 'Ketua Kelas', motto: 'Belajar tanpa henti' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Wakil Ketua', motto: 'Semangat pantang menyerah' },
    { id: 3, name: 'Dewi Lestari', role: 'Sekretaris', motto: 'Teliti dan teratur' },
    { id: 4, name: 'Budi Santoso', role: 'Bendahara', motto: 'Jujur dan amanah' },
    { id: 5, name: 'Andi Pratama', role: 'Koordinator', motto: 'Kerja keras dan cerdas' },
    { id: 6, name: 'Rina Wati', role: 'Anggota', motto: 'Berprestasi adalah kunci' },
    { id: 7, name: 'Dimas Aditya', role: 'Anggota', motto: 'Networking is everything' },
    { id: 8, name: 'Fitri Handayani', role: 'Anggota', motto: 'Belajar dengan hati' },
    { id: 9, name: 'Reza Firmansyah', role: 'Anggota', motto: 'Tekun dan sabar' },
    { id: 10, name: 'Nurul Azizah', role: 'Anggota', motto: 'Ilmu adalah cahaya' },
    { id: 11, name: 'Fajar Ramadhan', role: 'Anggota', motto: 'Berusaha dan berdoa' },
    { id: 12, name: 'Indah Permata', role: 'Anggota', motto: 'Sukses dimulai dari niat' },
    { id: 13, name: 'Yoga Pratama', role: 'Anggota', motto: 'Konsisten adalah kunci' },
    { id: 14, name: 'Ayu Lestari', role: 'Anggota', motto: 'Belajar dengan gembira' },
    { id: 15, name: 'Hendra Gunawan', role: 'Anggota', motto: 'Pantang menyerah' },
    { id: 16, name: 'Sari Rahayu', role: 'Anggota', motto: 'Rajin pangkal pandai' },
    { id: 17, name: 'Arif Hidayat', role: 'Anggota', motto: 'Berani mencoba' },
    { id: 18, name: 'Lina Marlina', role: 'Anggota', motto: 'Semangat belajar' },
    { id: 19, name: 'Bayu Setiawan', role: 'Anggota', motto: 'Fokus dan disiplin' },
    { id: 20, name: 'Eka Putri', role: 'Anggota', motto: 'Berpikir positif' },
    { id: 21, name: 'Doni Saputra', role: 'Anggota', motto: 'Kerja keras berbuah manis' },
    { id: 22, name: 'Maya Sari', role: 'Anggota', motto: 'Belajar dari kesalahan' },
    { id: 23, name: 'Rizal Fauzi', role: 'Anggota', motto: 'Terus berkembang' },
    { id: 24, name: 'Putri Ayu', role: 'Anggota', motto: 'Optimis meraih cita' },
    { id: 25, name: 'Agus Salim', role: 'Anggota', motto: 'Belajar sepanjang hayat' },
    { id: 26, name: 'Wulan Dari', role: 'Anggota', motto: 'Gigih dan ulet' },
    { id: 27, name: 'Irfan Hakim', role: 'Anggota', motto: 'Berilmu dan beramal' },
    { id: 28, name: 'Tari Wulandari', role: 'Anggota', motto: 'Sukses butuh perjuangan' },
    { id: 29, name: 'Fikri Ramadhan', role: 'Anggota', motto: 'Belajar dengan ikhlas' },
    { id: 30, name: 'Dina Mariana', role: 'Anggota', motto: 'Tekun dan teliti' },
    { id: 31, name: 'Wahyu Hidayat', role: 'Anggota', motto: 'Berani bermimpi' },
    { id: 32, name: 'Sinta Dewi', role: 'Anggota', motto: 'Rajin dan disiplin' },
    { id: 33, name: 'Rian Pratama', role: 'Anggota', motto: 'Fokus pada tujuan' },
    { id: 34, name: 'Nisa Aulia', role: 'Anggota', motto: 'Berprestasi untuk bangsa' },
    { id: 35, name: 'Faisal Ahmad', role: 'Anggota', motto: 'Kerja cerdas' },
    { id: 36, name: 'Laila Sari', role: 'Anggota', motto: 'Semangat juang tinggi' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Daftar Siswa</h1>
          <p className="section-subtitle">Kelas XI TJKT 1 - Total <span className="font-bold text-primary-600">{students.length}</span> Siswa</p>
        </div>

        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari nama siswa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="card p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-sm font-bold mr-4 group-hover:shadow-lg transition-all duration-300">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900 leading-tight">{student.name}</h3>
                  <p className="text-xs text-primary-600 font-medium bg-primary-50 w-fit px-2.5 py-1 rounded-lg mt-1">{student.role}</p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-700 italic">"{student.motto}"</p>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-slate-500 text-lg">Tidak ada siswa yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
