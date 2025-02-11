import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://media-hosting.imagekit.io//ede03161e2da49d8/logo.png?Expires=1833770545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TeutU~sf62gjBH6OthznEX0kRRgdotvnfqDIiC9uB5WoCO6IoTITWx9PDBSipxbBXwvLlGU-9Wy92tjnvyOWTGaHINnvI9dS9zr80fmRVIpf0rdhT8NKaYqODJ6o4n3R4Jzj53SMYg~uzbNvhaqo~8~6EqSp1qqbcWrVRKnKWfxHoKd~IduexgO16PUbBINr02nccScixmPKh49DMsg0CcVwoh8RlduzKjG~cYBHdTBBQDoibx3o3FOBeCL5LbIpNFNlPLFKFbVeWp9j5Cs67sWl6z3PNZlXZRB8XN335ztumsD4CxGNZ-ea7qSLnKsSCmrivEa9BY0wX68vzXpbBA__"
              className="h-10 w-10"
              alt="Logo"
            />
            <span className="ml-2 text-2xl font-bold text-white">
              SWAGATOM WORLD
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Programs", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold hover:text-yellow-500 transition"
              >
                {item}
              </a>
            ))}
            {/* CTA Button */}
            <a
              href="#join"
              className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-500 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-900 text-white transition-all duration-300 ${
            isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-3 px-4">
            {["Home", "Programs", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-white hover:text-yellow-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <a
              href="#join"
              className="block text-center bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

