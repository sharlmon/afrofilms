import React from 'react';

const Portfolio = () => {
    return (
        <div className="pt-32 pb-20 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-12 text-center">Selected Work</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="aspect-video bg-white/10 rounded-lg relative group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                                Project {item} Thumbnail
                            </div>
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-[#ffc107] font-bold text-xl">View Project</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
