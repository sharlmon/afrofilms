import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { cleanContent, formatDate, extractFirstImage } from '../lib/utils';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const useContent = (slug) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        async function load() {
            try {
                // Fetch Manifest
                const res = await fetch('/content_manifest.json');
                if (!res.ok) throw new Error('Failed to load manifest');
                const manifest = await res.json();

                // Find Item
                const item = manifest.find(i => i.slug === slug);
                if (!item) {
                    setError('Not found');
                    setLoading(false);
                    return;
                }

                // Fetch Content Body
                const contentRes = await fetch(item.path);
                if (!contentRes.ok) throw new Error('Failed to load content text');
                const text = await contentRes.text();

                // Parse Frontmatter
                const parts = text.split('---');
                const bodyRaw = parts.slice(2).join('---');

                // Extract Hero Image (for background)
                let heroImage = extractFirstImage(bodyRaw);
                if (!heroImage) {
                    heroImage = imageMap["5482"] ? `/uploads/${imageMap["5482"]}` : null;
                }

                // Split Content: Separate first image (Poster) from Text
                // We'll do a simple DOM parser approach or regex
                let posterImage = null;
                let textContent = cleanContent(bodyRaw);

                // Regex to find the first <img> tag
                const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/;
                const match = bodyRaw.match(imgRegex);

                if (match) {
                    posterImage = match[1];
                    // Remove the first image from the body so it doesn't duplicate
                    // We remove the entire img tag
                    textContent = bodyRaw.replace(match[0], '');
                } else if (heroImage) {
                    // Fallback if no inline image but we have a hero (likely from frontmatter or image map)
                    // actually, let's just use the hero as poster if no inline image found
                    posterImage = heroImage;
                }

                setData({
                    ...item,
                    body: textContent,
                    heroImage,
                    posterImage
                });
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [slug]);

    return { data, loading, error };
};

