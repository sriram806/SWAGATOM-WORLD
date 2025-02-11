import { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

function About() {
  useEffect(() => {
    // Scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src="https://media-hosting.imagekit.io//9de7e2fdb89c4b7c/screenshot_1739162810669.png?Expires=1833770808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rRQV5bOLQQ8lHphifw~SrLriylJbnL4WN56~rZbczaDAXWy4Yev1Z0Jghvc8rmKGLw-4i4ZCQd9rNJRbZcanUeoMMF878SNwcnY~AcJpdTKmwsNqKzxoqanaEerC~935V08qHz~3UZ9W5LWBt5FDuZnfORoSPytyeOYCKo-yF8eKtlcrMAPFfhXbzUgCYC3a6M3hOqHoY52joMU5U-b-25blqqE8Z0Hz9dZnkbWwQ9BcgxnJ1VEp6cxWJBmgViGSrnXSoR1ycrX9yrKFVUPIDEPHf7y4T2mlRwm3Cgdke~FW1Q7dFVldcM6J0O9PnMyBhW7eNYwLnNQR6qkLTxuTxQ__"
              alt="About us" className="rounded-lg shadow-lg w-full"/>
          </motion.div>

          {/* Right Section - Text */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl font-bold text-white text-center mb-6">
              Our Mission & Values
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              Meet two young entrepreneurs dedicated to **experiential learning** in school education. They aim to **enhance creativity, employability, and student learning** while making education engaging and **accessible to all Indian students**. Their **technology-driven** platforms help bridge the gap between theory and practice, ensuring students are **career-ready**.
            </p>

            {/* Founder Details */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { name: "Digvijay Naidu Atla", role: "Founder", img: "https://via.placeholder.com/100", linkedin: "#", twitter: "#" },
                { name: "Gopi Krishna Davala", role: "Co-Founder", img: "https://via.placeholder.com/100", linkedin: "#", twitter: "#" },
              ].map((member, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg shadow text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-20 h-20 mx-auto rounded-full mb-3 border-2 border-yellow-500"
                  />
                  <h3 className="text-2xl font-bold text-yellow-500">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <a href={member.linkedin} target="_blank" className="text-blue-400 hover:text-blue-600">
                      <Linkedin size={22} />
                    </a>
                    <a href={member.twitter} target="_blank" className="text-blue-300 hover:text-blue-500">
                      <Twitter size={22} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>
        {`
          .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
        `}
      </style>
    </section>
  );
}

export default About;
