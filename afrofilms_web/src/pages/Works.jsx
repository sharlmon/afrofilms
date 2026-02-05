import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, extractFirstImage } from '../lib/utils';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

// Fallback images
const FALLBACK_IMAGES = [
    "/uploads/2022/11/ARTS-RESIDENCY-MASTER-PLAN.jpg",
    "/uploads/2022/11/Main-Banner.jpg",
    "/uploads/2022/11/TTR-10.jpg",
    "/uploads/2022/11/river-album.jpg",
    "/uploads/2022/11/music-saved-my-life.jpg",
    "/uploads/2022/11/111.jpg"
];

export default function Works() {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/content_manifest.json')
            .then(res => res.json())
            .then(async (manifest) => {
                const workItems = manifest
                    .filter(item => item.type === 'post')
                    .sort((a, b) => new Date(b.date) - new Date(a.date));

                const worksWithImages = await Promise.all(workItems.map(async (item, index) => {
                    let image = null;
                    try {
                        const res = await fetch(item.path);
                        const text = await res.text();
                        const parts = text.split('---');
                        const body = parts.slice(2).join('---');
                        const extracted = extractFirstImage(body);

                        if (!extracted || extracted.includes('Main-Banner')) {
                            image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                        } else {
                            image = extracted;
                        }
                    } catch (e) {
                        image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                    }
                    return { ...item, image };
                }));

                setWorks(worksWithImages);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="center-loading">
            <div className="loader"></div>
            <style>{`
                .center-loading { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #050505; }
                .loader { width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s infinite linear; }
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );

    // Partners Data
    const partners = [
        "1362", "1415", "1416", "1424", "1443", "1441", "1414", "1418",
        "1439", "1449", "1433", "1423", "1437", "1419", "1427", "1431", "1445"
    ].map(id => imageMap[id] ? `/uploads/${imageMap[id]}` : null).filter(Boolean);

    return (
        <div className="works-page">
            <SEO title="Portfolio" description="Curated Excellence. Explore our library of feature films, documentaries, and training initiatives." />
            <header className="page-header container">
                <div className="header-content animate-fade-in">
                    <span className="section-subtitle text-gold">Our Portfolio</span>
                    <h1 className="page-title">Curated <span className="text-stroke">Excellence</span></h1>
                </div>
            </header>

            <div className="container">
                {/* 
                   NEW: Strict Grid Layout (More Organized)
                   Replaces Masonry for consistent alignment.
                */}
                <div className="works-grid">
                    {works.map((post, i) => <WorkCard key={post.id} post={post} index={i} />)}
                </div>
            </div>

            <section className="partners section-padding">
                <div className="container">
                    <h2 className="section-subtitle center-text" style={{ color: '#666', marginBottom: '3rem' }}>Trusted By</h2>
                    <div className="partners-grid">
                        {partners.map((logo, index) => (
                            <div key={index} className="partner-logo">
                                <img src={logo} alt="Partner Logo" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .works-page {
                    padding-bottom: 0;
                    background: #050505;
                    min-height: 100vh;
                }
                .page-header {
                    padding: 8rem 0 6rem;
                    text-align: center;
                }
                .page-title {
                    font-size: clamp(4rem, 8vw, 7rem);
                    line-height: 0.9;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    color: #fff;
                }
                .text-stroke {
                    -webkit-text-stroke: 1px #fff;
                    color: transparent; 
                }
                .section-subtitle {
                    display: block;
                    font-size: 0.9rem;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                    color: var(--color-primary);
                    font-weight: 600;
                }

                /* GRID LAYOUT: Strict & Organized */
                .works-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 3rem 2rem; /* Row gap, Col gap */
                    margin-bottom: 8rem;
                }
                @media (max-width: 768px) {
                    .works-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }

                /* Work Card - Organized/Creative Look */
                .work-card {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    group: 1;
                }
                .work-card-link {
                    text-decoration: none;
                    display: block;
                }
                
                .img-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/10; /* Strict Aspect Ratio for alignment */
                    overflow: hidden;
                    border-radius: 4px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: #111;
                }
                
                .work-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
                    filter: saturate(0.9);
                }
                .work-card-link:hover .work-img {
                    transform: scale(1.05);
                    filter: saturate(1.1);
                }

                /* Creative Overlay */
                .img-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.2);
                    transition: background 0.4s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .work-card-link:hover .img-overlay {
                    background: rgba(0,0,0,0);
                }
                
                .view-btn {
                    width: 60px;
                    height: 60px;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.4s ease;
                }
                .work-card-link:hover .view-btn {
                    opacity: 1;
                    transform: scale(1);
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: #000;
                }

                .card-info {
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 1rem;
                    transition: border-color 0.3s;
                }
                .work-card-link:hover .card-info {
                    border-top-color: var(--color-primary);
                }

                .work-year {
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    display: block;
                    margin-bottom: 0.5rem;
                }
                .work-title {
                    font-size: 1.5rem;
                    line-height: 1.2;
                    color: #fff;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                }
                .work-card-link:hover .work-title {
                    color: var(--color-primary);
                }

                /* Partners */
                .partners {
                    border-top: 1px solid rgba(255,255,255,0.05);
                    padding: 6rem 0;
                    background: #050505;
                }
                .center-text { text-align: center; }
                .partners-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
                    gap: 3rem;
                    align-items: center;
                    justify-items: center;
                    padding: 0 2rem;
                }
                .partner-logo img {
                    max-width: 90px;
                    max-height: 50px;
                    object-fit: contain;
                    filter: none;
                    opacity: 1;
                    transition: transform 0.4s ease;
                }
                .partner-logo img:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}

function WorkCard({ post }) {
    return (
        <article className="work-card group">
            <Link to={`/${post.slug}`} className="work-card-link">
                <div className="img-wrapper">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="work-img"
                        loading="lazy"
                        onError={(e) => {
                            if (!e.target.src.includes('Main-Banner.jpg')) {
                                e.target.src = '/uploads/2022/11/Main-Banner.jpg';
                            } else {
                                e.target.style.display = 'none';
                                e.target.parentNode.style.backgroundColor = '#1a1a1a';
                            }
                        }}
                    />
                    <div className="img-overlay">
                        <div className="view-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="17" y1="7" x2="7" y2="17"></line><polyline points="8 7 17 7 17 16"></polyline></svg>
                        </div>
                    </div>
                </div>

                <div className="card-info">
                    <span className="work-year">{post.date ? new Date(post.date).getFullYear() : 'PROJECT'}</span>
                    <h2 className="work-title">{post.title}</h2>
                </div>
            </Link>
        </article>
    );
}
