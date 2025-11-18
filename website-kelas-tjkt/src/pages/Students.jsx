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
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Daftar Siswa</h1>
          <p className="text-xl text-gray-600">Kelas XI TJKT 1 - Total {students.length} Siswa</p>
        </div>

        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari nama siswa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="card p-6 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{student.role}</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 italic">"{student.motto}"</p>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada siswa yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
