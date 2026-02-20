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

const CATEGORIES = {
    'featured-documentaries': 'Feature Films',
    'short-films': 'Short Films',
    'commissioned-projects': 'Commissioned Projects'
};

export default function Works() {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

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
                        const text = await res.text(); // Markdown content

                        // Extract FIRST image from HTML/Markdown content
                        // Matches <img src="..."> OR ![alt](src)
                        const imgMatch = text.match(/<img[^>]+src="([^">]+)"/) || text.match(/!\[.*?\]\((.*?)\)/);

                        if (imgMatch) {
                            image = imgMatch[1];
                        } else if (imageMap[item.id]) {
                            image = `/uploads/${imageMap[item.id]}`;
                        } else {
                            image = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
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


    // Group works by category
    const groupedWorks = works.reduce((acc, work) => {
        let category = work.category || 'featured-documentaries';

        // Map old categories to new 'short-films' category
        if (category === 'independent-fiction' || category === 'independent-non-fiction') {
            category = 'short-films';
        }

        if (!acc[category]) acc[category] = [];
        acc[category].push(work);
        return acc;
    }, {});

    const categoriesList = Object.entries(CATEGORIES);

    const handleCategoryClick = (categoryKey) => {
        setActiveCategory(categoryKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="works-page">
            <SEO title="Portfolio" description="Explore our library of feature films, documentaries, and training initiatives." />

            <header className="page-header container">
                <div className="header-content animate-fade-in">
                    <span className="section-subtitle text-gold">Our Portfolio</span>
                    <h1 className="page-title">
                        {activeCategory ? CATEGORIES[activeCategory] : <span className="text-stroke">Select Category</span>}
                    </h1>
                </div>
            </header>

            <div className="container min-h-[60vh]">
                {/* Category Selection View */}
                {!activeCategory && (
                    <div className="category-selection-grid">
                        {categoriesList.map(([key, label]) => {
                            const items = groupedWorks[key];
                            // Use the first item's image as the category cover, or a fallback
                            const coverImage = items && items.length > 0 ? items[0].image : FALLBACK_IMAGES[0];

                            if (!items || items.length === 0) return null;

                            return (
                                <div key={key} className="category-card group" onClick={() => handleCategoryClick(key)}>
                                    <div className="img-wrapper category-img-wrapper">
                                        <img src={coverImage} alt={label} className="work-img" />
                                        <div className="img-overlay category-overlay">
                                            <span className="view-btn">View</span>
                                        </div>
                                    </div>
                                    <h2 className="category-card-title">{label}</h2>
                                    <span className="project-count">{items.length} Projects</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Projects Grid View */}
                {activeCategory && (
                    <div className="animate-fade-in">
                        {/* Navigation Tabs */}
                        <div className="category-tabs mb-12 flex flex-wrap gap-4 justify-center">
                            <button
                                className="back-btn"
                                onClick={() => setActiveCategory(null)}
                            >
                                ← All Categories
                            </button>
                            {categoriesList.map(([key, label]) => {
                                if (!groupedWorks[key]?.length) return null;
                                return (
                                    <button
                                        key={key}
                                        className={`tab-btn ${activeCategory === key ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(key)}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Projects Grid */}
                        <div className="works-grid">
                            {groupedWorks[activeCategory]?.map((post, i) => (
                                <WorkCard key={post.id} post={post} index={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>



            <style>{`
                .works-page {
                    padding-bottom: 0;
                    background: #050505;
                    min-height: 100vh;
                }
                .page-header {
                    padding: 8rem 0 4rem;
                    text-align: center;
                }
                .page-title {
                    font-size: clamp(3rem, 6vw, 5rem);
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

                /* Category Selection Styles */
                .category-selection-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 4rem;
                }
                .category-card {
                    cursor: pointer;
                    text-align: center;
                }
                .category-img-wrapper {
                    aspect-ratio: 4/5; /* Portrait aspect for categories */
                    margin-bottom: 1.5rem;
                }
                .category-card-title {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    color: #fff;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    transition: color 0.3s;
                }
                .category-card:hover .category-card-title {
                    color: var(--color-primary);
                }
                .project-count {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
                .category-overlay {
                    background: rgba(0,0,0,0.4);
                }
                .category-card:hover .category-overlay {
                    background: rgba(0,0,0,0.2);
                }

                /* Tabs */
                .category-tabs {
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 2rem;
                }
                .tab-btn {
                    background: transparent;
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: 100px;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                .tab-btn:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .tab-btn.active {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: #000;
                    font-weight: 600;
                }
                .back-btn {
                    background: transparent;
                    border: none;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    padding: 0.75rem 1.5rem;
                    cursor: pointer;
                    transition: color 0.3s;
                }
                .back-btn:hover {
                    color: #fff;
                }

                /* GRID LAYOUT */
                .works-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 3rem 2rem;
                }
                @media (max-width: 768px) {
                    .works-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .page-title {
                        font-size: 2.5rem;
                    }
                }

                /* Work Card */
                .work-card {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .work-card-link {
                    text-decoration: none;
                    display: block;
                }
                
                .img-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
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
                .work-card-link:hover .work-img, .category-card:hover .work-img {
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
                .work-card-link:hover .view-btn, .category-card:hover .view-btn {
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
                        style={{ objectFit: post.objectFit || 'cover' }}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="work-year">{post.date ? new Date(post.date).getFullYear() : 'PROJECT'}</span>
                        {post.genre && <span className="work-year" style={{ color: 'var(--color-primary)' }}>{post.genre}</span>}
                    </div>
                    <h2 className="work-title">{post.title}</h2>
                </div>
            </Link>
        </article>
    );
}
