import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-12 text-center text-[#ffc107]">Get in Touch</h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Project Inquiry</h3>
                        <p className="text-gray-400">Ready to start your next project? Fill out the form or contact us directly.</p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-[#ffc107]">
                                    <Mail />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wide">Email</label>
                                    <p>info@afrofilms.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-[#ffc107]">
                                    <Phone />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wide">Phone</label>
                                    <p>+254 700 000 000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#ffc107] focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#ffc107] focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-white/5 border border-white/10 p-4 rounded text-white focus:border-[#ffc107] focus:outline-none transition-colors"></textarea>
                        </div>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
