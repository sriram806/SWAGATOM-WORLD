import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Blog() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let interval: NodeJS.Timeout;

    function startScroll() {
      interval = setInterval(() => {
        if (container) {
          container.scrollBy({ left: 275, behavior: "smooth" });
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
      setIsScrolling(true);
    }

    function stopScroll() {
      clearInterval(interval);
      setIsScrolling(false);
    }

    if (container) {
      startScroll();
      container.addEventListener("mouseenter", stopScroll);
      container.addEventListener("mouseleave", startScroll);
    }

    return () => {
      clearInterval(interval);
      container?.removeEventListener("mouseenter", stopScroll);
      container?.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  const blogs = [
    {
      title: "10 Essential Skills Kids Learn at Camp",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80",
    },
    {
      title: "The Benefits of Outdoor Education",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80",
    },
    {
      title: "Preparing Your Child for Summer Camp",
      date: "March 5, 2024",
      image:
        "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80",
    },
    {
      title: "10 Essential Skills Kids Learn at Camp",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80",
    },
    {
      title: "The Benefits of Outdoor Education",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80",
    },
    {
      title: "Preparing Your Child for Summer Camp",
      date: "March 5, 2024",
      image:
        "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?auto=format&fit=crop&q=80",
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -275, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 270, behavior: "smooth" });
  };

  return (
    <section className="animate-on-scroll py-5 bg-transprent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Latest from Our Blog
        </h2>

        {/* Scrollable Container with Buttons */}
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button className="absolute left-0 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition shadow-md" onClick={scrollLeft}>
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Blog List */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar scroll-smooth mx-10">
            {blogs.map((blog, index) => (
              <div key={index} className="card w-80 flex-shrink-0 rounded-lg shadow-lg overflow-hidden flex flex-col bg-gray-950">
                <div className="relative w-full h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {blog.title}
                  </h4>
                  <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button className="absolute right-0 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition shadow-md" onClick={scrollRight}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Auto-Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div
            className={`w-16 h-1 rounded-full transition-all ${isScrolling ? "bg-blue-500" : "bg-gray-500"}`}>
          </div>
        </div>
      </div>
      <style>
        {`.hide-scrollbar {scrollbar-width: none; -ms-overflow-style: none;}
          .hide-scrollbar::-webkit-scrollbar {display: none;}`}
      </style>
    </section>
  );
}

export default Blog;
