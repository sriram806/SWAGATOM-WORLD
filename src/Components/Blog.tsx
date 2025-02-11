import { useEffect, useRef } from "react";

function Blog() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let interval = setInterval(scroll, 3000);

    function scroll() {
      if (container) {
        container.scrollBy({ left: 300, behavior: "smooth" });
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }

    const stopScroll = () => clearInterval(interval);
    const startScroll = () => (interval = setInterval(scroll, 3000));

    container?.addEventListener("mouseenter", stopScroll);
    container?.addEventListener("mouseleave", startScroll);

    // Handle window resize
    const handleResize = () => {
      container?.scrollTo({ left: 0, behavior: "smooth" });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
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
  ];

  return (
    <section className="animate-on-scroll py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Latest from Our Blog
        </h2>
        <div className="relative flex items-center">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar scroll-smooth"
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="card w-96 flex-shrink-0 rounded-lg shadow-lg overflow-hidden flex bg-gray-950"
              >
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {blog.title}
                  </h4>
                  <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                  <a
                    href="#"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Read More →
                  </a>
                </div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-1/2 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hidden scrollbar CSS */}
      <style>
        {`
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
}

export default Blog;
