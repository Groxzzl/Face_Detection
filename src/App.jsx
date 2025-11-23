import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ThreeBackground from './components/ThreeBackground';

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
                <ThreeBackground />


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
