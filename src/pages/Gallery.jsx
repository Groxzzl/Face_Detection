import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'praktikum', name: 'Praktikum' },
    { id: 'event', name: 'Event' },
    { id: 'lomba', name: 'Lomba' },
    { id: 'kelas', name: 'Kegiatan Kelas' },
  ];

  const galleryItems = [
    { id: 1, title: 'Praktikum Jaringan Komputer', category: 'praktikum', date: '15 Nov 2025', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Konfigurasi Router Cisco', category: 'praktikum', date: '14 Nov 2025', color: 'from-indigo-400 to-indigo-600' },
    { id: 3, title: 'Study Tour ke Data Center', category: 'event', date: '10 Nov 2025', color: 'from-green-400 to-green-600' },
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
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeri Kegiatan</h1>
          <p className="text-xl text-gray-600">Dokumentasi kegiatan Kelas XI TJKT 1</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card overflow-hidden group cursor-pointer">
              <div className={`h-64 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.date}</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada kegiatan dalam kategori ini</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Upload Foto Kegiatan</h3>
            <p className="text-gray-600 mb-6">
              Punya foto kegiatan kelas? Kirimkan ke koordinator dokumentasi untuk ditampilkan di galeri
            </p>
            <button className="btn-primary">
              Hubungi Koordinator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
