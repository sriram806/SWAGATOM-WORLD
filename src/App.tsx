import { useRef, useState, useEffect } from 'react';
import {
  Sun,
  School,
  Users,
  Image as ImageIcon,
  Youtube,
  BookOpen,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Tent
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  {/*School Workshops & Services Start*/ }
  const allPrograms = [
    {
      title: "Culinary Workshop",
      image: "https://www.imghippo.com/i/vtgs8292Rs.jpg",
      description: "A culinary workshop is a hands-on cooking class where participants learn new techniques, ingredients, and cuisines from expert chefs."
    },
    {
      title: "Educational Trips",
      image: "https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22Educational%20Tri.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A44%3A35.972Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2Fd4a9ce4e79c84a2d%2FEducational%2520Tri.jpg%3FExpires%3D1833770676%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DMykxpVPF~gLFZaXP3tGcWE48C1nDXKIBCDIbugRDcitFLh~hCkrL3NccVhO3g-mYM7RBqjRU1LjHVh-H2GHkvIN5~keMlVMWAZjsD8NRI~Y1hApfBCUOKqzFzrbrtfzVoqGIyHTdrq5Kfy2ZqO54kKbkRwpD~tA0z6n2~xNV6F~h16eSq5YGbikE7Ob1EkHmpbOnVLjm3MySMXeK-Mvre~mGF6uVaVdRM8dLl6s-5IfS7p4~GxcXbPtN00weffWjlRWAJ9HEWtqxQwPTBzNe5N5qQQNRAbguYciP~brPtgzsj1oQJyQ-AR9ntnezYeuYn4av~eOH6HkAxyDwsU~W4A__%22%7D",
      description: "An educational trip is a learning experience outside the classroom, where students explore new places, cultures, and concepts, making learning fun and interactive."
    },
    {
      title: "Pottery",
      image: "https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22Pottery%20.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A44%3A35.964Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F96fcbd7f97ed4933%2FPottery%2520.jpg%3FExpires%3D1833770676%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DtIhkIfoDatavggrcxNTNIqVEy40iFmGFz8fPF6IUrAUZu0za93zNzEXZKBXoAhV9u6OHz-0UB4DDo5J47EvEeBTjlemNAiPXCpWlTQmk5HbO3oTn5JA~qmzmemgFwfd6H82ruC0kq63e5Nt5j-GX28qDX0~OZAgipTZxQ6Aftd13dDnoO~2iMeopqs~XFtqWVILL0nrgehxSUyNZZWeLGHThbw1VbD5GGNWtSOv8hkQ4I~i8Q7C1ukOiLJn~v1CNCtKsIhx3VphKmFbvJ2Z-XhuVa3X9mJSRNSEC8gWLzVw4yJh9SVZCGWuuTvcrIk50ZKF0JX~XJc4xnXTQcYuftQ__%22%7D",
      description: "Pottery is the art of creating objects from clay, shaping, and firing them to create functional or decorative pieces, such as bowls, vases, and sculptures."
    },
    {
      title: "Shadow puppetry",
      image: "https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22shadow.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A44%3A35.966Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F4a55d2745d1146c6%2Fshadow.jpg%3FExpires%3D1833770676%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DK14JzClV3Cv0GsypDYtprUOQOsW41sPZL1Zfwng~TbYjctjqXjcn7uf5BAU3pU5y7d5cQ50dvv1o6KwTxfs2ZHtXbPrCtn-BORR6kjmlv7vRyqdvgM0sqR5Z-K18v80YkS45Lol9LgxVPMfbqkdADhfU3nL9o21qXK2Shi0oxl74kQuyzyJOMPrsjwKkpkNaAsfn9DEUQLfuynA-4bpBFT24O~gDZLh3VyHvH95F~EbjcqA~VOdOQcKVHKmGHmsRVG4s29Nq~gEEzKXdQrQE2JTerld-YFE5iH~ffpLg3JgLdc9S095V9Px7nCQ~KttU3Vb~XNBzgmzgU3DRSaoeWg__%22%7D",
      description: "Shadow puppetry is an ancient storytelling art form using silhouettes of objects, hands, or puppets to create images on a screen, often accompanied by music, voiceovers, or narration."
    },
    {
      title: "Yoga",
      image: "https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22yoga.webp%22%2C%22type%22%3A%22image%2Fwebp%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A44%3A35.969Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F4732be2305ca4b15%2Fyoga.webp%3FExpires%3D1833770676%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3D2B46tH0yZdX3~7H1PFMH7GrfxL05Io0-herJoHXLeikyqmovE6mBvTK2CeaCwtElxA0YiS-18sDHknlOWVzh6anS8db5EyPxpSD7dTNHhu5HZfnjKQ~Puhlw0ks5JDe5AfE6MYJC~I8BMI4eRpdGBeeVlFuZANO0Zw-Ydsx23a~q4kiQFs~V0PPkBYpICIH9TwVjgbIHXTn0Zi8PdDqs8xvJbhIdo6brZIxfuj8xl3lpb-bb8tds-zKXwKDLbF1uZHzI105AFjTqNMgndfRMbp7AEpWmFvTUHc52-Mur9Fm13DwX2y4bBvcR-xhSAnzslI-1eE3pWU~Mhrx~QntEbA__%22%7D",
      description: "Yoga is a physical, mental, and spiritual practice originating from India, combining postures (asanas), breathing techniques (pranayama), and meditation to promote relaxation, flexibility, balance, and overall well-being."
    }
  ];

  const [visiblePrograms, setVisiblePrograms] = useState(allPrograms.slice(0, 3));
  const [expanded, setExpanded] = useState(false);

  const togglePrograms = () => {
    if (expanded) {
      setVisiblePrograms(allPrograms.slice(0, 3));
    } else {
      setVisiblePrograms(allPrograms);
    }
    setExpanded(!expanded);
  };
  {/*School Workshops & Services End*/ }
  {/*Blog Section*/ }
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          scrollContainerRef.current.scrollLeft +
          scrollContainerRef.current.clientWidth >=
          scrollContainerRef.current.scrollWidth
        ) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const blogs = [
    {
      title: "10 Essential Skills Kids Learn at Camp",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80"
    },
    {
      title: "The Benefits of Outdoor Education",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80"
    },
    {
      title: "Preparing Your Child for Summer Camp",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1445521543047-a000602c6310?auto=format&fit=crop&q=80"
    },
    {
      title: "10 Essential Skills Kids Learn at Camp",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80"
    },
    {
      title: "The Benefits of Outdoor Education",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80"
    },
    {
      title: "Preparing Your Child for Summer Camp",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1445521543047-a000602c6310?auto=format&fit=crop&q=80"
    },
  ];
  {/*Blog End */ }
  {/*Gallery*/ }
  const galleryImages = [
    "https://images.unsplash.com/photo-1496469888073-80de7e952517",
    "https://images.unsplash.com/photo-1486673748761-a8d18475c757",
    "https://images.unsplash.com/photo-1445521543047-a000602c6310",
    "https://images.unsplash.com/photo-1546058256-47154de4046c"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  {/*Gallery End */ }
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
      {/* Navigation */}
      <nav className="fixed w-full transition bg-transparent shadow-md z-50 slide-down">
        <div className="max-w-7xl lg:ml-20 ml-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center sm:ml-10 ">
              <img src="https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22logo.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A42%3A25.077Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2Fede03161e2da49d8%2Flogo.png%3FExpires%3D1833770545%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DTeutU~sf62gjBH6OthznEX0kRRgdotvnfqDIiC9uB5WoCO6IoTITWx9PDBSipxbBXwvLlGU-9Wy92tjnvyOWTGaHINnvI9dS9zr80fmRVIpf0rdhT8NKaYqODJ6o4n3R4Jzj53SMYg~uzbNvhaqo~8~6EqSp1qqbcWrVRKnKWfxHoKd~IduexgO16PUbBINr02nccScixmPKh49DMsg0CcVwoh8RlduzKjG~cYBHdTBBQDoibx3o3FOBeCL5LbIpNFNlPLFKFbVeWp9j5Cs67sWl6z3PNZlXZRB8XN335ztumsD4CxGNZ-ea7qSLnKsSCmrivEa9BY0wX68vzXpbBA__%22%7D" className="h-10 w-10" alt="Logo" />
              <span className="ml-2 text-2xl font-bold text-white">SWAGATOM WORLD</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <small>
                <a href="#" className="text-white font-bold hover:text-yellow-500 transition">Home</a>
              </small>
              <small>
                <a href="#programs" className="text-white font-bold hover:text-yellow-500 transition">Programs</a>
              </small>
              <small>
                <a href="#about" className="text-white font-bold hover:text-yellow-500 transition">About</a>
              </small>
              <small>
                <a href="#contact" className="text-white font-bold hover:text-yellow-500 transition">Contact</a>
              </small>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-500 transition"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden text-white">
              <div className="bg-black rounded-lg px-2 pt-2 pb-3 space-y-1 shadow-lg">
                <small>
                  <a href="#" className="block px-3 py-2 text-white hover:text-yellow-500 transition">Home</a>
                </small>
                <small>
                  <a href="#programs" className="block px-3 py-2 text-white hover:text-yellow-500 transition">Programs</a>
                </small>
                <small>
                  <a href="#about" className="block px-3 py-2 text-white hover:text-yellow-500 transition">About</a>
                </small>
                <small>
                  <a href="#contact" className="block px-3 py-2 text-white hover:text-yellow-500 transition">Contact</a>
                </small>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="assets/background/bg.jpg"
            alt="Summer camp hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Welcome to Swagatom World LLP</h1>
          <p className="text-xl text-gray-200 mb-8">Discover a new way of learning that combines fun, creativity, and practical skills with our Navarasa-9</p>
          <a href="#programs" className="text-white hover:text-yellow-500 transition"><button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition mx-auto">Know More </button></a>
        </div>
      </header>

      {/* Programs Section */}
      <section id="programs" className="animate-on-scroll py-20 bg-transperent mt-20 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <center className="text-3xl font-bold text-white mb-10">Navarasa-9 Experiential Learnings</center>
              <p className="text-gray-400 mt-5 mb-8">Navarasa-9 Experiential Learnings is a curated program offering 9 unique,
                hands-on experiences that foster creativity, critical thinking, and practical skills in students.
                These experiences, such as shadow puppetry, pottery making, and yoga, are designed to enhance students'
                emotional intelligence, creativity, and overall well-being.
              </p>
              <div className="space-y-10">
                <div className="flex items-center ">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Innovation: Pioneering creative and tech-driven learning experiences.</span>
                </div>
                <div className="flex items-center ">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Inclusivity: Tailoring programs for both rural and urban communities.</span>
                </div>
                <div className="flex items-center ">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Excellence: Delivering high-quality workshops with measurable outcomes.</span>
                </div>
                <div className="flex items-center ">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Sustainability: Promoting eco-friendly and socially responsible practices.</span>
                </div>
                <div className="flex items-center ">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Recognition: Empowering exceptional talent to shine on global stages.</span>
                </div>
              </div>
            </div>
            <div className="card border transprent p-8 rounded-lg shadow-lg mt-20">
              <center className="text-2xl font-semibold mb-6 text-white">Registration Details</center>
              <form className="space-y-4">
                <input type="text" placeholder="Child's Name" className="w-full p-3 border rounded text-gray-400 bg-transparent" />
                <input type="email" placeholder="Roll Number" className="w-full p-3 border rounded text-gray-400 bg-transparent" />
                <select className="w-full p-3 border rounded text-gray-600 bg-transparent">
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Select Program</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Shadow Puppetry</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Pottery Making</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Yoga Awareness & Wellness</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Crochet Workshop</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Nursery Visit & Dyeing</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Culinary Workshop</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Toymaking Workshop</option>
                  <option className="w-full p-3 border rounded text-gray-600 bg-transparent">Educational Trip</option>

                </select>
                <button className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400">
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* School Workshops & Services */}
      <section className="animate-on-scroll py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Programs & Services</h2>
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {visiblePrograms.map((program, index) => (
                <div key={index} className="border border-gray-700 bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                  <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{program.title}</h3>
                    <p className="text-gray-400">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {allPrograms.length > 3 && (
              <button
                onClick={togglePrograms}
                className="mt-6 block mx-auto bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                {expanded ? "Close" : "Find Out More"}
              </button>
            )}
          </div>
        </div>
      </section>
      {/* About Us */}
      <section id="about" className="animate-on-scroll bg-black">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22screenshot_1739162810669.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-02-10T04%3A46%3A47.715Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2F9de7e2fdb89c4b7c%2Fscreenshot_1739162810669.png%3FExpires%3D1833770808%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DrRQV5bOLQQ8lHphifw~SrLriylJbnL4WN56~rZbczaDAXWy4Yev1Z0Jghvc8rmKGLw-4i4ZCQd9rNJRbZcanUeoMMF878SNwcnY~AcJpdTKmwsNqKzxoqanaEerC~935V08qHz~3UZ9W5LWBt5FDuZnfORoSPytyeOYCKo-yF8eKtlcrMAPFfhXbzUgCYC3a6M3hOqHoY52joMU5U-b-25blqqE8Z0Hz9dZnkbWwQ9BcgxnJ1VEp6cxWJBmgViGSrnXSoR1ycrX9yrKFVUPIDEPHf7y4T2mlRwm3Cgdke~FW1Q7dFVldcM6J0O9PnMyBhW7eNYwLnNQR6qkLTxuTxQ__%22%7D"
                alt="About us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <center className="text-5xl font-bold text-white mb-10">Our Mission and Values</center>
              <center><p className="text-gray-400 font-arial mb-6">
                Meet two young entrepreneurs dedicated to embedding experiential learning in school education.
                They aim to enhance student learning, creativity, and employability while creating memorable
                experiences. With innovative ideas, they focus on making experiential learning affordable and
                accessible to all Indian school students.Their mission is to bridge the gap between theory and
                practice, foster creativity and critical thinking, and enhance employability. They develop
                experiential learning programs, provide teacher training, and partner with industry experts.
                Their technology-enabled platforms facilitate experiential learning, making it more accessible.
                Their efforts have impacted numerous schools and students. They plan to scale up operations,
                develop new programs, and advocate for policy changes to integrate experiential learning into
                mainstream education. These entrepreneurs are pioneering a revolution in Indian school education,
                empowering students to become creative, confident, and career-ready.
              </p></center>
              <div className="grid grid-cols-2 gap-9 text-center">
                <div className="p-4 bg-transprent rounded-lg shadow">
                  <div className="text-2xl font-bold text-yellow-500">Digvijay Naidu Atla</div>
                  <div className="text-gray-300">Founder</div>
                </div>
                <div className="p-4 bg-transprent rounded-lg shadow">
                  <div className="text-2xl font-bold text-yellow-500">Gopi Krishna Davala</div>
                  <div className="text-gray-300">Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="animate-on-scroll py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-72 overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${galleryImages[currentIndex]}?auto=format&fit=crop&q=80`}
                alt={`Gallery ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-4 text-white">Our Unique Offering</h3>
              <p className="text-gray-400">Imagine a learning experience that goes beyond textbooks and classrooms.
                Our Navarasa-9 Experiential Learnings program offers 9 engaging, hands-on activities that help students
                develop essential life skills, creativity, and emotional intelligence. By participating in these experiences,
                students will gain confidence, critical thinking skills, and a deeper understanding of themselves and the world
                around them.</p>
            </div>
          </div>
        </div>
      </section>
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

      {/* Blogs Section */}
      <section className="animate-on-scroll py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest from Our Blog</h2>
          <div className="relative flex items-center">
            <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar scroll-smooth">
              {blogs.map((blog, index) => (
                <div key={index} className="card w-96 flex-shrink-0 rounded-lg shadow-lg overflow-hidden flex bg-gray-950">
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-2 text-white">{blog.title}</h4>
                    <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                  </div>
                  <img src={blog.image} alt={blog.title} className="w-1/2 h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section id="contact" className="animate-on-scroll py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">Have questions? We'd love to hear from you!</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded text-black"></textarea>
                <button className="bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a href="https://www.facebook.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500">
                  <Facebook className="w-6 h-6" />
                  <span>Follow us on Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/swagatom-world/" className="flex items-center space-x-3 hover:text-yellow-500">
                  <Twitter className="w-6 h-6" />
                  <span>Follow us on Twitter</span>
                </a>
                <a href="https://www.instagram.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500">
                  <Instagram className="w-6 h-6" />
                  <span>Follow us on Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 hover:text-yellow-500">
                  <Mail className="w-6 h-6" />
                  <span>help.swagatom@gmail.com</span>
                </a>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Location</h3>
                <p>Visakhapatnam</p>
                <p>Andhara Pradesh</p>
                <p>INDIA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;