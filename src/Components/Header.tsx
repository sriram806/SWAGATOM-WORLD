function Header() {
    return (
        <header className="relative h-screen">
            <div className="absolute inset-0">
            <div className="flex items-center sm:ml-10 ">
              <img src="https://media-hosting.imagekit.io//9270575bd5b14e90/bg.jpg?Expires=1833779484&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=P6bdFeJdOslj6DEKpByJManmzqifeD0wHxeTBiJSrFWQ3TEHxfSRMWcVzG49kWcyQrduBKBan6xXt-F5Zp3T5syca33-lWLF5ssmO6kH9WzrebYnnU6LzDgdoljR6jpNHqJS1jXOERW7lwPPKVXhsUGHtiS~VRjm-l~OJTyKTag5jZwGhcVYMGKP0DsrhRLT8SI8xVhWjzUOFy3xxKQdbxuDL3gkbhZnICEbFfDvVtsa~EVuQpjCIVQBvGcBZ5l5L-9L6yhCt~XsZjJ8Sp~F9xvzQU3110z5e1cIO1T0ADv~vX3iXHRJRS0I4KNZsEqvVxbrr4NS~c6QWzchm2WkgA__" className="h-10 w-10" alt="Background" />
              <span className="ml-2 text-2xl font-bold text-white">SWAGATOM WORLD</span>
            </div>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Welcome to Swagatom World LLP</h1>
                <p className="text-xl text-gray-200 mb-7">Discover a new way of learning that combines fun, creativity, and practical skills with our Navarasa-9</p>
                <a href="#programs" className="text-white hover:text-yellow-500 transition"><button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition mx-auto">Know More </button></a>
            </div>
        </header>
    )
}

export default Header;