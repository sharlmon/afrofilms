import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils'; // Adjust path if needed

export default function Works() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from the public manifest
        fetch('/content_manifest.json')
            .then(res => res.json())
            .then(data => {
                // Filter posts, maybe sort by date
                const works = data.filter(item => item.type === 'post')
                    .sort((a, b) => new Date(b.date) - new Date(a.date));
                setPosts(works);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load content", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container section-padding">Loading projects...</div>;

    return (
        <div className="works-page">
            <div className="container section-padding">
                <header className="page-header">
                    <h1 className="page-title">Our Work</h1>
                    <p className="page-intro">A selection of films, documentaries, and stories throughout the years.</p>
                </header>

                <div className="works-grid">
                    {posts.map(post => (
                        <article key={post.id} className="work-card glass">
                            <Link to={`/${post.slug}`} className="work-link">
                                {/* Placeholder image logic or check if post has image in frontmatter */}
                                <div className="work-image-container">
                                    <div className="work-image-placeholder"></div>
                                </div>
                                <div className="work-content">
                                    <span className="work-date">{formatDate(post.date)}</span>
                                    <h2 className="work-title">{post.title}</h2>
                                    <span className="work-cta">Read Case Study</span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
                .page-header {
                    margin-bottom: 4rem;
                    max-width: 800px;
                }
                .page-title {
                    font-size: clamp(3rem, 6vw, 5rem);
                    margin-bottom: 1rem;
                }
                .page-intro {
                    font-size: 1.2rem;
                    color: var(--color-text-muted);
                }

                .works-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 3rem 2rem;
                }
                
                .work-card {
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform var(--transition-med), box-shadow var(--transition-fast);
                    height: 100%;
                }
                .work-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--color-border-hover);
                }
                
                .work-link {
                    display: block;
                    height: 100%;
                    color: inherit;
                }

                .work-image-container {
                    aspect-ratio: 16/9;
                    background: #222;
                    overflow: hidden;
                }
                .work-image-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
                }
                
                .work-content {
                    padding: 2rem;
                }
                .work-date {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    display: block;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .work-title {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }
                .work-cta {
                    font-size: 0.9rem;
                    color: var(--color-primary);
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>
        </div>
    );
}
