import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Home,
  Users,
  Image,
  Calendar,
  Bell,
  User,
  Phone,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Students', path: '/students', icon: Users },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'News', path: '/announcements', icon: Bell },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${scrolled ? 'py-4' : 'py-6'
        }`}>
        <div className="container-custom">
          <div className={`glass-panel px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-xl border-white/5' : 'bg-white/5 border-white/10'
            }`}>
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
              Class<span className="text-primary-400">X</span>
            </Link>

            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${active
                        ? 'text-white bg-white/10 shadow-glass-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="desktop-nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full mb-1.5"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link to="/contact" className="glass-btn-primary text-sm py-2 px-5">
              <Phone size={16} />
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar (Logo only) */}
      <div className={`fixed top-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3' : 'py-4'
        }`}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="text-xl font-display font-bold tracking-tighter text-white">
            Class<span className="text-primary-400">X</span>
          </Link>
          <Link to="/profile" className="p-2 rounded-full bg-white/5 border border-white/10">
            <User size={20} className="text-white" />
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <div className="glass-panel m-4 mb-4 border-t border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl">
          <div className="flex justify-around items-center h-16 px-2">
            {navItems.slice(0, 5).map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-item ${active ? 'active' : ''}`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 relative ${active ? 'bg-primary-500/20 text-primary-400 -translate-y-2 shadow-lg shadow-primary-500/20' : 'text-slate-400'
                    }`}>
                    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
