import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

import HeroSlideshow from '../components/HeroSlideshow';

export default function Home() {

    const [expanded, setExpanded] = useState(false);



    // Partners Data
    const partners = [
        "1362", "1415", "1416", "1424", "1443", "1441", "1414", "1418",
        "1439", "1449", "1433", "1423", "1437", "1419", "1427", "1431", "1445"
    ];

    return (
        <>

            <motion.div
                className="home-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <SEO title="Home" description="African Stories. Global Impact. Award-winning production house in Nairobi, Kenya." />

                {/* Hero Section */}
                <section className="hero">
                    <HeroSlideshow />
                    <div className="hero-content container">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
                                A Global Film Collective and Production Company based in Kenya
                            </h1>
                            <div className="hero-actions">
                                <Link to="/works" className="btn btn-primary">View Our Work</Link>
                                <Link to="/about" className="btn btn-outline">Our Story</Link>
                            </div>
                        </motion.div>
                    </div>
                </section>



                {/* About Section */}
                <section className="about-section section-padding">
                    <div className="container">
                        <motion.div
                            className="about-card glassmorphism"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">About Afrofilms</h2>
                            <div className="about-text">
                                <p>
                                    Afrofilms International Ltd is a production company and Film Collective based in Nairobi, Kenya. Founded by Filmmaker Zippy Kimundu in 2013, we aim to improve the quality of Film/TV production in East Africa through creative collaboration.
                                </p>

                                <AnimatePresence>
                                    {expanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="expanded-content"
                                        >
                                            <p>
                                                Our team consists of highly skilled professionals from Kenya and South Africa with decades of experience used to execute Film and TV projects through collaborative visual storytelling.
                                            </p>
                                            <p>
                                                Clients include The British Council Kenya, Facebook, Universal Studios, Six Toes, TBWA Singapore, Action Horizons, Radio Film UK, Dentsu/iprospect, Talking Film, Maisha Film Lab and Standard Chartered Bank.
                                            </p>
                                            <p>
                                                We also mentor in Film training programs like <a href="https://www.illtellyoumystory.com" target="_blank" rel="noopener noreferrer">illtellyoumystory.com</a> and initiated Film Training Workshops in Kenyan prisons.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
                                    {expanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="partners section-padding">
                    <div className="container">
                        <h2 className="section-title center-text" style={{ color: '#000' }}>Our Clients & Partners</h2>
                        <div className="partners-grid">
                            {partners.map((id, index) => (
                                imageMap[id] && (
                                    <div key={index} className="partner-logo">
                                        <img src={`/uploads/${imageMap[id]}`} alt="Partner Logo" />
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </section>

                <style>{`
                        /* Base Styles */
                        .hero {
                            position: relative;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            overflow: hidden;
                        }
                        .hero-content {
                            position: relative;
                            z-index: 2;
                            text-align: center;
                            max-width: 900px;
                        }
                        .hero-subtitle {
                            color: var(--color-primary);
                            letter-spacing: 0.3em;
                            text-transform: uppercase;
                            font-size: 1rem;
                            display: block;
                            margin-bottom: 1.5rem;
                            font-weight: 600;
                            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                        }
                        .hero-title {
                            font-size: clamp(3.5rem, 8vw, 6rem);
                            line-height: 1.1;
                            margin-bottom: 2.5rem;
                            font-family: var(--font-heading);
                            text-shadow: 0 4px 8px rgba(0,0,0,0.6);
                        }
                        .hero-actions {
                            display: flex;
                            gap: 1.5rem;
                            justify-content: center;
                        }



                        /* About Section */
                        .about-section {
                            position: relative;
                            z-index: 2;
                            /*margin-top: -50px; /* Reduced overlap */
                        }
                        .glassmorphism {
                            background: rgba(20, 20, 20, 0.7);
                            backdrop-filter: blur(20px);
                            -webkit-backdrop-filter: blur(20px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 16px;
                            padding: 3rem;
                            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                        }
                        .about-text p {
                            color: #e0e0e0;
                            line-height: 1.8;
                            margin-bottom: 1.5rem;
                            font-size: 1.1rem;
                        }
                        .read-more-btn {
                            background: none;
                            border: 1px solid var(--color-primary);
                            color: var(--color-primary);
                            padding: 0.5rem 1.5rem;
                            border-radius: 50px;
                            cursor: pointer;
                            font-size: 0.9rem;
                            text-transform: uppercase;
                            letter-spacing: 0.1em;
                            transition: all 0.3s ease;
                            margin-top: 1rem;
                        }
                        .read-more-btn:hover {
                            background: var(--color-primary);
                            color: #000;
                        }
                        .expanded-content {
                            overflow: hidden;
                        }

                        .btn {
                            padding: 1rem 2.5rem;
                            border-radius: 50px;
                            font-weight: 600;
                            transition: all 0.3s ease;
                            text-transform: uppercase;
                            letter-spacing: 0.05em;
                            font-size: 0.9rem;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                        }
                        .btn-primary {
                            background: var(--color-primary);
                            color: #000;
                            border: 2px solid var(--color-primary);
                        }
                        .btn-primary:hover {
                            background: transparent;
                            color: var(--color-primary);
                            transform: translateY(-3px);
                        }
                        .btn-outline {
                            border: 2px solid #fff;
                            color: #fff;
                            background: transparent;
                        }
                        .btn-outline:hover {
                            background: #fff;
                            color: #000;
                            transform: translateY(-3px);
                        }
                        
                        .section-header {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            margin-bottom: 3rem;
                            border-bottom: 1px solid var(--color-border);
                            padding-bottom: 2rem;
                        }
                        .btn-link {
                            color: #fff;
                            text-decoration: none;
                            text-transform: uppercase;
                            font-size: 0.8rem;
                            letter-spacing: 0.1em;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            transition: color 0.3s;
                        }
                        .btn-link:hover {
                            color: var(--color-primary);
                        }
                        .arrow {
                            transition: transform 0.3s;
                        }
                        .btn-link:hover .arrow {
                            transform: translateX(5px);
                        }

                        .partners {
                            background: #fff;
                            color: #000;
                            text-align: center;
                        }
                        .center-text {
                            text-align: center;
                            margin-bottom: 4rem;
                        }
                        .partners-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
                            gap: 2rem;
                            align-items: center;
                            justify-items: center;
                            padding: 0 2rem;
                        }
                        .partner-logo img {
                            max-width: 100px;
                            max-height: 60px;
                            object-fit: contain;
                            opacity: 1;
                            transition: transform 0.3s ease;
                        }
                        .partner-logo img:hover {
                            transform: scale(1.1);
                        }
                        
                        .text-stroke {
                            -webkit-text-stroke: 1px #fff;
                            color: transparent; 
                        }
                        .flex-row-between {
                            display: flex;
                            justify-content: space-between;
                        }

                        /* Mobile Responsiveness */
                        @media (max-width: 768px) {
                            .hero {
                                height: 85vh;
                                min-height: 500px;
                            }
                            .hero-content {
                                padding: 0 1rem;
                            }
                            .hero-title {
                                font-size: 2rem !important;
                                line-height: 1.3 !important;
                                margin-bottom: 2rem;
                            }
                            .hero-actions {
                                flex-direction: column;
                                gap: 1rem;
                            }
                            .btn {
                                padding: 0.875rem 2rem;
                                font-size: 0.85rem;
                                width: 100%;
                                max-width: 280px;
                            }
                            .glassmorphism {
                                padding: 1.5rem;
                                border-radius: 12px;
                            }
                            .about-text p {
                                font-size: 1rem;
                                line-height: 1.7;
                            }
                            .section-title {
                                font-size: 1.75rem;
                                margin-bottom: 1.5rem;
                            }
                            .partners-grid {
                                grid-template-columns: repeat(3, 1fr);
                                gap: 1.5rem;
                                padding: 0 1rem;
                            }
                            .partner-logo img {
                                max-width: 70px;
                                max-height: 45px;
                            }
                            .center-text {
                                margin-bottom: 2.5rem;
                                font-size: 1.5rem;
                            }
                        }

                        @media (max-width: 480px) {
                            .hero {
                                height: 80vh;
                            }
                            .hero-title {
                                font-size: 1.75rem !important;
                            }
                            .partners-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 1rem;
                            }
                            .partner-logo img {
                                max-width: 60px;
                                max-height: 40px;
                            }
                        }
                    `}</style>
            </motion.div>

        </>
    );
}
