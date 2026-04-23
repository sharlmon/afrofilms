import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

import HeroSlideshow from '../components/HeroSlideshow';

export default function Home() {





    // Funders / Clients
    // darkCard: true = white/light logo → needs black card background
    const funders = [
        { src: "/uploads/2020/08/british-council.png", name: "British Council" },
        { id: "1415", name: "HIAS" },
        { id: "1416", name: "Maisha Film Lab" },
        { id: "1424", name: "Standard Chartered" },
        { id: "1443", name: "Safaricom" },
        { id: "1441", name: "TBWA" },
        { id: "1433", name: "Action Horizons" },
        { id: "1423", name: "Six Toes" },
        { id: "1427", name: "TFI" },
        { id: "1431", name: "USS" },
        { id: "1445", name: "Tope Mall Africa" },
        { src: "/uploads/new_clients/ford_justfilms_white.png", name: "Ford Foundation JustFilms", darkCard: true },
        { src: "/uploads/new_clients/hotdocs_fund_white.png", name: "Hot Docs Blue Ice Docs Fund", darkCard: true },
        { src: "/uploads/new_clients/ida_white.jpg", name: "IDA", darkCard: true },
        { src: "/uploads/new_clients/inmaat_white.svg", name: "Inmaat Foundation", darkCard: true },
        { src: "/uploads/new_clients/sundance_white.svg", name: "Sundance Institute", darkCard: true },
        { src: "/uploads/new_clients/sunnyside_white.png", name: "Sunnyside Global Pitch", darkCard: true },
        { src: "/uploads/new_clients/bbc.jpeg", name: "BBC" },
        { src: "/uploads/new_clients/facebook.png", name: "Facebook" },
        { src: "/uploads/new_clients/google.png", name: "Google" },
        { src: "/uploads/new_clients/jrs.png", name: "JRS" },
        { src: "/uploads/new_clients/tusk.jpeg", name: "TUSK" },
        { src: "/uploads/new_clients/universal.jpeg", name: "Universal Studios" },
        { src: "/uploads/new_clients/state_department.jpeg", name: "US State Department" },
        { src: "/uploads/new_clients/usaid.png", name: "USAID" },
        { src: "/uploads/new_clients/vice.png", name: "Vice" },
        { src: "/uploads/new_clients/olympic_channel.png", name: "Olympic Channel" },
    ];

    // Film Festival Laurels
    // Most laurels are white-on-transparent → darkCard: true
    const festivals = [
        { src: "/uploads/new_festivals/hsdff_2025_white.png", name: "Hot Springs Documentary Film Festival 2025", darkCard: true },
        { src: "/uploads/festivals/Athena-FilmFest-2018-logo-barnardlogo-transparent.png", name: "Athena Film Festival" },
        { src: "/uploads/new_festivals/dcdox_2025_white.png", name: "DC/DOX Film Festival 2025", darkCard: true },
        { src: "/uploads/new_festivals/hd25_off_sel_white.png", name: "Hot Docs 2025", darkCard: true },
        { src: "/uploads/new_festivals/hamburg_2025.png", name: "Afrikanisches Filmfestival Hamburg 2025", darkCard: true, cover: true },
        { src: "/uploads/new_festivals/am_fm_2025.png", name: "African Movie Festival in Manitoba 2025" },
        { src: "/uploads/new_festivals/nbo_white.png", name: "NBO Film Festival 2025", darkCard: true },
        { src: "/uploads/new_festivals/siff_2025_white.svg", name: "SIFF DocFest 2025", darkCard: true },
        { src: "/uploads/new_festivals/ziff_2025_4.png", name: "ZIFF Official Selection 2025" },
        { src: "/uploads/new_festivals/sheffield_white.png", name: "Sheffield DocFest MeetMarket 2024", darkCard: true },
        { src: "/uploads/new_festivals/aff_pitch_2024_v2.png", name: "AFF Pitch Program 2024" },
        { src: "/uploads/new_festivals/tribeca_24.png", name: "Tribeca Film Festival 2024", darkCard: true },
        { src: "/uploads/new_festivals/tribeca_25.svg", name: "Tribeca Film Festival 2025", darkCard: true },
    ];

    // Resolve image sources
    const resolve = (list) =>
        list
            .map(p => ({
                name: p.name,
                src: p.src || (p.id && imageMap[p.id] ? `/uploads/${imageMap[p.id]}` : null),
                darkCard: p.darkCard || false,
                cover: p.cover || false,
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
                    <div className="hero-content container" style={{ marginTop: '-18vh' }}>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h1 className="hero-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.15em', maxWidth: '100%', margin: '0 auto', fontWeight: '400', whiteSpace: 'nowrap' }}>
                                A FILM PRODUCTION COMPANY & COLLECTIVE<br />
                                <span style={{ fontSize: '0.9em', fontWeight: '300', letterSpacing: '0.1em', display: 'block', marginTop: '0.8em', color: 'rgba(255,255,255,0.7)', whiteSpace: 'normal' }}>BASED IN NAIROBI & KILIFI, KENYA</span>
                            </h1>
                            <p className="hero-subtitle">Connect. Create. Captivate.</p>
                            <div className="hero-actions">
                                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">ABOUT US</button>
                            </div>
                        </motion.div>
                    </div>
                </section>





                {/* Partners Section */}
                <section className="partners section-padding">
                    <div className="container">
                        <span className="partners-label">Trusted By</span>
                        <h2 className="partners-heading">Clients, Partners &amp; Festivals</h2>

                        {/* Clients & Partners Strip — light-background logos */}
                        <h3 className="partners-row-label">Clients &amp; Partners</h3>
                        <div className="partners-grid partners-grid-sm">
                        {resolvedFunders.filter(p => !p.darkCard).map(({ src, name, cover }, index) => (
                                <div key={index} className="partner-card partner-card-sm">
                                    <img
                                        src={src}
                                        alt={name}
                                        style={cover ? { width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' } : undefined}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Festivals & Laurels Strip — all dark/transparent logos together */}
                        <h3 className="partners-row-label" style={{ marginTop: '2rem' }}>Festivals &amp; Laurels</h3>
                        <div className="partners-grid partners-grid-sm partners-grid-dark">
                        {[
                            ...resolvedFunders.filter(p => p.darkCard),
                            ...resolvedFestivals
                        ].map(({ src, name, cover }, index) => (
                                <div key={index} className="partner-card partner-card-sm partner-card-dark">
                                    <img
                                        src={src}
                                        alt={name}
                                        style={cover ? { width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' } : undefined}
                                    />
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
                            font-size: 1.4rem;
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
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 0.5rem;
                            max-width: 1100px;
                            margin: 0 auto;
                            padding: 0 0.5rem;
                        }
                        .partners-grid-sm {
                            gap: 0.45rem;
                        }
                        .partners-grid-dark {
                            background: rgba(0,0,0,0.3);
                            border-radius: 10px;
                            padding: 0.75rem;
                            border: 1px solid rgba(255,255,255,0.06);
                        }
                        .partner-card {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0.6rem 0.5rem;
                            background: rgba(255,255,255,0.95);
                            border-radius: 5px;
                            border: 1px solid rgba(0,0,0,0.08);
                            transition: all 0.3s ease;
                            width: 90px;
                            height: 60px;
                            flex-shrink: 0;
                        }
                        .partner-card-sm {
                            width: 82px;
                            height: 54px;
                            padding: 0.45rem;
                        }
                        .partner-card-dark {
                            background: #000;
                            border: 1px solid rgba(255,255,255,0.08);
                        }
                        .partner-card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 5px 16px rgba(212, 175, 55, 0.18);
                            border-color: rgba(212, 175, 55, 0.35);
                        }
                        .partner-card img {
                            max-width: 90%;
                            max-height: 90%;
                            object-fit: contain;
                            transition: transform 0.3s ease;
                        }
                        .partner-card:hover img {
                            transform: scale(1.1);
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
                                gap: 0.4rem;
                            }
                            .partner-card, .partner-card-sm {
                                width: 68px;
                                height: 46px;
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
                                gap: 0.35rem;
                            }
                            .partner-card, .partner-card-sm {
                                width: 58px;
                                height: 40px;
                            }
                        }
                    `}</style>
            </motion.div>

        </>
    );
}
