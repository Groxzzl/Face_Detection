import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Home, Users, Image, Calendar, Bell, User, Phone, ArrowRight } from 'lucide-react';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const pages = [
        { name: 'Home', path: '/', icon: Home, desc: 'Halaman utama' },
        { name: 'Students', path: '/students', icon: Users, desc: 'Daftar siswa kelas' },
        { name: 'Gallery', path: '/gallery', icon: Image, desc: 'Foto kegiatan' },
        { name: 'Schedule', path: '/schedule', icon: Calendar, desc: 'Jadwal pelajaran' },
        { name: 'Announcements', path: '/announcements', icon: Bell, desc: 'Pengumuman terbaru' },
        { name: 'Profile', path: '/profile', icon: User, desc: 'Profil kelas' },
        { name: 'Contact', path: '/contact', icon: Phone, desc: 'Hubungi kami' },
    ];

    const filteredPages = pages.filter(page =>
        page.name.toLowerCase().includes(query.toLowerCase()) ||
        page.desc.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10"
                    >
                        <div className="flex items-center px-4 border-b border-white/10">
                            <Search className="w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-none p-4 text-white placeholder-slate-500 focus:ring-0 focus:outline-none font-mono"
                                autoFocus
                            />
                            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-slate-400 font-mono">
                                <span>ESC</span>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredPages.length > 0 ? (
                                <div className="space-y-1">
                                    <div className="px-2 py-1.5 text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        Navigation
                                    </div>
                                    {filteredPages.map((page, index) => (
                                        <button
                                            key={page.path}
                                            onClick={() => handleNavigate(page.path)}
                                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-left group ${index === selectedIndex ? 'bg-primary-500/20 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${index === selectedIndex ? 'bg-primary-500/20 text-primary-400' : 'bg-white/5 text-slate-400 group-hover:text-white'
                                                }`}>
                                                <page.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium">{page.name}</div>
                                                <div className="text-xs text-slate-500 group-hover:text-slate-400">{page.desc}</div>
                                            </div>
                                            {index === selectedIndex && (
                                                <ArrowRight className="w-4 h-4 text-primary-400" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center text-slate-500">
                                    No results found.
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-3 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-slate-500">
                            <div className="flex gap-4">
                                <span><strong className="text-slate-400">↑↓</strong> to navigate</span>
                                <span><strong className="text-slate-400">↵</strong> to select</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Command className="w-3 h-3" />
                                <span>Command Palette</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
