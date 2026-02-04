import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { cleanContent, formatDate } from '../lib/utils';

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

                // Parse Frontmatter (Simple Split)
                // The extract_data.js creates files starting with --- then frontmatter then ---
                const parts = text.split('---');
                // parts[0] is empty, parts[1] is frontmatter, parts[2...] is body
                const body = parts.slice(2).join('---');

                setData({ ...item, body: cleanContent(body) });
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

    if (loading) return <div className="container section-padding">Loading...</div>;
    if (error) return <div className="container section-padding">Error: {error}</div>;
    if (!data) return <Navigate to="/404" replace />;

    return (
        <div className="content-page">
            <article className="container section-padding">
                <header className="content-header">
                    <div className="meta">
                        {data.type === 'post' && <span className="date">{formatDate(data.date)}</span>}
                        {data.type && <span className="type-badge">{data.type}</span>}
                    </div>
                    <h1 className="content-title">{data.title}</h1>
                </header>

                <div className="content-body" dangerouslySetInnerHTML={{ __html: data.body }} />
            </article>

            <style>{`
                .content-page {
                    min-height: 80vh;
                }
                .content-header {
                    margin-bottom: 3rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 2rem;
                }
                .meta {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .content-title {
                    font-size: clamp(2rem, 5vw, 4rem);
                    color: var(--color-text-main);
                }
                
                .content-body {
                    max-width: 800px; /* Readability */
                    font-size: 1.125rem;
                    color: #d0d0d0;
                }
                .content-body p {
                    margin-bottom: 2rem;
                    line-height: 1.8;
                }
                .content-body h2 {
                    margin-top: 4rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-primary);
                }
                .content-body h3 {
                    margin-top: 3rem;
                    margin-bottom: 1rem;
                }
                .content-body ul, .content-body ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .content-body li {
                    margin-bottom: 0.75rem;
                }
                .content-body a {
                    text-decoration: underline;
                    text-decoration-color: var(--color-border);
                    text-underline-offset: 4px;
                }
                .content-body a:hover {
                    color: var(--color-primary);
                    text-decoration-color: var(--color-primary);
                }
                .content-body img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 4px;
                    margin: 2rem 0;
                }
           `}</style>
        </div>
    );
}
