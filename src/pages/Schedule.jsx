const Schedule = () => {
  const schedule = [
    {
      day: 'Senin',
      classes: [
        { time: '07:00 - 08:30', subject: 'Matematika', teacher: 'Pak Budi', room: 'R.11' },
        { time: '08:30 - 10:00', subject: 'Bahasa Indonesia', teacher: 'Bu Siti', room: 'R.11' },
        { time: '10:15 - 11:45', subject: 'Sistem Komputer', teacher: 'Pak Ahmad', room: 'Lab 1' },
        { time: '12:30 - 14:00', subject: 'Jaringan Dasar', teacher: 'Pak Rudi', room: 'Lab 2' },
      ],
    },
    {
      day: 'Selasa',
      classes: [
        { time: '07:00 - 08:30', subject: 'Bahasa Inggris', teacher: 'Bu Dewi', room: 'R.11' },
        { time: '08:30 - 10:00', subject: 'Pendidikan Agama', teacher: 'Pak Hasan', room: 'R.11' },
        { time: '10:15 - 11:45', subject: 'Administrasi Infrastruktur Jaringan', teacher: 'Pak Andi', room: 'Lab 1' },
        { time: '12:30 - 14:00', subject: 'Teknologi Layanan Jaringan', teacher: 'Bu Rina', room: 'Lab 2' },
      ],
    },
    {
      day: 'Rabu',
      classes: [
        { time: '07:00 - 08:30', subject: 'PKN', teacher: 'Bu Maya', room: 'R.11' },
        { time: '08:30 - 10:00', subject: 'Fisika', teacher: 'Pak Doni', room: 'R.11' },
        { time: '10:15 - 11:45', subject: 'Komunikasi Data', teacher: 'Pak Yoga', room: 'Lab 1' },
        { time: '12:30 - 14:00', subject: 'Praktikum Jaringan', teacher: 'Pak Rudi', room: 'Lab 2' },
      ],
    },
    {
      day: 'Kamis',
      classes: [
        { time: '07:00 - 08:30', subject: 'Sejarah', teacher: 'Bu Lina', room: 'R.11' },
        { time: '08:30 - 10:00', subject: 'Seni Budaya', teacher: 'Pak Bayu', room: 'R.11' },
        { time: '10:15 - 11:45', subject: 'Sistem Operasi Jaringan', teacher: 'Pak Ahmad', room: 'Lab 1' },
        { time: '12:30 - 14:00', subject: 'Troubleshooting Jaringan', teacher: 'Pak Andi', room: 'Lab 2' },
      ],
    },
    {
      day: 'Jumat',
      classes: [
        { time: '07:00 - 08:30', subject: 'Pendidikan Jasmani', teacher: 'Pak Agus', room: 'Lapangan' },
        { time: '08:30 - 10:00', subject: 'Wirausaha', teacher: 'Bu Wulan', room: 'R.11' },
        { time: '10:15 - 11:45', subject: 'Project Based Learning', teacher: 'Pak Rudi', room: 'Lab 1' },
      ],
    },
  ];

  const colors = [
    'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300',
    'bg-gradient-to-r from-green-50 to-green-100 border-green-300',
    'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300',
    'bg-gradient-to-r from-pink-50 to-pink-100 border-pink-300',
    'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300',
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Jadwal Pelajaran</h1>
          <p className="section-subtitle">Kelas XI TJKT 1 - Tahun Ajaran 2025/2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className="card p-6 hover:shadow-xl transition-all duration-300">
              <div className={`${colors[dayIndex]} border-l-4 px-4 py-3 rounded-xl mb-4 font-bold text-slate-900 text-lg`}>
                {day.day}
              </div>
              <div className="space-y-3">
                {day.classes.map((classItem, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md hover:border-primary-300 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight pr-2">{classItem.subject}</h3>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-lg whitespace-nowrap font-medium">
                        {classItem.room}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-1.5 font-medium">{classItem.teacher}</p>
                    <p className="text-xs text-slate-500 flex items-center">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {classItem.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 flex items-center text-slate-900">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Informasi Penting
            </h3>
            <ul className="space-y-2.5 text-slate-700 text-sm">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Jam masuk: 07:00 WIB</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Istirahat 1: 10:00 - 10:15 WIB</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Istirahat 2: 11:45 - 12:30 WIB</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Setiap jam pelajaran: 90 menit</span>
              </li>
            </ul>
          </div>

          <div className="card p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 flex items-center text-slate-900">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Catatan
            </h3>
            <ul className="space-y-2.5 text-slate-700 text-sm">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Praktikum wajib menggunakan seragam praktikum</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Bawa laptop untuk mata pelajaran praktikum</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2.5 font-bold">•</span>
                <span>Jadwal dapat berubah sewaktu-waktu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
