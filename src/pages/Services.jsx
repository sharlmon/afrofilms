import React from 'react';
import { Video, Camera, Mic, Film } from 'lucide-react';

const Services = () => {
    const services = [
        { title: 'Video Production', icon: <Video className="w-8 h-8" />, desc: 'End-to-end production for commercials, music videos, and films.' },
        { title: 'Photography', icon: <Camera className="w-8 h-8" />, desc: 'Professional photography for events, products, and portraits.' },
        { title: 'Audio Engineering', icon: <Mic className="w-8 h-8" />, desc: 'Crisp sound design and post-production audio services.' },
        { title: 'Post-Production', icon: <Film className="w-8 h-8" />, desc: 'Editing, color grading, and VFX to polish your masterpiece.' },
    ];

    return (
        <div className="pt-32 pb-20 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-[#121212] p-8 border border-white/5 hover:border-[#ffc107] transition-all group">
                            <div className="mb-6 text-[#ffc107] group-hover:scale-110 transition-transform">{s.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-gray-400">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
