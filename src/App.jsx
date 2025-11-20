import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

import Home from './pages/Home';
import Students from './pages/Students';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Announcements from './pages/Announcements';
import Contact from './pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-slate-100 selection:bg-primary-500 selection:text-white relative">
                <div className="mesh-bg"></div>

                {/* Dynamic Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
                    <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-900/20 rounded-full blur-[100px] animate-blob"></div>
                    <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
                </div>

                <Navbar />
                <CommandPalette />

                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/announcements" element={<Announcements />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
