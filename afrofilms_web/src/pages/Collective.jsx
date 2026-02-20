import SEO from '../components/SEO';

const HERO_IMAGE = "/uploads/2021/05/24-05-2021-at-16.57.32Training-Arts-Residence.jpg";

const services = [
    {
        icon: "⚡",
        title: "Pre-Production",
        items: ["Research", "Fixing", "Scripting", "Brand Strategy"]
    },
    {
        icon: "🎥",
        title: "Production",
        items: ["Directing", "Cinematography", "Line Producing", "Sound Recording", "Live Events"]
    },
    {
        icon: "💻",
        title: "Post-Production",
        items: ["Editing", "Graphics & VFX", "Animation", "Music Scoring", "Color Grading"]
    }
];

const initiatives = [
    {
        id: "01",
        title: "The Terrace Kilifi",
        desc: "An artist-led Community Art Space and Residency along the Kilifi Creek. We provided a space for artists to create, collaborate, and showcase their work in a serene environment.",
        link: "https://www.terracekilifi.com",
        linkText: "Visit The Terrace",
        image: "/uploads/terrace.jpg"
    },
    {
        id: "02",
        title: "The Kilifi Creek Festival",
        desc: "A Film and Arts festival across 7 venues along the Kilifi Creek. Celebrating African storytelling and culture through cinema, music, and art.",
        link: "https://www.kilificreekfestival.com",
        linkText: "Visit Festival",
        image: "/uploads/festival.jpg",
        hoverImage: "/uploads/festival1.jpg"
    },
    {
        id: "03",
        title: "Refugee Girls Training",
        desc: "A storytelling Workshop for teenage refugee girls. As partners of 'I'll Tell You My Story', we focus on giving them the tools to tell their own stories with dignity and power.",
        link: "https://www.illtellyoumystory.com",
        linkText: "Visit Initiative",
        image: "/uploads/mystory.jpg"
    },
    {
        id: "04",
        title: "Prison Film Clubs",
        desc: "A Pilot Project at the Nairobi West Prison in partnership with the Kenyan Prisons Services. Providing Creative and Technical Training for inmates to create pioneer 'Film Clubs'."
    }
];

