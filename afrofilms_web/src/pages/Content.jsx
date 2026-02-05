import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { cleanContent, formatDate, extractFirstImage } from '../lib/utils';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

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
                const body = parts.slice(2).join('---');

                // Extract Image for Hero
                let heroImage = extractFirstImage(body);
                // Fallback logic if extract fails to find a good one or if it's the generic one
                if (!heroImage) {
                    heroImage = imageMap["5482"] ? `/uploads/${imageMap["5482"]}` : null; // Use generic banner
                }

                setData({
                    ...item,
                    body: cleanContent(body),
                    heroImage
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
            {/* Hero Section */}
            <div className="content-hero">
                <div className="hero-bg" style={{ backgroundImage: data.heroImage ? `url(${data.heroImage})` : 'none' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <div className="meta-badge">
                        {data.type === 'post' ? 'Work / News' : 'Page'}
                        {data.date && <span className="separator">•</span>}
                        {data.date && formatDate(data.date)}
                    </div>
                    <h1 className="hero-title">{data.title}</h1>
                </div>
            </div>

            {/* Content Body */}
            <article className="container content-wrapper">
                <div className="content-body" dangerouslySetInnerHTML={{ __html: data.body }} />
            </article>

            {/* Navigation Footer */}
            <div className="container nav-footer">
                <Link to="/press" className="back-link">&larr; Back to Journal</Link>
            </div>

            <style>{`
                /* ... existing styles ... */
                .nav-footer {
                    max-width: 800px;
                    margin: 0 auto;
                    padding-top: 4rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    margin-top: 4rem;
                }
                .back-link {
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                    transition: color 0.3s;
                    text-decoration: none !important;
                    border-bottom: none !important;
                }
                .back-link:hover {
                    color: var(--color-primary);
                }

                .content-page {
                    background: #050505;
                    min-height: 100vh;
                    padding-bottom: 6rem;
                }
                
                .content-hero {
                    position: relative;
                    height: 70vh;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    overflow: hidden;
                    margin-bottom: 5rem;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                    transform: scale(1.05);
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 20%, rgba(5,5,5,0.3) 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    padding-top: 4rem;
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
                    margin-bottom: 1.5rem;
                }
                .separator { color: rgba(255,255,255,0.3); }

                .hero-title {
                    font-size: clamp(3rem, 6vw, 5.5rem);
                    line-height: 1.1;
                    color: #fff;
                    font-family: var(--font-heading);
                }

                .content-wrapper {
                    max-width: 800px; /* Constrain width for readability as requested */
                    margin: 0 auto;
                }

                .content-body {
                    color: #e0e0e0;
                    font-size: 1.15rem;
                    line-height: 1.9;
                    font-weight: 300;
                }
                
                /* Typography & Spacing */
                .content-body p {
                    margin-bottom: 2rem;
                }
                .content-body h2 {
                    font-size: 2rem;
                    color: #fff;
                    margin-top: 4rem;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    border-left: 2px solid var(--color-primary);
                    padding-left: 1rem;
                }
                .content-body h3 {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-top: 3rem;
                    margin-bottom: 1rem;
                }
                .content-body a {
                    color: var(--color-primary);
                    text-decoration: none;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
                    transition: all 0.2s ease;
                }
                .content-body a:hover {
                    border-bottom-color: var(--color-primary);
                    background: rgba(212, 175, 55, 0.1);
                }
                .content-body strong {
                    color: #fff;
                    font-weight: 600;
                }
                .content-body blockquote {
                    border-left: 3px solid var(--color-primary);
                    padding-left: 2rem;
                    margin: 3rem 0;
                    font-style: italic;
                    color: rgba(255,255,255,0.8);
                    font-size: 1.4rem;
                    font-family: var(--font-heading);
                }

                /* Image Handling in Content */
                .content-body img {
                    width: 100%;
                    height: auto;
                    border-radius: 4px;
                    margin: 3rem 0;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                .content-body iframe {
                    width: 100%;
                    aspect-ratio: 16/9;
                    border-radius: 4px;
                    margin: 3rem 0;
                    background: #111;
                }
                
                /* Lists */
                .content-body ul, .content-body ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .content-body li {
                    margin-bottom: 0.75rem;
                    position: relative;
                }
            `}</style>
        </div>
    );
}
