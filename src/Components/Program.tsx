import { Sun } from 'lucide-react';

function Program() {
    return (
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
    )
}

export default Program;