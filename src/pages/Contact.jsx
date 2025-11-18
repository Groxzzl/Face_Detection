const Contact = () => {
  const contacts = [
    {
      role: 'Wali Kelas',
      name: 'Bapak/Ibu Guru',
      phone: '0812-3456-7890',
      email: 'walikelas@smknuhasyimasyari.sch.id',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      color: 'from-blue-500 to-blue-600',
    },
    {
      role: 'Ketua Kelas',
      name: 'Ahmad Rizki',
      phone: '0856-7890-1234',
      email: 'ahmad.rizki@student.sch.id',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-green-500 to-green-600',
    },
    {
      role: 'Wakil Ketua',
      name: 'Siti Nurhaliza',
      phone: '0857-8901-2345',
      email: 'siti.nurhaliza@student.sch.id',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-purple-500 to-purple-600',
    },
    {
      role: 'Sekretaris',
      name: 'Dewi Lestari',
      phone: '0858-9012-3456',
      email: 'dewi.lestari@student.sch.id',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      color: 'from-pink-500 to-pink-600',
    },
    {
      role: 'Bendahara',
      name: 'Budi Santoso',
      phone: '0859-0123-4567',
      email: 'budi.santoso@student.sch.id',
      icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      role: 'Koordinator',
      name: 'Andi Pratama',
      phone: '0851-2345-6789',
      email: 'andi.pratama@student.sch.id',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Kontak</h1>
          <p className="section-subtitle">Hubungi pengurus kelas untuk informasi lebih lanjut</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <div key={index} className="card p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{contact.role}</h3>
              <p className="text-primary-600 font-semibold mb-4 text-sm">{contact.name}</p>
              <div className="space-y-3">
                <a href={`tel:${contact.phone}`} className="flex items-center text-slate-700 hover:text-primary-600 transition-colors group">
                  <svg className="w-4 h-4 mr-2.5 text-slate-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center text-slate-700 hover:text-primary-600 transition-colors group">
                  <svg className="w-4 h-4 mr-2.5 text-slate-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm break-all">{contact.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Informasi Sekolah
            </h2>
            <div className="space-y-5">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">Alamat</h3>
                  <p className="text-slate-600 text-sm">Jl. Pendidikan No. 123, Kota, Provinsi 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">Telepon</h3>
                  <p className="text-slate-600 text-sm">(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600 text-sm">info@smknuhasyimasyari.sch.id</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <h3 className="font-semibold text-slate-900">Website</h3>
                  <p className="text-slate-600 text-sm">www.smknuhasyimasyari.sch.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kirim Pesan
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white hover:shadow-2xl transition-all duration-300">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Media Sosial Kelas</h2>
            <p className="text-primary-100 mb-8">Ikuti media sosial kami untuk update terbaru dan konten eksklusif</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                Instagram
              </a>
              <a href="#" className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                Facebook
              </a>
              <a href="#" className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                YouTube
              </a>
              <a href="#" className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
