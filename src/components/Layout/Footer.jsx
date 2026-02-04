import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#121212] border-t border-white/5 pt-16 pb-8 text-gray-400">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-wider">AFRO<span className="text-[#ffc107]">FILMS</span></h3>
                    <p className="text-sm leading-relaxed">
                        Capturing moments, telling stories, and creating cinematic experiences that resonate. Your vision, our lens.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/about" className="hover:text-[#ffc107] transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-[#ffc107] transition-colors">Services</Link></li>
                        <li><Link to="/portfolio" className="hover:text-[#ffc107] transition-colors">Our Work</Link></li>
                        <li><Link to="/contact" className="hover:text-[#ffc107] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info (Placeholders) */}
                <div>
                    <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Contact</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#ffc107] mt-0.5" />
                            <span>Nairobi, Kenya<br />(Full Address Needed)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#ffc107]" />
                            <span>+254 700 000 000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#ffc107]" />
                            <span>info@afrofilms.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ffc107] hover:text-black transition-all">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ffc107] hover:text-black transition-all">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ffc107] hover:text-black transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                <p>&copy; {new Date().getFullYear()} AfroFilms International. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
