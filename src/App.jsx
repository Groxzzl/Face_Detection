import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Announcements from './pages/Announcements';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
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