export default function Collective() {
    return (
        <div className="collective-page">
            <SEO
                title="The Collective"
                description="AfroFilms International — a collective of storytellers. Our expertise in production, community initiatives, and creative partnerships driving African storytelling."
            />

            {/* ─── HERO ─── */}
            <section className="coll-hero">
                <div className="coll-hero-bg" style={{ backgroundImage: `url(${HERO_IMAGE})` }}></div>
                <div className="coll-hero-overlay"></div>
                <div className="container coll-hero-inner">
                    <span className="coll-label">Who We Are</span>
                    <h1 className="coll-hero-title">
                        The <span className="gold">Collective.</span>
                    </h1>
                    <p className="coll-hero-lead">
                        AfroFilms International is more than a production company; we are a collective of passionate individuals with a shared vision. Specializing in both independent and commissioned productions, our portfolio spans fiction, non-fiction, commercial, and corporate content.
                    </p>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="coll-services">
                <div className="container">
                    <div className="coll-section-head">
                        <span className="coll-label">Our Expertise</span>
                        <h2 className="coll-section-title">What We <span className="gold">Do.</span></h2>
                    </div>

                    <div className="coll-cards">
                        {services.map((svc, i) => (
                            <div key={i} className="coll-card" style={{ animationDelay: `${i * 0.12}s` }}>
                                <div className="coll-card-icon">{svc.icon}</div>
                                <h3 className="coll-card-title">{svc.title}</h3>
                                <ul className="coll-card-list">
                                    {svc.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── DIVIDER ─── */}
            <div className="coll-divider">
                <div className="container">
                    <div className="coll-divider-line"></div>
                </div>
            </div>

            {/* ─── COMMUNITY ─── */}
            <section className="coll-community">
                <div className="container">
                    <div className="coll-section-head">
                        <span className="coll-label">Giving Back</span>
                        <h2 className="coll-section-title">Community &amp; <span className="gold">Industry.</span></h2>
                        <p className="coll-section-desc">
                            Afrofilms engages in various community and industry projects including an Arts Space and Residency, a Film Festival and a refugee girls training program.
                        </p>
                    </div>

                    <div className="coll-timeline">
                        <div className="coll-timeline-line"></div>

                        {initiatives.map((item, index) => (
                            <div key={index} className={`coll-tl-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                                <div className="coll-tl-number">{item.id}</div>

                                <div className="coll-tl-content">
                                    <span className="coll-label">Initiative {item.id}</span>
                                    <h3 className="coll-tl-title">{item.title}</h3>
                                    <p className="coll-tl-desc">{item.desc}</p>
                                    {item.link && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="coll-tl-link">
                                            {item.linkText} <span className="arrow">→</span>
                                        </a>
                                    )}
                                </div>

                                <div className="coll-tl-img-wrap">
                                    {item.image ? (
                                        <>
                                            <div className="coll-tl-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                                            {item.hoverImage && (
                                                <div className="coll-tl-img coll-tl-img-hover" style={{ backgroundImage: `url(${item.hoverImage})` }}></div>
                                            )}
                                            <div className="coll-tl-img-overlay"></div>
                                        </>
                                    ) : (
                                        <div className="coll-tl-img-placeholder">
                                            <span>🎬</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="coll-cta">
                <div className="container coll-cta-inner">
                    <h3 className="coll-cta-title">Be Part of the Story.</h3>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="coll-cta-btn">Get Involved</button>
                </div>
            </section>

            <style>{`
                /* ══════════════════════════════
                   PAGE WRAPPER
                   ══════════════════════════════ */
                .collective-page {
                    background: #050505;
                    color: #fff;
                    min-height: 100vh;
                }

                .gold { color: var(--color-primary); }

                .coll-label {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.8rem;
                    display: block;
                    margin-bottom: 0.75rem;
                }

                /* ══════════════════════════════
                   HERO
                   ══════════════════════════════ */
                .coll-hero {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    padding: 8rem 0 6rem;
                }
                .coll-hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.2;
                    filter: blur(6px) grayscale(60%);
                    transform: scale(1.08);
                }
                .coll-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(5,5,5,0.5) 0%, #050505 100%);
                }
                .coll-hero-inner {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .coll-hero-title {
                    font-size: clamp(3.5rem, 7vw, 6rem);
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin-bottom: 1.5rem;
                }
                .coll-hero-lead {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    max-width: 650px;
                    margin: 0 auto;
                }

                /* ══════════════════════════════
                   SERVICES SECTION
                   ══════════════════════════════ */
                .coll-services {
                    padding: 6rem 0;
                    position: relative;
                }
                .coll-section-head {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .coll-section-title {
                    font-size: clamp(2.5rem, 4vw, 4rem);
                    font-family: var(--font-heading);
                    line-height: 1.1;
                    margin-bottom: 1rem;
                }
                .coll-section-desc {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.65);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .coll-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .coll-card {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px;
                    padding: 2.5rem;
                    transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
                    animation: fadeUp 0.6s ease both;
                }
                .coll-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--color-primary);
                    background: rgba(255,255,255,0.05);
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .coll-card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                .coll-card-title {
                    font-size: 1.4rem;
                    font-family: var(--font-heading);
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .coll-card-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .coll-card-list li {
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.75rem;
                    padding-left: 1.2rem;
                    position: relative;
                    font-size: 1rem;
                }
                .coll-card-list li::before {
                    content: '•';
                    color: var(--color-primary);
                    position: absolute;
                    left: 0;
                }

                /* ══════════════════════════════
                   DIVIDER
                   ══════════════════════════════ */
                .coll-divider {
                    padding: 0;
                }
                .coll-divider-line {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
                    opacity: 0.4;
                }

                /* ══════════════════════════════
                   COMMUNITY / TIMELINE
                   ══════════════════════════════ */
                .coll-community {
                    padding: 6rem 0 4rem;
                }
                .coll-timeline {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 12rem;
                }
                .coll-timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
                    transform: translateX(-50%);
                    z-index: 1;
                }

                .coll-tl-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }
                .coll-tl-item.reverse {
                    flex-direction: row-reverse;
                }
                .coll-tl-item.reverse .coll-tl-content {
                    text-align: right;
                }

                .coll-tl-number {
                    position: absolute;
                    top: -3rem;
                    font-size: 12rem;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    color: rgba(255,255,255,0.025);
                    z-index: -1;
                    line-height: 1;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: color 0.5s ease;
                    pointer-events: none;
                }
                .coll-tl-item:hover .coll-tl-number {
                    color: rgba(212,175,55,0.08);
                }

                .coll-tl-content {
                    width: 44%;
                    padding: 2.5rem;
                    background: rgba(5,5,5,0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 6px;
                    transition: transform 0.45s ease, border-color 0.45s ease;
                }
                .coll-tl-item:hover .coll-tl-content {
                    transform: translateY(-8px);
                    border-color: var(--color-primary);
                }

                .coll-tl-title {
                    font-size: 2rem;
                    line-height: 1.15;
                    margin-bottom: 1.25rem;
                    font-family: var(--font-heading);
                }
                .coll-tl-desc {
                    color: #aaa;
                    line-height: 1.7;
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                }
                .coll-tl-link {
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.85rem;
                    border-bottom: 1px solid rgba(255,255,255,0.25);
                    padding-bottom: 3px;
                    transition: all 0.3s;
                }
                .coll-tl-link:hover {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }

                .coll-tl-img-wrap {
                    width: 44%;
                    height: 380px;
                    position: relative;
                    border-radius: 6px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.08);
                }
                .coll-tl-img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.7s cubic-bezier(0.2,0.8,0.2,1);
                    filter: grayscale(20%);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .coll-tl-img-hover {
                    opacity: 0;
                    z-index: 1;
                    transition: opacity 0.5s ease, transform 0.7s cubic-bezier(0.2,0.8,0.2,1);
                }
                .coll-tl-item:hover .coll-tl-img {
                    transform: scale(1.08);
                    filter: grayscale(0%);
                }
                .coll-tl-item:hover .coll-tl-img-hover {
                    opacity: 1;
                }
                .coll-tl-img-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.3);
                    transition: background 0.5s;
                    z-index: 2;
                }
                .coll-tl-item:hover .coll-tl-img-overlay {
                    background: rgba(0,0,0,0);
                }
                .coll-tl-img-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.02);
                    font-size: 4rem;
                }

                /* ══════════════════════════════
                   CTA
                   ══════════════════════════════ */
                .coll-cta {
                    padding: 6rem 0 8rem;
                }
                .coll-cta-inner {
                    text-align: center;
                }
                .coll-cta-title {
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    font-family: var(--font-heading);
                    margin-bottom: 2rem;
                }
                .coll-cta-btn {
                    display: inline-block;
                    padding: 1rem 3rem;
                    background: var(--color-primary);
                    color: #000;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .coll-cta-btn:hover {
                    background: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212,175,55,0.3);
                }

                /* ══════════════════════════════
                   MOBILE
                   ══════════════════════════════ */
                @media (max-width: 900px) {
                    .coll-hero { min-height: 60vh; padding: 6rem 0 4rem; }
                    .coll-services, .coll-community { padding: 4rem 0; }

                    .coll-timeline { gap: 6rem; }
                    .coll-timeline-line {
                        left: 16px;
                        transform: none;
                    }
                    .coll-tl-item,
                    .coll-tl-item.reverse {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1.5rem;
                        padding-left: 2.5rem;
                    }
                    .coll-tl-content,
                    .coll-tl-item.reverse .coll-tl-content {
                        width: 100%;
                        text-align: left;
                        padding: 2rem;
                    }
                    .coll-tl-img-wrap {
                        width: 100%;
                        height: 250px;
                    }
                    .coll-tl-number {
                        left: 0.5rem;
                        top: -3rem;
                        font-size: 7rem;
                        transform: none;
                        opacity: 0.4;
                    }
                }
            `}</style>
        </div>
    );
}
