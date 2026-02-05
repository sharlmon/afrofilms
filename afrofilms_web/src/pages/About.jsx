import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

export default function About() {
    // Images
    const bannerImage = imageMap["1293"] ? `/uploads/${imageMap["1293"]}` : null; // On Set



    return (
        <div className="about-page">
            <SEO title="About Us" description="A collective of storytellers committed to the African narrative. Established in 2008." />
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-bg" style={{ backgroundImage: bannerImage ? `url(${bannerImage})` : 'none' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title">We Are <span className="text-gold">AfroFilms</span></h1>
                    <p className="hero-lead">A collective of storytellers committed to the African narrative.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission section-padding">
                <div className="container grid-2">
                    <div className="mission-content">
                        <span className="section-subtitle">Our Mission</span>
                        <h2 className="section-title">Bringing African stories to the <span className="text-gradient">global stage.</span></h2>
                        <div className="spacer"></div>
                        <p>
                            At AfroFilms International, our mission transcends traditional storytelling. We aspire to not only entertain but also be a force for positive change.
                        </p>
                        <p>
                            Through our compelling narratives, we aim to ignite conversations, challenge norms, and contribute to the global dialogue on critical issues.
                        </p>
                    </div>
                    <div className="mission-stat glass">
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Global Partners</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section (Services) */}
            <section id="services" className="services-section relative">
                <div className="services-bg"></div>
                <div className="services-overlay"></div>
                <div className="container relative z-10">
                    <div className="services-header center-text mb-16">
                        <span className="section-subtitle">Our Expertise</span>
                        <h2 className="services-title">What We <span className="text-gold">Do.</span></h2>
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

                    <div className="rental-banner-wrapper mt-20 animate-fade-in">
                        <div className="rental-banner glass-panel relative overflow-hidden p-10 md:p-14 border-gold group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"></path></svg>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-left max-w-lg">
                                    <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">Production Logistics</span>
                                    <h3 className="text-4xl md:text-5xl font-heading text-white mb-4 leading-tight">
                                        Need Gear?
                                    </h3>
                                    <p className="text-gray-300 text-lg font-light leading-relaxed">
                                        From high-end cinema cameras to our specialized production vans, we have the tools to fuel your vision.
                                    </p>
                                </div>

                                <a href="/contact" className="btn-glow px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300 whitespace-nowrap">
                                    Request Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section Removed and Moved to Team.jsx */}

            <style>{`
                .about-hero {
                    position: relative;
                    height: 60vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background: #000;
                    overflow: hidden;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center 30%;
                    opacity: 0.6;
                    transform: scale(1.05);
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.7);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                }
                .hero-title {
                    font-size: clamp(3rem, 6vw, 5rem);
                    margin-bottom: 1rem;
                }
                .hero-lead {
                    font-size: 1.5rem;
                    color: rgba(255,255,255,0.9);
                }

                .grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 900px) {
                    .grid-2 {
                        grid-template-columns: 1fr;
                    }
                }
                
                .section-subtitle {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.85rem;
                    margin-bottom: 1rem;
                    display: block;
                }
                .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    line-height: 1.2;
                }
                .mission-content p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                    margin-bottom: 1.5rem;
                }
                
                .mission-stat {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    padding: 3rem;
                    border-radius: 8px;
                }
                .stat-number {
                    display: block;
                    font-size: 3rem;
                    font-weight: 700;
                    color: var(--color-primary);
                }
                .stat-label {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .bg-darker {
                    background: rgba(255,255,255,0.02);
                }
                .center {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-desc {
                    color: var(--color-text-muted);
                    font-size: 1.2rem;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .team-card {
                    padding: 1.5rem;
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                .team-card:hover {
                    transform: translateY(-5px);
                }
                .member-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 auto 1.5rem;
                    border: 3px solid var(--color-primary);
                }
                .member-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .member-info h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }
                .member-role {
                    color: var(--color-primary);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                /* Services Section - Redesigned */
                .services-section {
                    padding: 8rem 0;
                    position: relative;
                    overflow: hidden;
                    background: #111;
                    color: #fff;
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

                .rental-banner-wrapper {
                    max-width: 1000px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .rental-banner {
                    background: linear-gradient(135deg, rgba(20,20,20,0.9), rgba(5,5,5,0.95));
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                }
                .rental-banner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    opacity: 0.5;
                }
                
                .btn-glow {
                     position: relative;
                     border-radius: 2px;
                     overflow: hidden;
                }
                .btn-glow:hover {
                    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
                }
                
                .border-gold {
                    border: 1px solid rgba(212, 175, 55, 0.15);
                }
                .rental-banner:hover {
                    border-color: rgba(212, 175, 55, 0.3);
                }

                .btn-outline {
                    display: inline-block;
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);
                    padding: 0.75rem 2rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    border-radius: 4px;
                    transition: all 0.3s;
                }
                .btn-outline:hover {
                    background: var(--color-primary);
                    color: #000;
                }
             `}</style>
        </div>
    );
}
