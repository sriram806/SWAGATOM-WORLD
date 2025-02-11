import React from 'react'
import { Mail,Facebook,Twitter,Instagram } from 'lucide-react';
function Footer() {
  return (
          <section id="contact" className="animate-on-scroll py-20 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">Have questions? We'd love to hear from you!</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-black" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-black" />
                  <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded text-black"></textarea>
                  <button className="bg-yellow-500 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <a href="https://www.facebook.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500">
                    <Facebook className="w-6 h-6" />
                    <span>Follow us on Facebook</span>
                  </a>
                  <a href="https://www.linkedin.com/company/swagatom-world/" className="flex items-center space-x-3 hover:text-yellow-500">
                    <Twitter className="w-6 h-6" />
                    <span>Follow us on Twitter</span>
                  </a>
                  <a href="https://www.instagram.com/swagatom.world/" className="flex items-center space-x-3 hover:text-yellow-500">
                    <Instagram className="w-6 h-6" />
                    <span>Follow us on Instagram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 hover:text-yellow-500">
                    <Mail className="w-6 h-6" />
                    <span>help.swagatom@gmail.com</span>
                  </a>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Location</h3>
                  <p>Visakhapatnam</p>
                  <p>Andhara Pradesh</p>
                  <p>INDIA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Footer