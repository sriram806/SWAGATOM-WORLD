import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
    const allPrograms = [
        {
            title: "Culinary Workshop",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHqI2CVTYQ6X8eVXv1_kKMzJtfpMWIE634E6oUVJ0WyjOBuazUhjTXTZI4IZ2ZsDtqjs&usqp=CAU",
            description: "A culinary workshop is a hands-on cooking class where participants learn new techniques, ingredients, and cuisines from expert chefs."
        },
        {
            title: "Educational Trips",
            image: "https://www.educationalschooltrip.com/wp-content/uploads/School-trip-planning.jpg",
            description: "An educational trip is a learning experience outside the classroom, where students explore new places, cultures, and concepts, making learning fun and interactive."
        },
        {
            title: "Pottery",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPBTT1lOL_gRt7sgMBf2CFq1huYn4DqVL3g&s",
            description: "Pottery is the art of creating objects from clay, shaping, and firing them to create functional or decorative pieces, such as bowls, vases, and sculptures."
        },
        {
            title: "Shadow Puppetry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PWet-x8nqQ5zRjfCqF4tpRHMfLbgamF7WQ&s",
            description: "Shadow puppetry is an ancient storytelling art form using silhouettes of objects, hands, or puppets to create images on a screen, often accompanied by music, voiceovers, or narration."
        },
        {
            title: "Yoga",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzHOwx4uGsjEAdEwjRkP5gSQll2KxOMKmQw&s",
            description: "Yoga is a physical, mental, and spiritual practice originating from India, combining postures (asanas), breathing techniques (pranayama), and meditation to promote relaxation, flexibility, balance, and overall well-being."
        }
    ];

    const [visiblePrograms, setVisiblePrograms] = useState(allPrograms.slice(0, 3));
    const [expanded, setExpanded] = useState(false);
    const [flipped, setFlipped] = useState(Array(allPrograms.length).fill(false));

    const togglePrograms = () => {
        if (expanded) {
            setVisiblePrograms(allPrograms.slice(0, 3));
        } else {
            setVisiblePrograms(allPrograms);
        }
        setExpanded(!expanded);
    };

    const handleFlip = (index: number) => {
        setFlipped(prev => {
            const newFlipped = [...prev];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Programs & Services</h2>
                <div className="relative">
                    <div className="grid md:grid-cols-3 gap-8">
                        {visiblePrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full h-72 cursor-pointer"
                                onClick={() => handleFlip(index)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <AnimatePresence mode="wait">
                                    {flipped[index] ? (
                                        // Back Side (Description)
                                        <motion.div
                                            key="back"
                                            initial={{ rotateY: 180 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: -180 }}
                                            transition={{ duration: 0.6 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg"
                                        >
                                            <p className="text-gray-300 text-center">{program.description}</p>
                                            <button
                                                className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-md shadow hover:bg-yellow-600 transition duration-300"
                                                onClick={() => handleFlip(index)}
                                            >
                                                Back
                                            </button>
                                        </motion.div>
                                    ) : (
                                        // Front Side (Image + Title)
                                        <motion.div
                                            key="front"
                                            initial={{ rotateY: -180 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: 180 }}
                                            transition={{ duration: 0.6 }}
                                            className="absolute inset-0 border border-gray-700 bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                                        >
                                            <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                                            <div className="p-4 text-center">
                                                <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {allPrograms.length > 3 && (
                        <button
                            onClick={togglePrograms}
                            className="mt-6 block mx-auto bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                        >
                            {expanded ? "Close" : "Find Out More"}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;
