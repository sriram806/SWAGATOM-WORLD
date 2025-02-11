import { useState } from "react";


function Services(){
    const allPrograms = [
        {
            title: "Culinary Workshop",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHqI2CVTYQ6X8eVXv1_kKMzJtfpMWIE634E6oUVJ0WyjOBuazUhjTXTZI4IZ2ZsDtqjs&usqp=CAU",
            description: "A culinary workshop is a hands-on cooking class where participants learn new techniques, ingredients, and cuisines from expert chefs."
        },
        {
            title: "Educational Trips",
            image: "https://www.educationalschooltrip.com/wp-content/uploads/School-trip-planning.jpg",
            description: "An educational trip is a learning experience outside the classroom, where students explore new places, cultures, and concepts, making learning fun and interactive."
        },
        {
            title: "Pottery",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPBTT1lOL_gRt7sgMBf2CFq1huYn4DqVL3g&s",
            description: "Pottery is the art of creating objects from clay, shaping, and firing them to create functional or decorative pieces, such as bowls, vases, and sculptures."
        },
        {
            title: "Shadow puppetry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PWet-x8nqQ5zRjfCqF4tpRHMfLbgamF7WQ&s",
            description: "Shadow puppetry is an ancient storytelling art form using silhouettes of objects, hands, or puppets to create images on a screen, often accompanied by music, voiceovers, or narration."
        },
        {
            title: "Yoga",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzHOwx4uGsjEAdEwjRkP5gSQll2KxOMKmQw&s",
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
  return (
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
  )
}

export default Services