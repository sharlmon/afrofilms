import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

export default function Contact() {
    // Use "benatronics-studio.jpeg" (ID 1236) for a workspace vibe
    const contactImage = imageMap["1236"] ? `/uploads/${imageMap["1236"]}` : null;

    return (
        <div className="contact-page">
            <SEO title="Contact" description="Get in touch with AfroFilms International. Based in Nairobi, Kenya. We execute creative projects from Script to Screen." />
            <section className="contact-hero">
                <div className="hero-bg" style={{ backgroundImage: contactImage ? `url(${contactImage})` : 'none' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content center">
                    <span className="section-subtitle text-gold">Get In Touch</span>
                    <h1 className="hero-title">Start Your Project</h1>
                </div>
            </section>

            <section className="contact-content section-padding">
                <div className="container relative z-10">
                    <div className="contact-hub-grid">
                        {/* Visit Card */}
                        <div className="hub-card glass group">
                            <div className="card-icon">📍</div>
                            <h3 className="card-title">Visit Us</h3>
                            <div className="card-body">
                                <p>142 Raphta Road,<br />Westlands Nairobi, Kenya</p>
                            </div>
                            <a href="https://maps.google.com/?q=142+Raphta+Road,+Westlands+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className="card-link">
                                Get Directions <span className="arrow">→</span>
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="hub-card glass group">
                            <div className="card-icon">✉️</div>
                            <h3 className="card-title">Email Us</h3>
                            <div className="card-body">
                                <p>For inquiries and collaborations:</p>
                                <a href="mailto:admin@afrofilmsinternational.com" className="highlight-link">admin@afrofilmsinternational.com</a>
                            </div>
                            <a href="mailto:admin@afrofilmsinternational.com" className="card-link">
                                Send Email <span className="arrow">→</span>
                            </a>
                        </div>

                        {/* Call Card */}
                        <div className="hub-card glass group">
                            <div className="card-icon">📞</div>
                            <h3 className="card-title">Call Us</h3>
                            <div className="card-body">
                                <p>Mon - Fri, 9am - 5pm EAT</p>
                                <a href="tel:+254720100167" className="highlight-link">+254 720 100 167</a>
                            </div>
                            <a href="tel:+254720100167" className="card-link">
                                Call Now <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .contact-hero {
                    position: relative;
                    height: 50vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: #111;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, #000);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                .hero-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    margin-bottom: 0;
                }
                .section-subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .contact-content {
                    position: relative;
                    margin-top: -80px; /* Overlap hero */
                    padding-bottom: 8rem;
                }

                .contact-hub-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .hub-card {
                    padding: 3rem 2rem;
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.4s ease;
                }

                .hub-card:hover {
                    background: rgba(20, 20, 20, 0.9);
                    transform: translateY(-10px);
                    border-color: var(--color-primary);
                }

                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                    filter: grayscale(1);
                    transition: filter 0.3s;
                }
                .hub-card:hover .card-icon {
                    filter: grayscale(0);
                }

                .card-title {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1rem;
                    font-family: var(--font-heading);
                }

                .card-body {
                    margin-bottom: 2rem;
                    color: #aaa;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    flex-grow: 1; /* Push button down */
                }

                .highlight-link {
                    color: #fff;
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 1.1rem;
                    transition: color 0.3s;
                }
                .hub-card:hover .highlight-link {
                    color: var(--color-primary);
                }

                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.85rem;
                    color: var(--color-primary);
                    font-weight: 600;
                    padding-bottom: 2px;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s;
                }
                .card-link:hover {
                    opacity: 0.8;
                    border-bottom-color: var(--color-primary);
                }
                .arrow {
                    transition: transform 0.3s;
                }
                .card-link:hover .arrow {
                    transform: translateX(5px);
                }

                @media (max-width: 768px) {
                    .contact-content {
                        margin-top: 0;
                        padding-top: 2rem;
                    }
                    .contact-hub-grid {
                        grid-template-columns: 1fr;
                    }
                    .hub-card {
                        padding: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}
