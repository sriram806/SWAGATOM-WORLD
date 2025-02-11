import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
    const galleryImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMATOeBrQ7qKnCaj5U9KtKSqsCA4xX0uj0Q&s",
        "https://images.unsplash.com/photo-1496469888073-80de7e952517",
        "https://images.unsplash.com/photo-1486673748761-a8d18475c757",
        "https://images.unsplash.com/photo-1546058256-47154de4046c",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="animate-on-scroll py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Gallery
                </h2>

                {/* Image Container */}
                <div className="relative w-full max-w-2xl mx-auto">
                    <div
                        className="w-full h-72 overflow-hidden rounded-lg shadow-lg relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <img
                            src={`${galleryImages[currentIndex]}?auto=format&fit=crop&q=80`}
                            alt={`Gallery ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                            loading="lazy"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Image Thumbnails */}
                <div className="flex justify-center gap-2 mt-4">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-transform ${index === currentIndex ? "border-2 border-white scale-110" : "opacity-70"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                {/* Description */}
                <div className="text-left mt-8">
                    <center className="text-3xl font-bold mb-4 text-white">
                        Our Unique Offering
                    </center>
                    <p className="text-gray-400">Imagine a learning experience that goes beyond textbooks and classrooms.
                        Our <span className="text-blue-400 font-semibold">Navarasa-9 Experiential Learnings</span>  program offers 9 engaging, hands-on activities that help students
                        develop essential life skills, creativity, and emotional intelligence. By participating in these experiences,
                        students will gain confidence, critical thinking skills, and a deeper understanding of themselves and the world
                        around them.</p>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
