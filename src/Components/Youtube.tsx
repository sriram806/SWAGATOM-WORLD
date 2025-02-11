import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

function Youtube({ videoId = "dQw4w9WgXcQ" }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <section className="animate-on-scroll py-10 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white flex items-center justify-center gap-2">
                    <FaYoutube size={40} color="red" />Watch Our Camp in Action
                    </h2>

                    {/* Video Container */}
                    <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
                        {!isPlaying ? (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                            >
                                <PlayCircle className="text-white" size={80} />
                            </div>
                        ) : null}

                        {isPlaying ? (
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&cc_load_policy=1`}
                                title="Camp Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        ) : (
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt="YouTube Thumbnail"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Youtube;
