import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a] z-10"></div>

                {/* Placeholder for Video/Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000')] bg-cover bg-center opacity-50 z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"></div>

                <div className="container relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        TELLING STORIES<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">
                            THROUGH THE LENS
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                        Premium cinematography and video production services for brands, events, and narratives.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link to="/portfolio">
                            <button className="btn btn-primary min-w-[180px]">
                                View Our Work
                            </button>
                        </Link>
                        <button className="flex items-center gap-3 text-white hover:text-[#ffc107] transition-colors group">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#ffc107] transition-colors">
                                <Play className="w-5 h-5 fill-current ml-1" />
                            </div>
                            <span className="uppercase tracking-widest text-sm font-semibold">Play Reel</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding bg-[#0a0a0a]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12">Who We Are</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        AfroFilms International is a leading production house dedicated to delivering high-quality visual content.
                        From commercials to documentaries, we bring cinematographic excellence to every frame.
                        <span className="block mt-4 text-[#ffc107] italic">(Content Placeholder: Real text needed)</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
