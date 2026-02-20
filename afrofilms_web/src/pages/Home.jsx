import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

import HeroSlideshow from '../components/HeroSlideshow';

export default function Home() {

    const [expanded, setExpanded] = useState(false);



    // Funders / Clients
    const funders = [
        { src: "/uploads/2020/08/british-council.png", name: "British Council" },
        { id: "1415", name: "HIAS" },
        { id: "1416", name: "Maisha Film Lab" },
        { id: "1424", name: "Standard Chartered" },
        { id: "1443", name: "Safaricom" },
        { id: "1441", name: "TBWA" },
        { id: "1414", name: "Cocolili" },
        { id: "1418", name: "mLab" },
        { id: "1439", name: "Talking Film" },
        { id: "1449", name: "Radio Film" },
        { id: "1433", name: "Action Horizons" },
        { id: "1423", name: "Six Toes" },
        { id: "1427", name: "TFI" },
        { id: "1431", name: "USS" },
        { id: "1445", name: "Tope Mall Africa" },
    ];

    // Film Festival Laurels
    const festivals = [
        { src: "/uploads/festivals/2025 HSDFF LAURELS -BLK.png", name: "Hot Springs Documentary Film Festival 2025" },
        { src: "/uploads/festivals/Athena FilmFest-2018-logo-barnardlogo transparent.png", name: "Athena Film Festival" },
        { src: "/uploads/festivals/DCDOX-Mini-Laurel-2025-Black.png", name: "DC/DOX Film Festival 2025" },
        { src: "/uploads/festivals/HD25_OFF_SEL_BLACK.png", name: "Hot Docs 2025" },
        { src: "/uploads/festivals/Laurel 2025.png", name: "Afrikanisches Filmfestival Hamburg 2025" },
        { src: "/uploads/festivals/Laurel_AM-FM LAUREL 1.png", name: "African Movie Festival in Manitoba 2025" },
        { src: "/uploads/festivals/Laurels - Black.png", name: "NBO Film Festival 2025" },
        { src: "/uploads/festivals/SIFF_2025DocFest_Laurel_OfficialSelection_Black.png", name: "SIFF DocFest 2025" },
        { src: "/uploads/festivals/ZIFF 2025_OFFICIAL SELECTION LAUREL 1.png", name: "ZIFF Official Selection 2025" },
    ];

    // Resolve image sources
    const resolve = (list) => list
        .map(p => ({
            name: p.name,
            src: p.src || (p.id && imageMap[p.id] ? `/uploads/${imageMap[p.id]}` : null),
        }))
        .filter(p => p.src);

    const resolvedFunders = resolve(funders);
    const resolvedFestivals = resolve(festivals);

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
                            <h1 className="hero-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: '1.25', textTransform: 'uppercase', letterSpacing: '0.04em', maxWidth: '800px', margin: '0 auto' }}>
                                A Film / TV Production Company<br />
                                & Creative Collective<br />
                                <span style={{ fontSize: '0.75em', fontWeight: '400', letterSpacing: '0.08em', display: 'block', marginTop: '0.4em' }}>Based in Nairobi & Kilifi, Kenya</span>
                            </h1>
                            <p className="hero-subtitle">Connect. Create. Captivate.</p>
                            <div className="hero-actions">
                                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">ABOUT US</button>
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
                        <span className="partners-label">Trusted By</span>
                        <h2 className="partners-heading">Our Clients & Partners</h2>

                        {/* Funders Row */}
                        <h3 className="partners-row-label">Funders</h3>
                        <div className="partners-grid">
                            {resolvedFunders.map(({ src, name }, index) => (
                                <div key={index} className="partner-card">
                                    <img src={src} alt={name} />
                                </div>
                            ))}
                        </div>

                        {/* Festivals Row */}
                        <h3 className="partners-row-label" style={{ marginTop: '2rem' }}>Festivals</h3>
                        <div className="partners-grid">
                            {resolvedFestivals.map(({ src, name }, index) => (
                                <div key={index} className="partner-card">
                                    <img src={src} alt={name} />
                                </div>
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
                            letter-spacing: 0.35em;
                            text-transform: uppercase;
                            font-size: 1.1rem;
                            display: block;
                            margin-top: 1.25rem;
                            margin-bottom: 2rem;
                            font-weight: 500;
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
                            background: #0a0a0a;
                            text-align: center;
                            padding: clamp(4rem, 8vw, 7rem) 0;
                        }
                        .partners-label {
                            display: block;
                            text-transform: uppercase;
                            letter-spacing: 0.2em;
                            font-size: 0.8rem;
                            color: var(--color-primary);
                            font-weight: 600;
                            margin-bottom: 0.75rem;
                        }
                        .partners-heading {
                            text-align: center;
                            margin-bottom: 3rem;
                            font-size: clamp(1.5rem, 3vw, 2.25rem);
                            color: #fff;
                        }
                        .partners-row-label {
                            text-align: center;
                            text-transform: uppercase;
                            letter-spacing: 0.15em;
                            font-size: 0.85rem;
                            color: var(--color-primary);
                            font-weight: 600;
                            margin-bottom: 1rem;
                            position: relative;
                        }
                        .partners-grid {
                            display: grid;
                            grid-template-columns: repeat(8, 1fr);
                            gap: 0.75rem;
                            max-width: 1100px;
                            margin: 0 auto;
                            padding: 0 0.5rem;
                        }
                        .partner-card {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0.75rem 0.5rem;
                            background: rgba(255,255,255, 0.95);
                            border-radius: 6px;
                            border: 1px solid rgba(255,255,255,0.1);
                            transition: all 0.35s ease;
                            aspect-ratio: 1;
                        }
                        .partner-card:hover {
                            transform: translateY(-3px);
                            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.15);
                            border-color: rgba(212, 175, 55, 0.3);
                        }
                        .partner-card img {
                            max-width: 90%;
                            max-height: 90%;
                            object-fit: contain;
                            transition: transform 0.3s ease;
                        }
                        .partner-card:hover img {
                            transform: scale(1.08);
                        }
                        .center-text {
                            text-align: center;
                            margin-bottom: 4rem;
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
                                grid-template-columns: repeat(4, 1fr);
                                gap: 0.6rem;
                            }
                            .partner-card {
                                padding: 0.6rem 0.5rem;
                            }
                            .partners-heading {
                                margin-bottom: 2rem;
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
                                grid-template-columns: repeat(3, 1fr);
                                gap: 0.5rem;
                            }
                            .partner-card {
                                padding: 0.5rem;
                            }
                        }
                    `}</style>
            </motion.div>

        </>
    );
}
