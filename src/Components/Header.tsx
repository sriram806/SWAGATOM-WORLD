import { motion } from "framer-motion";

function Header() {
    return (
        <header className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <motion.img
                    src="https://media-hosting.imagekit.io//9270575bd5b14e90/bg.jpg?Expires=1833779484&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P6bdFeJdOslj6DEKpByJManmzqifeD0wHxeTBiJSrFWQ3TEHxfSRMWcVzG49kWcyQrduBKBan6xXt-F5Zp3T5syca33-lWLF5ssmO6kH9WzrebYnnU6LzDgdoljR6jpNHqJS1jXOERW7lwPPKVXhsUGHtiS~VRjm-l~OJTyKTag5jZwGhcVYMGKP0DsrhRLT8SI8xVhWjzUOFy3xxKQdbxuDL3gkbhZnICEbFfDvVtsa~EVuQpjCIVQBvGcBZ5l5L-9L6yhCt~XsZjJ8Sp~F9xvzQU3110z5e1cIO1T0ADv~vX3iXHRJRS0I4KNZsEqvVxbrr4NS~c6QWzchm2WkgA__"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                    initial={{ scale: 1.1 }} 
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>

            {/* Foreground Content */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center h-full text-center">
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-montserrat  font-bold text-white  mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Welcome to Swagatom World LLP
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-300 lg:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Discover a new way of learning that combines fun, creativity, and practical skills with our Navarasa-9.
                </motion.p>
                
                {/* CTA Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                    <a href="#programs">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
                        >
                            Know More
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </header>
    );
}

export default Header;
