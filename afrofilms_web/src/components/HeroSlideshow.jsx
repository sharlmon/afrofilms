import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slide = '/uploads/slide5.jpg';

export default function HeroSlideshow() {
    return (
        <div className="hero-slideshow">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${slide})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}
            />
            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.4)',
                zIndex: 1
            }}></div>
        </div>
    );
}
