import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Program from './Components/Program';
import Services from './Components/Services';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Youtube from './Components/Youtube';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />
      {/* Header Section */}
      <Header />
      {/* Programs Section */}
      <Program />
      {/* School Workshops & Services */}
      <Services />
      {/* About Us */}
      <About />
      {/* Gallery Section */}
      <Gallery />
      {/* YouTube Video Section */}
      <Youtube />
      {/* Blogs Section */}
      <Blog />
      {/* Contact & Social Media */}
      <Footer />
    </div>
  );
}

export default App;