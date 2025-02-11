function About(){
    return (
        <section id="about" className="animate-on-scroll bg-black">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://media-hosting.imagekit.io//9de7e2fdb89c4b7c/screenshot_1739162810669.png?Expires=1833770808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rRQV5bOLQQ8lHphifw~SrLriylJbnL4WN56~rZbczaDAXWy4Yev1Z0Jghvc8rmKGLw-4i4ZCQd9rNJRbZcanUeoMMF878SNwcnY~AcJpdTKmwsNqKzxoqanaEerC~935V08qHz~3UZ9W5LWBt5FDuZnfORoSPytyeOYCKo-yF8eKtlcrMAPFfhXbzUgCYC3a6M3hOqHoY52joMU5U-b-25blqqE8Z0Hz9dZnkbWwQ9BcgxnJ1VEp6cxWJBmgViGSrnXSoR1ycrX9yrKFVUPIDEPHf7y4T2mlRwm3Cgdke~FW1Q7dFVldcM6J0O9PnMyBhW7eNYwLnNQR6qkLTxuTxQ__"
                            alt="About us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <center className="text-5xl font-bold text-white mb-10">Our Mission and Values</center>
                        <center><p className="text-gray-400 font-arial mb-6">
                            Meet two young entrepreneurs dedicated to embedding experiential learning in school education.
                            They aim to enhance student learning, creativity, and employability while creating memorable
                            experiences. With innovative ideas, they focus on making experiential learning affordable and
                            accessible to all Indian school students.Their mission is to bridge the gap between theory and
                            practice, foster creativity and critical thinking, and enhance employability. They develop
                            experiential learning programs, provide teacher training, and partner with industry experts.
                            Their technology-enabled platforms facilitate experiential learning, making it more accessible.
                            Their efforts have impacted numerous schools and students. They plan to scale up operations,
                            develop new programs, and advocate for policy changes to integrate experiential learning into
                            mainstream education. These entrepreneurs are pioneering a revolution in Indian school education,
                            empowering students to become creative, confident, and career-ready.
                        </p></center>
                        <div className="grid grid-cols-2 gap-9 text-center">
                            <div className="p-4 bg-transprent rounded-lg shadow">
                                <div className="text-2xl font-bold text-yellow-500">Digvijay Naidu Atla</div>
                                <div className="text-gray-300">Founder</div>
                            </div>
                            <div className="p-4 bg-transprent rounded-lg shadow">
                                <div className="text-2xl font-bold text-yellow-500">Gopi Krishna Davala</div>
                                <div className="text-gray-300">Co-Founder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About