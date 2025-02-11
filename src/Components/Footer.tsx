import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8">Have questions? We'd love to hear from you!</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded text-black"></textarea>
              <button className="bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links & Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-500 transition">Our Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
            </ul>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4">Get updates on our latest services & events.</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="w-full p-3 text-black rounded-l-md" />
                <button className="bg-yellow-500 text-black px-4 py-3 rounded-r-md hover:bg-yellow-400 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & Location */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <a href="https://www.facebook.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500 transition">
                <Facebook className="w-6 h-6" />
                <span>Follow us on Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/swagatom-world/" className="flex items-center space-x-3 hover:text-yellow-500 transition">
                <Twitter className="w-6 h-6" />
                <span>Follow us on Twitter</span>
              </a>
              <a href="https://www.instagram.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500 transition">
                <Instagram className="w-6 h-6" />
                <span>Follow us on Instagram</span>
              </a>
              <a href="mailto:help.swagatom@gmail.com" className="flex items-center space-x-3 hover:text-yellow-500 transition">
                <Mail className="w-6 h-6" />
                <span>help.swagatom@gmail.com</span>
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <p>Visakhapatnam</p>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400">© {new Date().getFullYear()} Swagatom World. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
