function Header() {
    return (
        <header className="relative h-screen">
            <div className="absolute inset-0">
            <div className="flex items-center sm:ml-10 ">
              <img src="https://media-hosting.imagekit.io//ede03161e2da49d8/logo.png?Expires=1833770545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TeutU~sf62gjBH6OthznEX0kRRgdotvnfqDIiC9uB5WoCO6IoTITWx9PDBSipxbBXwvLlGU-9Wy92tjnvyOWTGaHINnvI9dS9zr80fmRVIpf0rdhT8NKaYqODJ6o4n3R4Jzj53SMYg~uzbNvhaqo~8~6EqSp1qqbcWrVRKnKWfxHoKd~IduexgO16PUbBINr02nccScixmPKh49DMsg0CcVwoh8RlduzKjG~cYBHdTBBQDoibx3o3FOBeCL5LbIpNFNlPLFKFbVeWp9j5Cs67sWl6z3PNZlXZRB8XN335ztumsD4CxGNZ-ea7qSLnKsSCmrivEa9BY0wX68vzXpbBA__" className="h-10 w-10" alt="Logo" />
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