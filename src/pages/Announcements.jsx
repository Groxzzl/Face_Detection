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
        return 'bg-red-100 text-red-700 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high':
        return 'Penting';
      case 'medium':
        return 'Sedang';
      case 'low':
        return 'Info';
      default:
        return 'Info';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Pengumuman Kelas</h1>
          <p className="section-subtitle">Informasi terbaru dan penting untuk Kelas XI TJKT 1</p>
        </div>

        <div className="space-y-6 mb-12">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="card p-6 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h2 className="text-xl font-bold text-slate-900">{announcement.title}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${getPriorityColor(announcement.priority)}`}>
                      {getPriorityLabel(announcement.priority)}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {announcement.date}
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-xs font-medium">
                      {announcement.category}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{announcement.content}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 mb-12 hover:shadow-xl transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ada Pengumuman?</h3>
            <p className="text-slate-700 mb-6">
              Jika ada informasi penting yang perlu disampaikan ke seluruh kelas, hubungi ketua kelas atau sekretaris
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Hubungi Ketua Kelas
              </button>
              <button className="btn-secondary">
                Hubungi Sekretaris
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-red-50 to-red-100/50">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Penting</h4>
            <p className="text-3xl font-bold text-primary-600">
              {announcements.filter(a => a.priority === 'high').length}
            </p>
          </div>

          <div className="card p-6 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100/50">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Sedang</h4>
            <p className="text-3xl font-bold text-primary-600">
              {announcements.filter(a => a.priority === 'medium').length}
            </p>
          </div>

          <div className="card p-6 text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-50 to-green-100/50">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Info</h4>
            <p className="text-3xl font-bold text-primary-600">
              {announcements.filter(a => a.priority === 'low').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
