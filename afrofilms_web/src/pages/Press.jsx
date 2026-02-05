import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, extractFirstImage, cleanContent } from '../lib/utils';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

// Shared fallback images
const FALLBACK_IMAGES = [
    "/uploads/2022/11/ARTS-RESIDENCY-MASTER-PLAN.jpg",
    "/uploads/2022/11/Main-Banner.jpg",
    "/uploads/2022/11/TTR-10.jpg",
    "/uploads/2022/11/river-album.jpg",
    "/uploads/2022/11/music-saved-my-life.jpg"
];

export default function Press() {
    const [pressItems, setPressItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/content_manifest.json')
            .then(res => res.json())
            .then(async (manifest) => {
                const posts = manifest
                    .filter(item => item.type === 'post')
                    .sort((a, b) => new Date(b.date) - new Date(a.date));

                const itemsWithContent = await Promise.all(posts.map(async (item, index) => {
                    let image = null;
                    let excerpt = '';
                    try {
                        const res = await fetch(item.path);
                        const text = await res.text();
                        const parts = text.split('---');
                        const body = parts.slice(2).join('---');

                        const extracted = extractFirstImage(body);
                        // Fallback logic
                        if (!extracted || extracted.includes('Main-Banner')) {
                            image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                        } else {
                            image = extracted;
                        }

                        // Extract Excerpt
                        const cleanedBody = cleanContent(body).replace(/<[^>]+>/g, '');
                        excerpt = cleanedBody.substring(0, 240) + '...';

                    } catch (e) {
                        image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                    }

                    return { ...item, image, excerpt };
                }));

                setPressItems(itemsWithContent);
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

    return (
        <div className="press-page">
            <SEO title="Journal & News" description="Latest insights, updates, and press releases from AfroFilms International." />
            <div className="container relative z-10 pt-32 pb-20">
                <header className="page-header animate-fade-in">
                    <span className="section-subtitle">Insights & Updates</span>
                    <h1 className="page-title">The <span className="text-gold">Journal</span></h1>
                </header>

                <div className="press-list">
                    {pressItems.map((item, index) => (
                        <article key={index} className="press-item group">
                            <Link to={`/${item.slug}`} className="press-link">
                                <div className="press-image-container">
                                    <div className="press-image-wrapper">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="press-image"
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
                                    </div>
                                </div>
                                <div className="press-content">
                                    <div className="press-meta">
                                        <span className="press-date">{formatDate(item.date)}</span>
                                        <span className="press-separator">•</span>
                                        <span className="press-type">News</span>
                                    </div>
                                    <h2 className="press-title group-hover:text-gold">{item.title}</h2>
                                    <p className="press-excerpt">{item.excerpt}</p>
                                    <span className="read-more">Read Full Story &rarr;</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .press-page {
                    min-height: 100vh;
                    background: #050505;
                    color: #fff;
                }
                .page-header {
                    text-align: center;
                    margin-bottom: 6rem;
                }
                .page-title {
                    font-size: clamp(4rem, 8vw, 7rem);
                    font-family: var(--font-heading);
                    line-height: 1;
                    text-transform: uppercase;
                }
                .section-subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .press-list {
                    display: flex;
                    flex-direction: column;
                    gap: 6rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .press-link {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr; /* Image larger */
                    gap: 4rem;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                /* Alternating Layout */
                .press-item:nth-child(even) .press-link {
                    grid-template-columns: 1fr 1.2fr;
                    direction: rtl; /* simple swap */
                }
                .press-item:nth-child(even) .press-content {
                    direction: ltr; /* reset text */
                    text-align: right;
                    align-items: flex-end; /* align items to right */
                } 
                /* But wait, text-align right might look weird for paragraphs. Let's keep text-align left but swap columns? */
                .press-item:nth-child(even) .press-content {
                    text-align: left; /* Keep left aligned text for readability */
                    align-items: flex-start;
                    direction: ltr; 
                    /* We used direction rtl just to swap grid columns visual order, 
                       so grid col 1 becomes right, col 2 becomes left. */
                }


                .press-image-container {
                    position: relative;
                }
                .press-image-wrapper {
                    border-radius: 4px;
                    overflow: hidden;
                    aspect-ratio: 16/9;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.1);
                    /* Image Glitch/Reveal Effect Container */
                }
                .press-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.6s ease;
                    filter: saturate(0.8);
                }
                .press-item:hover .press-image {
                    transform: scale(1.05);
                    filter: saturate(1.1);
                }

                .press-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .press-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-primary);
                    margin-bottom: 1.5rem;
                }
                .press-separator { color: rgba(255,255,255,0.2); }
                .press-type { color: rgba(255,255,255,0.5); }

                .press-title {
                    font-size: 2.5rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    color: #fff;
                    transition: color 0.3s;
                }

                .press-excerpt {
                    color: #aaa;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-size: 1.05rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .read-more {
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 0.2em;
                    font-weight: 600;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                    padding-bottom: 0.3rem;
                    align-self: flex-start;
                    transition: all 0.3s ease;
                }
                .press-item:hover .read-more {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }

                @media (max-width: 900px) {
                    .press-link, .press-item:nth-child(even) .press-link {
                        grid-template-columns: 1fr;
                        direction: ltr;
                        gap: 2rem;
                    }
                    .press-item:nth-child(even) .press-content {
                         text-align: left;
                         align-items: flex-start;
                    }
                    .page-title {
                        font-size: 3.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
