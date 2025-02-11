import { useState,useEffect } from "react";
function Gallery() {
      const galleryImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMATOeBrQ7qKnCaj5U9KtKSqsCA4xX0uj0Q&s",
        "https://images.unsplash.com/photo-1496469888073-80de7e952517",
        "https://images.unsplash.com/photo-1486673748761-a8d18475c757",
        "https://images.unsplash.com/photo-1546058256-47154de4046c"
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        }, 1500);
        return () => clearInterval(interval);
      }, []);
    return (
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
    )
}

export default Gallery