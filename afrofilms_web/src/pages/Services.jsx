import SEO from '../components/SEO';

export default function Services() {
    return (
        <div className="services-page">
            <SEO title="Services" description="Our expertise in Pre-Production, Production, and Post-Production. AfroFilms International is a collective of storytellers committed to the African narrative." />

            {/* Services Section */}
            <section className="services-section relative">
                <div className="services-bg"></div>
                <div className="services-overlay"></div>
                <div className="container relative z-10">
                    <div className="services-header center-text mb-16">
                        <span className="section-subtitle">Our Expertise</span>
                        <h1 className="services-title">What We <span className="text-gold">Do.</span></h1>
                        <p className="services-lead">
                            AfroFilms International is more than a production company; we are a collective of passionate individuals with a shared vision. Specializing in both independent and commissioned productions, our portfolio spans fiction, non-fiction, commercial, and corporate content.
                        </p>
                    </div>

                    <div className="services-container">
                        {/* Service Cards */}
                        <div className="service-card glass-panel animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            <div className="card-icon">⚡</div>
                            <h3 className="card-title">Pre-Production</h3>
                            <ul className="service-list">
                                <li>Research</li>
                                <li>Fixing</li>
                                <li>Scripting</li>
                                <li>Brand Strategy</li>
                            </ul>
                        </div>

                        <div className="service-card glass-panel animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="card-icon">🎥</div>
                            <h3 className="card-title">Production</h3>
                            <ul className="service-list">
                                <li>Directing</li>
                                <li>Cinematography</li>
                                <li>Line Producing</li>
                                <li>Sound Recording</li>
                                <li>Live Events</li>
                            </ul>
                        </div>

                        <div className="service-card glass-panel animate-fade-up" style={{ animationDelay: '0.3s' }}>
                            <div className="card-icon">💻</div>
                            <h3 className="card-title">Post-Production</h3>
                            <ul className="service-list">
                                <li>Editing</li>
                                <li>Graphics & VFX</li>
                                <li>Animation</li>
                                <li>Music Scoring</li>
                                <li>Color Grading</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .services-section {
                    min-height: 100vh; /* Make it full page height */
                    padding: 8rem 0;
                    position: relative;
                    overflow: hidden;
                    background: #111;
                    color: #fff;
                    display: flex;
                    align-items: center; /* Center content vertically if needed */
                }
                .services-bg {
                    position: absolute;
                    inset: 0;
                    background-image: url('/uploads/2020/08/viewpoint.jpg');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.3;
                    filter: blur(5px);
                }
                .services-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.8);
                    z-index: 1;
                }
                
                .services-header {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                .services-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    font-family: var(--font-heading);
                    margin-bottom: 1rem;
                    color: #fff;
                    line-height: 1;
                }
                .services-lead {
                    font-size: 1.25rem;
                    color: rgba(255,255,255,0.8);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .section-subtitle {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.85rem;
                    margin-bottom: 1rem;
                    display: block;
                }

                .services-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    position: relative;
                    z-index: 2;
                }

                .glass-panel {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 2.5rem;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .glass-panel:hover {
                    transform: translateY(-5px);
                    border-color: var(--color-primary);
                    background: rgba(255, 255, 255, 0.05);
                }

                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                .card-title {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 0.5rem;
                }
                
                .service-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .service-list li {
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.8rem;
                    padding-left: 1.2rem;
                    position: relative;
                    font-size: 1rem;
                }
                .service-list li::before {
                    content: '•';
                    color: var(--color-primary);
                    position: absolute;
                    left: 0;
                }
                .text-gold {
                    color: var(--color-primary);
                }
                .center-text {
                    text-align: center;
                }
                .mb-16 {
                    margin-bottom: 4rem;
                }
             `}</style>
        </div>
    );
}
