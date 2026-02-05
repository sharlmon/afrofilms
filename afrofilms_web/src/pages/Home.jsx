import { Link } from 'react-router-dom';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

export default function Home() {
    // Images
    const heroImage = imageMap["5482"] ? `/uploads/${imageMap["5482"]}` : null;
    const heroBg = heroImage ? `url(${heroImage})` : 'var(--color-bg-card)';

    // Featured Projects Data
    const features = [
        {
            id: 4,
            title: "Our Land Our Freedom",
            category: "Feature Documentary",
            desc: "A powerful story of land, legacy, and liberation.",
            image: imageMap["5627"] || "/uploads/placeholder.jpg",
            link: "https://ourlandourfreedom.com",
            external: true
        },
        {
            id: 5,
            title: "Widow Champion",
            category: "Feature Documentary",
            desc: "Championing the rights and resilience of widows.",
            image: imageMap["5623"] || "/uploads/placeholder.jpg",
            link: "https://widowchampion.com",
            external: true
        },
        {
            id: 1,
            title: "The Terrace Residency",
            category: "Documentary Series",
            desc: "Cultivating the business of art in East Africa.",
            image: imageMap["5627"] || imageMap["5623"], // Terrace images
            link: "/works"
        },
        {
            id: 2,
            title: "Too Early For Birds",
            category: "Performance",
            desc: "Retelling Kenyan history through storytelling.",
            image: imageMap["1380"], // Too Early For Birds image
            link: "/works"
        },
        {
            id: 3,
            title: "Nairobi Half Life",
            category: "Feature Film",
            desc: "A breakthrough in Kenyan cinema.",
            image: imageMap["5502"], // Using 'river-album' or similar as placeholder if specific NHL image missing, or fallback
            link: "/works"
        }
    ];

    // Partners Data
    const partners = [
        "1362", // British Council
        "1415", // HIAS
        "1416", // Maisha
        "1424", // Standard Chartered
        "1443", // Safaricom
        "1441", // TBWA
        "1414", // Cocolili
        "1418", // mlab
        "1439", // Talking
        "1449", // Radio Film
        "1433", // Action Horizon
        "1423", // Six Toes
        "1437", // Manyatta Screens
        "1419", // Paul Rieth
        "1427", // TFI (Tribeca)
        "1431", // USS (Universal)
        "1445", // Mall of Africa
        // "1457" // Check if this is ERDA, if not, skip. 1457 is zippy kids. 
    ].map(id => imageMap[id] ? `/uploads/${imageMap[id]}` : null).filter(Boolean);

    return (
        <div className="home-page">
            <SEO title="Home" description="African Stories. Global Impact. Award-winning production house in Nairobi, Kenya." />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg" style={{ backgroundImage: heroBg }}></div>
                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <span className="hero-subtitle">Est. 2008</span>
                    <h1 className="hero-title">
                        African Stories.<br />
                        <span className="text-gold">Global Impact.</span>
                    </h1>
                    <p className="hero-description">
                        We are an award-winning production house dedicated to capturing the essence of the human experience through an authentic African lens.
                    </p>
                    <div className="hero-actions">
                        <Link to="/works" className="btn btn-primary">View Our Work</Link>
                        <Link to="/about" className="btn btn-outline">Our Story</Link>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="featured section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Originals</h2>
                        <Link to="/works" className="link-arrow">View all projects &rarr;</Link>
                    </div>

                    <div className="featured-grid">
                        {features.map((item, index) => {
                            const CardContent = () => (
                                <>
                                    <div className="card-bg" style={{ backgroundImage: item.image ? `url(/uploads/${item.image})` : 'none' }}></div>
                                    <div className="card-overlay"></div>
                                    <div className="card-content">
                                        <div className="card-meta">{item.category}</div>
                                        <h3 className="card-title">{item.title}</h3>
                                        <p className="card-desc">{item.desc}</p>
                                    </div>
                                </>
                            );

                            return item.external ? (
                                <a href={item.link} key={index} className="featured-card" target="_blank" rel="noopener noreferrer">
                                    <CardContent />
                                </a>
                            ) : (
                                <Link to={item.link} key={index} className="featured-card">
                                    <CardContent />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners section-padding">
                <div className="container">
                    <h2 className="section-title center-text">Our Clients & Partners</h2>
                    <div className="partners-grid">
                        {partners.map((logo, index) => (
                            <div key={index} className="partner-logo">
                                <img src={logo} alt="Partner Logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .hero {
                    position: relative;
                    height: 90vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .hero-bg {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                    animation: zoomEffect 20s infinite alternate;
                }
                @keyframes zoomEffect {
                    from { transform: scale(1); }
                    to { transform: scale(1.1); }
                }
                .hero-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%);
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                }
                
                .hero-subtitle {
                    color: var(--color-primary);
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }
                
                .hero-title {
                    font-size: clamp(3.5rem, 8vw, 6rem);
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    font-family: var(--font-heading);
                }
                
                .hero-description {
                    font-size: 1.25rem;
                    color: #d0d0d0;
                    max-width: 600px;
                    margin-bottom: 3rem;
                    line-height: 1.6;
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

                .featured-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .featured-card {
                    position: relative;
                    height: 450px;
                    border-radius: 8px;
                    overflow: hidden;
                    display: block;
                    text-decoration: none;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .card-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    z-index: 0;
                }
                .featured-card:hover .card-bg {
                    transform: scale(1.1);
                }
                .card-overlay {
                    position: absolute;
                    inset: 0;
                    /* Stronger gradient for text readability */
                    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%);
                    z-index: 1;
                }
                .card-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 2.5rem;
                }
                .card-meta {
                    color: var(--color-primary);
                    font-size: 0.85rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                    font-weight: 600;
                }
                .card-title {
                    font-size: 2rem;
                    color: #fff;
                    margin-bottom: 0.75rem;
                    font-family: var(--font-heading);
                    line-height: 1.1;
                }
                .card-desc {
                    color: rgba(255,255,255,0.8);
                    font-size: 1rem;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: all 0.3s ease;
                    line-height: 1.5;
                }
                .featured-card:hover .card-desc {
                    transform: translateY(0);
                    opacity: 1;
                }

                .partners {
                    background: #fff;
                    color: #000;
                    text-align: center;
                }
                .center-text {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .partners .section-title {
                    color: #000;
                    margin-bottom: 2rem; /* Reduced margin */
                }
                .partners-grid {
                    display: grid;
                    /* More columns for smaller density */
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
                    gap: 2rem;
                    align-items: center;
                    justify-items: center;
                    padding: 0 2rem;
                }
                .partner-logo {
                     /* ensures alignment */
                     display: flex;
                     align-items: center;
                     justify-content: center;
                }
                .partner-logo img {
                    max-width: 100px;
                    max-height: 60px;
                    object-fit: contain;
                    /* Removed grayscale */
                    filter: none;
                    opacity: 1;
                    transition: transform 0.3s ease;
                }
                .partner-logo img:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}