export default function Content() {
    const { slug } = useParams();
    const { data, loading, error } = useContent(slug);

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
    if (error) return <div className="container section-padding">Error: {error}</div>;
    if (!data) return <Navigate to="/404" replace />;

    return (
        <div className="content-page">
            <SEO title={data.title} description={data.excerpt || data.title} image={data.heroImage} />

            {/* Hero Section - Parallax Style */}
            <div className="content-hero">
                <div className="hero-bg" style={{ backgroundImage: data.heroImage ? `url(${data.heroImage})` : 'none' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <div className="meta-badge">
                        {data.type === 'post' ? 'Portfolio' : 'Page'}
                        {data.date && <span className="separator">•</span>}
                        {data.date && formatDate(data.date)}
                    </div>
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {data.title}
                    </motion.h1>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="container content-layout">
                {/* Visual Sidebar (Poster) */}
                <aside className="content-sidebar">
                    <div className="sticky-poster">
                        {data.posterImage && (
                            <motion.img
                                src={data.posterImage}
                                alt={data.title}
                                className="poster-img"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                        <div className="poster-reflection"></div>
                    </div>

                    {/* Movie Details / Credits */}
                    <motion.div
                        className="movie-details"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="details-header">Details</h3>
                        <div className="details-grid">
                            {data.director && (
                                <div className="detail-item">
                                    <span className="detail-label">Director</span>
                                    <span className="detail-value">{data.director}</span>
                                </div>
                            )}
                            {data.genre && (
                                <div className="detail-item">
                                    <span className="detail-label">Genre</span>
                                    <span className="detail-value">{data.genre}</span>
                                </div>
                            )}
                            {data.origin && (
                                <div className="detail-item">
                                    <span className="detail-label">Origin</span>
                                    <span className="detail-value">{data.origin}</span>
                                </div>
                            )}
                            {data.cast && (
                                <div className="detail-item">
                                    <span className="detail-label">Cast</span>
                                    <span className="detail-value">{data.cast}</span>
                                </div>
                            )}
                            {data.date && (
                                <div className="detail-item">
                                    <span className="detail-label">Year</span>
                                    <span className="detail-value">{new Date(data.date).getFullYear()}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </aside>

                {/* Text Content */}
                <article className="content-main">
                    <motion.div
                        className="content-body"
                        dangerouslySetInnerHTML={{ __html: data.body }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />

                    {/* Navigation Footer */}
                    <div className="nav-footer">
                        <Link to="/works" className="back-link group">
                            <span className="arrow-circle">&larr;</span>
                            <span className="link-text">Back to Portfolio</span>
                        </Link>
                    </div>
                </article>
            </div>

            <style>{`
                .content-page {
                    background: #050505;
                    min-height: 100vh;
                    padding-bottom: 8rem;
                    color: #fff;
                }
                
                /* Hero */
                .content-hero {
                    position: relative;
                    height: 60vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    margin-bottom: 6rem;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.4;
                    filter: blur(8px); /* Blur layout for hero */
                    transform: scale(1.1);
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent 0%, #050505 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    width: 100%;
                }
                
                .meta-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 2rem;
                }
                .separator { color: rgba(255,255,255,0.3); }

                .hero-title {
                    font-size: clamp(3rem, 7vw, 6rem);
                    line-height: 1;
                    font-family: var(--font-heading);
                    text-shadow: 0 20px 40px rgba(0,0,0,0.5);
                    margin-bottom: 1rem;
                }

                /* Layout Grid */
                .content-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr; /* Sidebar | Content */
                    gap: 5rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .content-layout {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    /* Specific mobile adjustments for our-land image if needed */
                }

                /* Sidebar / Poster */
                .content-sidebar {
                    position: relative;
                }
                .sticky-wrapper {
                    position: sticky;
                    top: 120px; /* Space for Navbar */
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .poster-container {
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .poster-img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                /* Movie Details Box */
                .movie-details {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 2rem;
                    border-radius: 8px;
                }
                .details-header {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: #fff;
                    border-bottom: 1px solid var(--color-primary);
                    display: inline-block;
                    padding-bottom: 0.5rem;
                }
                .details-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .detail-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }
                .detail-label {
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                    letter-spacing: 0.1em;
                }
                .detail-value {
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 500;
                }

                /* Main Content Area */
                .content-main {
                    padding-top: 1rem;
                }
                
                .content-body {
                    color: #d0d0d0;
                    font-size: 1.2rem;
                    line-height: 1.8;
                    font-weight: 300;
                }
                
                /* Typography & Elements */
                .content-body p {
                    margin-bottom: 2rem;
                }
                .content-body h2 {
                    font-size: 2.2rem;
                    color: #fff;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    border-left: 3px solid var(--color-primary);
                    padding-left: 1.5rem;
                }
                .content-body h3 {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                }
                
                /* Buttons in Content */
                .content-body a {
                    color: var(--color-primary);
                    text-decoration: none;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
                    transition: all 0.3s ease;
                }
                .content-body a:not([style*="padding"]):hover {
                    border-bottom-color: var(--color-primary);
                    background: rgba(212, 175, 55, 0.1);
                    color: #fff;
                }

                /* Trailer Button Styling Override */
                .content-body a[style*="background"] {
                    display: inline-block !important;
                    background: transparent !important;
                    color: var(--color-primary) !important;
                    border: 1px solid var(--color-primary) !important;
                    padding: 1rem 2.5rem !important;
                    font-size: 0.9rem !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.15em !important;
                    transition: all 0.3s ease !important;
                    box-shadow: none !important;
                    margin-top: 1rem;
                }
                .content-body a[style*="background"]:hover {
                    background: var(--color-primary) !important;
                    color: #000 !important;
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.3) !important;
                    transform: translateY(-2px);
                }

                .content-body strong {
                    color: #fff;
                    font-weight: 600;
                }
                
                /* Blockquotes */
                .content-body blockquote {
                    position: relative;
                    margin: 3rem 0;
                    padding: 2rem;
                    background: rgba(255,255,255,0.03);
                    border-left: 2px solid var(--color-primary);
                    font-size: 1.3rem;
                    font-family: var(--font-heading);
                    font-style: italic;
                    color: rgba(255,255,255,0.9);
                }
                
                /* Image Clean up */
                /* Hide images in body loop if they were extracted but regex failed to remove */
                /* (Handled by JS extraction, but CSS safety net) */
                
                /* Footer Nav */
                .nav-footer {
                    margin-top: 5rem;
                    padding-top: 3rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    text-decoration: none;
                    color: var(--color-text-muted);
                    transition: color 0.3s;
                }
                .arrow-circle {
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .link-text {
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                }
                .back-link:hover .arrow-circle {
                    border-color: var(--color-primary);
                    background: var(--color-primary);
                    color: #000;
                    transform: translateX(-5px);
                }
                .back-link:hover .link-text {
                    color: #fff;
                }
            `}</style>
        </div>
    );
}
