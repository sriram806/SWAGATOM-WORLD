import { Sun } from "lucide-react";
import { motion } from "framer-motion";

function Program() {
    return (
        <section id="programs" className="py-20 bg-transparent mt-20 mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Program Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-center text-white mb-10">
                            Navarasa-9 Experiential Learnings
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Navarasa-9 is a curated program offering <b>9 unique, hands-on experiences</b> that foster creativity,
                            critical thinking, and practical skills. These immersive activities—like <b>shadow puppetry, pottery, and yoga</b>—enhance
                            emotional intelligence, innovation, and well-being.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Innovation: Pioneering creative and tech-driven learning experiences.",
                                "Inclusivity: Tailoring programs for both rural and urban communities.",
                                "Excellence: Delivering high-quality workshops with measurable outcomes.",
                                "Sustainability: Promoting eco-friendly and socially responsible practices.",
                                "Recognition: Empowering exceptional talent to shine on global stages."
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                                >
                                    <Sun className="w-6 h-6 text-yellow-500 mr-3" />
                                    <span className="text-gray-300">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="border border-gray-700 p-8 rounded-lg shadow-lg bg-gray-900"
                    >
                        <h3 className="text-2xl font-semibold text-center text-white mb-6">
                            Registration Details
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Child's Name"
                                className="w-full p-3 border rounded bg-gray-800 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="text"
                                placeholder="Roll Number"
                                className="w-full p-3 border rounded bg-gray-800 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
                            />
                            <select className="w-full p-3 border rounded bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500">
                                <option>Select Program</option>
                                <option>Shadow Puppetry</option>
                                <option>Pottery Making</option>
                                <option>Yoga Awareness & Wellness</option>
                                <option>Crochet Workshop</option>
                                <option>Nursery Visit & Dyeing</option>
                                <option>Culinary Workshop</option>
                                <option>Toymaking Workshop</option>
                                <option>Educational Trip</option>
                            </select>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400 transition duration-300"
                            >
                                Submit Registration
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Program;
