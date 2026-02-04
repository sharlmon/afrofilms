import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content animate-fade-in">
                    <span className="hero-kicker text-gold">Est. 2008</span>
                    <h1 className="hero-title">
                        African Stories.<br />
                        <span className="text-gradient">Global Impact.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Award-winning film production company bridging narratives across continents.
                    </p>
                    <div className="hero-actions">
                        <Link to="/works" className="btn btn-primary">
                            View Our Work
                        </Link>
                        <Link to="/about" className="btn btn-outline">
                            About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Section (Placeholder for now) */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Latest Productions</h2>
                        <Link to="/works" className="link-arrow">View all projects &rarr;</Link>
                    </div>
                    {/* We can load featured items here later */}
                </div>
            </section>

            <style>{`
                .hero {
                    position: relative;
                    height: 90vh; /* Premium height */
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                    background-image: url('/uploads/2013/09/cropped-header-img.jpg'); /* Verify path or use placeholder */
                    background-size: cover;
                    background-position: center;
                    overflow: hidden;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(5,5,5,0.4), var(--color-bg-main));
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }
                .hero-kicker {
                    font-family: var(--font-sans);
                    font-weight: 500;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    display: block;
                    font-size: 0.9rem;
                }
                .hero-title {
                    margin-bottom: 1.5rem;
                    line-height: 1.05;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    margin-bottom: 2.5rem;
                }
                .hero-actions {
                    display: flex;
                    gap: 1.5rem;
                }
                .btn {
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    font-weight: 500;
                    transition: all var(--transition-fast);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-size: 0.9rem;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-primary {
                    background: var(--color-primary);
                    color: #000;
                }
                .btn-primary:hover {
                    background: var(--color-primary-hover);
                    transform: translateY(-2px);
                }
                .btn-outline {
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    background: rgba(0,0,0,0.3);
                    backdrop-filter: blur(4px);
                }
                .btn-outline:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 3rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 2rem;
                }
                .link-arrow {
                    font-family: var(--font-sans);
                    font-weight: 500;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            `}</style>
        </div>
    );
}
