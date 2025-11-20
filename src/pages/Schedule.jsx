import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, User, Calendar, Info, AlertCircle } from 'lucide-react';

const Schedule = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(-1);
  const [activeClassIndex, setActiveClassIndex] = useState({ day: -1, class: -1 });

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

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Adjust day to match schedule array (0 = Monday)
      const scheduleDayIndex = day - 1;
      setCurrentDayIndex(scheduleDayIndex);

      if (scheduleDayIndex >= 0 && scheduleDayIndex < schedule.length) {
        const todayClasses = schedule[scheduleDayIndex].classes;
        let activeIndex = -1;

        todayClasses.forEach((cls, index) => {
          const [start, end] = cls.time.split(' - ');
          const [startH, startM] = start.split(':').map(Number);
          const [endH, endM] = end.split(':').map(Number);

          const startTime = startH * 60 + startM;
          const endTime = endH * 60 + endM;

          if (currentTime >= startTime && currentTime < endTime) {
            activeIndex = index;
          }
        });

        setActiveClassIndex({ day: scheduleDayIndex, class: activeIndex });
      } else {
        setActiveClassIndex({ day: -1, class: -1 });
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const colors = [
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-amber-500 to-orange-500',
  ];

  return (
    <div className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-2">Jadwal Pelajaran</h1>
          <p className="section-subtitle"><span className="font-futuristic">Kelas XI TJKT 1</span> - Tahun Ajaran 2025/2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {schedule.map((day, dayIndex) => {
            const isToday = currentDayIndex === dayIndex;

            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dayIndex * 0.1 }}
                className={`glass-card p-4 md:p-6 transition-all duration-500 relative overflow-hidden ${isToday ? 'border-primary-500/50 shadow-neon' : ''}`}
              >
                {isToday && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10 animate-pulse">
                    HARI INI
                  </div>
                )}

                <div className={`bg-gradient-to-r ${colors[dayIndex]} h-1.5 w-full absolute top-0 left-0`} />

                <div className="flex items-center justify-between mb-6 mt-2">
                  <h2 className={`text-2xl font-bold ${isToday ? 'text-white' : 'text-slate-300'}`}>
                    {day.day}
                  </h2>
                  <Calendar className={`w-5 h-5 ${isToday ? 'text-primary-400' : 'text-slate-500'}`} />
                </div>

                <div className="space-y-4">
                  {day.classes.map((classItem, index) => {
                    const isActive = activeClassIndex.day === dayIndex && activeClassIndex.class === index;

                    return (
                      <div
                        key={index}
                        className={`relative p-4 rounded-xl border transition-all duration-300 ${isActive
                          ? 'bg-primary-500/20 border-primary-500/50 shadow-lg shadow-primary-500/10'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                          }`}
                      >
                        {isActive && (
                          <div className="absolute -right-1 -top-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                        )}

                        <div className="flex justify-between items-start mb-2">
                          <h3 className={`font-semibold text-sm leading-tight pr-2 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                            {classItem.subject}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded-md font-medium whitespace-nowrap ${isActive
                            ? 'bg-primary-500 text-white'
                            : 'bg-white/10 text-slate-400'
                            }`}>
                            {classItem.room}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3 h-3" />
                            <span>{classItem.teacher}</span>
                          </div>
                          <div className={`flex items-center gap-1.5 ${isActive ? 'text-primary-300 font-bold' : ''}`}>
                            <Clock className="w-3 h-3" />
                            <span>{classItem.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-4 md:p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center text-white gap-2">
              <Info className="w-5 h-5 text-primary-400" />
              Informasi Penting
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5" />
                <span>Jam masuk: <span className="text-white font-medium">07:00 WIB</span> (Diharapkan hadir 15 menit sebelumnya)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5" />
                <span>Istirahat 1: <span className="text-white font-medium">10:00 - 10:15 WIB</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5" />
                <span>Istirahat 2: <span className="text-white font-medium">11:45 - 12:30 WIB</span> (Sholat Dzuhur)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5" />
                <span>Durasi per jam pelajaran: <span className="text-white font-medium">45 menit</span></span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 md:p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center text-white gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              Catatan
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                <span>Praktikum wajib menggunakan <strong>Wearpack / Seragam Jurusan</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                <span>Bawa laptop pribadi (jika ada) untuk mata pelajaran produktif.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                <span>Jadwal dapat berubah sewaktu-waktu menyesuaikan agenda sekolah.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
