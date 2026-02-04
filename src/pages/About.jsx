import React from 'react';

const About = () => {
    return (
        <div className="pt-32 pb-20 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-[#ffc107]">About Us</h1>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300">
                        <p className="text-lg">
                            At AfroFilms, we believe in the power of visual storytelling. Founded with a mission to elevate African narratives...
                        </p>
                        <div className="p-6 border-l-4 border-[#ffc107] bg-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                            <p>To create timeless visual masterpieces that inspire and captivate audiences globally.</p>
                        </div>
                        <p className="italic text-gray-500">
                            [Placeholder: Insert detailed about us text here]
                        </p>
                    </div>
                    <div className="h-[400px] bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                        <span className="text-gray-500">Team/Office Image Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
