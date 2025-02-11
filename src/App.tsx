import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Program from './Components/Program';
import Services from './Components/Services';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Header />
      <Program />
      <Services />
      <About />
      <Gallery />
      {/* YouTube Video Section */}
      <section className="animate-on-scroll py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Watch Our Camp in Action</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Camp Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;