import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <nav className="fixed w-full transition bg-transparent shadow-md z-50 slide-down">
                <div className="max-w-7xl lg:ml-20 ml-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center sm:ml-10 ">
                            <img src="https://media-hosting.imagekit.io//ede03161e2da49d8/logo.png?Expires=1833770545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TeutU~sf62gjBH6OthznEX0kRRgdotvnfqDIiC9uB5WoCO6IoTITWx9PDBSipxbBXwvLlGU-9Wy92tjnvyOWTGaHINnvI9dS9zr80fmRVIpf0rdhT8NKaYqODJ6o4n3R4Jzj53SMYg~uzbNvhaqo~8~6EqSp1qqbcWrVRKnKWfxHoKd~IduexgO16PUbBINr02nccScixmPKh49DMsg0CcVwoh8RlduzKjG~cYBHdTBBQDoibx3o3FOBeCL5LbIpNFNlPLFKFbVeWp9j5Cs67sWl6z3PNZlXZRB8XN335ztumsD4CxGNZ-ea7qSLnKsSCmrivEa9BY0wX68vzXpbBA__" className="h-10 w-10" alt="Logo" />
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
        </div>
    )
}

export default Navbar;