import { useState } from 'react';
import SEO from '../components/SEO';

/* ══════════════════════════════════════════════
   DATA — Feature Films
   ══════════════════════════════════════════════ */
const featureFilms = [
    {
        title: "Widow Champion",
        image: "/uploads/champ.jpg",
        synopsis: "Thrown off her land by her in-laws, a resilient kenyan widow transforms into a fierce advocate for women's land rights in a highly patriarchal community.",
        trailer: "https://widowchampion.com/",
        director: "Zippy Kimundu",
        producers: "Heather Courtney, Zippy Kimundu",
        coProduction: "Kenya/US",
        year: "2025",
        slug: "widow-champion"
    },
    {
        title: "Our Land, Our Freedom",
        image: "/uploads/our-land.jpg",
        synopsis: "Two extraordinary Kenyan women — mother and daughter Mukami and Wanjugu Kimathi — share a mission to expose colonial atrocities and fight for land justice, uncovering buried histories of concentration camps and mass graves while building a grassroots movement.",
        trailer: "https://ourlandourfreedom.com/about/",
        director: "Meena Nanji, Zippy Kimundu",
        producers: "Meena Nanji, Zippy Kimundu, Eliane Fereirra",
        executiveProducer: "Mira Nair, Eliane Fereirra",
        coProduction: "Kenya/US/Portugal/Germany",
        year: "2023",
        slug: "our-land-our-freedom"
    }
];

/* ══════════════════════════════════════════════
   DATA — Short Films
   ══════════════════════════════════════════════ */
const shortFilms = [
    {
        title: "A Fork, A Spoon & A Knight",
        image: "/uploads/a-fork-a-spoon-a-knight.jpg",
        writerDirector: "Mira Nair, Zippy Kimundu",
        coProduction: "Tribeca Film Institute / Mont Blanc / Nelson Mandela Foundation / Maisha Film Lab",
        trailer: "",
        slug: "a-fork-a-spoon-a-knight"
    },
    {
        title: "Burnt Forest",
        image: "/uploads/burnt1.jpg",
        director: "Zippy Kimundu",
        coProduction: "Action Horisons / NYU Tisch",
        trailer: "https://vimeo.com/64427789",
        slug: "burnt-forest"
    },
    {
        title: "Mother's Song",
        image: "/uploads/mothers-song.jpg",
        coProduction: "NYU Tisch",
        trailer: "",
        slug: "mothers-song"
    },
    {
        title: "Mercy",
        image: "/uploads/mercy.jpg",
        writerDirector: "Mira Nair, Zippy Kimundu",
        coProduction: "Intrigue Productions",
        trailer: "",
        slug: "mercy"
    },
    {
        title: "In Shadows",
        image: "/uploads/voicesfromtheinside.jpg",
        director: "Zippy Kimundu",
        producer: "Wanjiru Kimundu",
        trailer: "",
        slug: ""
    }
];

/* ══════════════════════════════════════════════
   DATA — Commissioned Projects (grouped by series)
   ══════════════════════════════════════════════ */
const commissionedSeries = [
    {
        id: 1,
        title: "Champions of Change Series",
        client: "USAID / US State Department",
        films: [
            { title: "Kilifi Conservation Women", image: "/uploads/kilifi-conservation-women.jpg", slug: "kilifi-conservation-women" },
            { title: "Laurencia – Bird Expert", image: "/uploads/laurencia-bird-expert.jpg", slug: "laurencia-bird-expert" },
            { title: "Tabitha – Ranger", image: "/uploads/tabitha-ranger.jpg", slug: "tabitha-ranger" },
            { title: "Rosette", image: "/uploads/tabitha-ranger.jpg", slug: "rosette" }
        ]
    },
    {
        id: 2,
        title: "Culture Grows Series",
        client: "British Council East Africa",
        subsections: [
            {
                label: "1 Minute",
                films: [
                    { title: "Rooted", link: "https://vimeo.com/408872905" },
                    { title: "Bengatronics", link: "https://vimeo.com/408941986" },
                    { title: "Too Early for Birds", link: "https://vimeo.com/408923696" },
                    { title: "Peperuka", link: "https://vimeo.com/408915858" },
                    { title: "Historia", link: "https://vimeo.com/408869094" },
                    { title: "Heva", link: "https://vimeo.com/408975981" }
                ]
            },
            {
                label: "4-5 Minute",
                films: [
                    { title: "Rooted", link: "https://vimeo.com/377524351" },
                    { title: "Bengatronics", link: "https://vimeo.com/408945524" },
                    { title: "Too Early for Birds", link: "https://vimeo.com/408927451" },
                    { title: "Peperuka", link: "https://vimeo.com/408900884" },
                    { title: "Historia", link: "https://vimeo.com/408819364" },
                    { title: "Heva", link: "https://vimeo.com/408960575" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Progressive Africa Series",
        client: "Standard Chartered Bank Global",
        films: [
            { title: "Royal Garments", image: "/uploads/royal-garments.jpg", link: "https://vimeo.com/417107037", slug: "royal-garments" },
            { title: "Shell", image: "/uploads/shell.jpg", link: "https://vimeo.com/417141063", slug: "shell" },
            { title: "Mirema School", image: "/uploads/mirema-school.jpg", link: "https://vimeo.com/417122881", slug: "mirema-school" },
            { title: "Grange Water", image: "/uploads/grange-water.jpg", link: "https://vimeo.com/417108370", slug: "grange-water" },
            { title: "Karibu Travels", image: "/uploads/karibu-travels.jpg", link: "https://vimeo.com/417136588", slug: "karibu-travels" }
        ]
    },
    {
        id: 4,
        title: "Lighting Africa Series",
        client: "Standard Chartered Bank Global",
        films: [
            { title: "Tope, Mall for Africa", image: "/uploads/tope-mall-for-africa.jpg", link: "https://vimeo.com/219052283", slug: "tope-mall-for-africa" },
            { title: "Point Blank", image: "/uploads/point-blank.jpg", link: "https://vimeo.com/219051125", slug: "point-blank" },
            { title: "Furaha, CocoLili", image: "/uploads/furaha-cocolili.jpg", link: "https://vimeo.com/219050496", slug: "furaha-cocolili" },
            { title: "Sheila, M:Lab", image: "/uploads/sheila-mlab.jpg", link: "https://vimeo.com/219051883", slug: "sheila-mlab" }
        ]
    },
    {
        id: 5,
        title: "Business Banking Series",
        client: "Standard Chartered Bank Kenya",
        films: [
            { title: "Tope, Mall for Africa", link: "https://vimeo.com/219052283" },
            { title: "Point Blank", link: "https://vimeo.com/219051125" },
            { title: "Furaha, CocoLili", link: "https://vimeo.com/219050496" },
            { title: "Sheila, M:Lab", link: "https://vimeo.com/219051883" }
        ]
    },
    {
        id: 6,
        title: "Educare TVC",
        client: "",
        films: [
            { title: "Educare TVC", image: "/uploads/educare-tvc.jpg", link: "https://vimeo.com/416069550", slug: "educare-tvc" }
        ]
    },
    {
        id: 7,
        title: "Tusk Awards Series 2022",
        client: "",
        films: [
            { title: "Achilles", image: "/uploads/achilles.jpg", link: "https://www.youtube.com/watch?v=xOfKNyjvvQo", slug: "achilles" },
            { title: "Dismas", image: "/uploads/dismas.jpg", link: "https://www.youtube.com/watch?v=vWQ2TXiEu_0", slug: "dismas" }
        ]
    },
    {
        id: 8,
        title: "BBC Africa – 'Madams' Exposing Kenya's Child Sex Trade",
        client: "Co-Director: Zippy Kimundu",
        films: [
            { title: "Madams", link: "https://www.youtube.com/watch?v=JHINoFq8GvE" }
        ]
    }
];

const TABS = [
    { key: 'features', label: 'Feature Films' },
    { key: 'shorts', label: 'Short Films' },
    { key: 'commissioned', label: 'Commission Projects' }
];

export default function Works() {
    const [activeTab, setActiveTab] = useState('features');
    const [expandedSeries, setExpandedSeries] = useState(null);

    const toggleSeries = (id) => {
        setExpandedSeries(prev => prev === id ? null : id);
    };

    return (
        <div className="works-page">
            <SEO title="Portfolio" description="Afrofilms is a full-service film agency shaping powerful fiction and non-fiction stories from idea to screen." />

            {/* Background */}
            <div className="works-bg-container">
                <div className="works-bg-image"></div>
                <div className="works-bg-overlay"></div>
            </div>

            <div className="works-content-wrapper">
                {/* ── HERO ── */}
                <section className="portfolio-hero">
                    <div className="portfolio-hero-inner">
                        <span className="portfolio-label">Portfolio</span>
                        <h1 className="portfolio-hero-title">Our <span className="gold">Work.</span></h1>
                        <p className="portfolio-hero-desc">
                            Afrofilms is a full-service film agency shaping powerful fiction and non-fiction stories from idea to screen. From concept and scripting to production and post, we deliver independent and commissioned work with precision, creativity, and impact.
                        </p>
                        <a href="https://vimeo.com/236536113" target="_blank" rel="noopener noreferrer" className="portfolio-reel-btn">
                            <span className="play-icon">▶</span> View Reel
                        </a>
                    </div>
                </section>

                {/* ── CATEGORY TABS ── */}
                <div className="portfolio-tabs-bar">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            className={`ptab ${activeTab === tab.key ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ═══ FEATURE FILMS ═══ */}
                {activeTab === 'features' && (
                    <section className="portfolio-section">
                        <div className="container">
                            {featureFilms.map((film, i) => (
                                <div key={i} className="feature-card">
                                    <div className="feature-card-img">
                                        <img src={film.image} alt={film.title} loading="lazy" />
                                    </div>
                                    <div className="feature-card-body">
                                        <h2 className="feature-title">{film.title}</h2>
                                        <p className="feature-synopsis">{film.synopsis}</p>

                                        <div className="feature-details">
                                            <div className="detail-row">
                                                <span className="detail-label">{film.writerDirector ? 'Writer/Director' : 'Director'}</span>
                                                <span className="detail-value">{film.writerDirector || film.director}</span>
                                            </div>
                                            <div className="detail-row">
                                                <span className="detail-label">Producers</span>
                                                <span className="detail-value">{film.producers}</span>
                                            </div>
                                            {film.executiveProducer && (
                                                <div className="detail-row">
                                                    <span className="detail-label">Executive Producers</span>
                                                    <span className="detail-value">{film.executiveProducer}</span>
                                                </div>
                                            )}
                                            <div className="detail-row">
                                                <span className="detail-label">Co-Production</span>
                                                <span className="detail-value">{film.coProduction}</span>
                                            </div>
                                            <div className="detail-row">
                                                <span className="detail-label">Year</span>
                                                <span className="detail-value">{film.year}</span>
                                            </div>
                                        </div>

                                        {film.trailer && (
                                            <a href={film.trailer} target="_blank" rel="noopener noreferrer" className="trailer-btn">
                                                ▶ Watch Trailer
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ═══ SHORT FILMS ═══ */}
                {activeTab === 'shorts' && (
                    <section className="portfolio-section">
                        <div className="container">
                            <div className="shorts-grid">
                                {shortFilms.map((film, i) => (
                                    <div key={i} className="short-card">
                                        <div className="short-card-img">
                                            <img src={film.image} alt={film.title} loading="lazy" />
                                        </div>
                                        <div className="short-card-body">
                                            <h3 className="short-title">{film.title}</h3>
                                            {(film.writerDirector || film.director) && (
                                                <p className="short-meta">
                                                    <strong>{film.writerDirector ? 'Writer/Director' : 'Director'}:</strong> {film.writerDirector || film.director}
                                                </p>
                                            )}
                                            {film.producer && (
                                                <p className="short-meta"><strong>Producer:</strong> {film.producer}</p>
                                            )}
                                            <p className="short-meta"><strong>Co-Prod:</strong> {film.coProduction}</p>
                                            {film.trailer && (
                                                <a href={film.trailer} target="_blank" rel="noopener noreferrer" className="short-trailer-link">
                                                    ▶ Watch Trailer
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ═══ COMMISSIONED PROJECTS ═══ */}
                {activeTab === 'commissioned' && (
                    <section className="portfolio-section">
                        <div className="container">
                            <div className="commissioned-list">
                                {commissionedSeries.map((series) => (
                                    <div key={series.id} className={`cs-block ${expandedSeries === series.id ? 'expanded' : ''}`}>
                                        <button className="cs-header" onClick={() => toggleSeries(series.id)}>
                                            <div>
                                                <span className="cs-number">{String(series.id).padStart(2, '0')}</span>
                                                <h3 className="cs-title">{series.title}</h3>
                                                {series.client && <span className="cs-client">{series.client}</span>}
                                            </div>
                                            <span className="cs-toggle">{expandedSeries === series.id ? '−' : '+'}</span>
                                        </button>

                                        {expandedSeries === series.id && (
                                            <div className="cs-body">
                                                {/* Series with subsections (Culture Grows) */}
                                                {series.subsections ? (
                                                    series.subsections.map((sub, si) => (
                                                        <div key={si} className="cs-subsection">
                                                            <h4 className="cs-sub-label">{sub.label}</h4>
                                                            <div className="cs-links-grid">
                                                                {sub.films.map((f, fi) => (
                                                                    <a key={fi} href={f.link} target="_blank" rel="noopener noreferrer" className="cs-link-card">
                                                                        <span className="cs-link-title">{f.title}</span>
                                                                        <span className="cs-link-arrow">▶</span>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    /* Series with film cards */
                                                    <div className="cs-films-grid">
                                                        {series.films.map((f, fi) => (
                                                            <div key={fi} className="cs-film-card">
                                                                {f.image && (
                                                                    <div className="cs-film-img">
                                                                        <img src={f.image} alt={f.title} loading="lazy" />
                                                                    </div>
                                                                )}
                                                                <div className="cs-film-info">
                                                                    <span className="cs-film-title">{f.title}</span>
                                                                    {(f.link || f.slug) && (
                                                                        <a
                                                                            href={f.link || `/${f.slug}`}
                                                                            target={f.link ? "_blank" : "_self"}
                                                                            rel={f.link ? "noopener noreferrer" : undefined}
                                                                            className="cs-watch-link"
                                                                        >
                                                                            ▶ Watch
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <style>{`
                /* ══════════════ PAGE ══════════════ */
                .works-page {
                    background: #050505;
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                    color: #fff;
                }
                .works-bg-container { position: absolute; inset: 0; z-index: 0; }
                .works-bg-image {
                    position: absolute; inset: -20px;
                    background-image: url('/uploads/portfolioA.jpg');
                    background-size: cover; background-position: center;
                    filter: blur(3px);
                }
                .works-bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.55); z-index: 1; }
                .works-content-wrapper { position: relative; z-index: 10; }

                .gold { color: var(--color-primary); }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

                /* ══════════════ HERO ══════════════ */
                .portfolio-hero {
                    padding: 10rem 1.5rem 5rem;
                    text-align: center;
                    max-width: 850px;
                    margin: 0 auto;
                }
                .portfolio-label {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }
                .portfolio-hero-title {
                    font-size: clamp(3rem, 7vw, 5.5rem);
                    font-family: var(--font-heading);
                    line-height: 1;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                }
                .portfolio-hero-desc {
                    font-size: 1.15rem;
                    color: rgba(255,255,255,0.8);
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                }
                .portfolio-reel-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 2.5rem;
                    background: var(--color-primary);
                    color: #000;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .portfolio-reel-btn:hover {
                    background: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212,175,55,0.35);
                }
                .play-icon { font-size: 0.75rem; }

                /* ══════════════ TABS ══════════════ */
                .portfolio-tabs-bar {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                    padding: 0 1.5rem 3rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    margin-bottom: 3rem;
                }
                .ptab {
                    background: transparent;
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    padding: 0.8rem 2rem;
                    border-radius: 100px;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.12em;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-weight: 500;
                }
                .ptab:hover { border-color: var(--color-primary); color: var(--color-primary); }
                .ptab.active {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: #000;
                    font-weight: 700;
                }

                .portfolio-section { padding-bottom: 5rem; }

                /* ══════════════ FEATURE FILMS ══════════════ */
                .feature-card {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 3rem;
                    margin-bottom: 5rem;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: border-color 0.3s;
                }
                .feature-card:hover { border-color: var(--color-primary); }
                .feature-card-img { position: relative; overflow: hidden; min-height: 350px; }
                .feature-card-img img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .feature-card:hover .feature-card-img img { transform: scale(1.05); }
                .feature-card-body { padding: 2.5rem 2.5rem 2.5rem 0; display: flex; flex-direction: column; justify-content: center; }
                .feature-title {
                    font-size: 2.2rem;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    color: #fff;
                }
                .feature-synopsis {
                    color: rgba(255,255,255,0.75);
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                }
                .feature-details {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin-bottom: 2rem;
                }
                .detail-row { display: flex; gap: 0.75rem; font-size: 0.9rem; }
                .detail-label {
                    text-transform: uppercase;
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 0.75rem;
                    letter-spacing: 0.05em;
                    min-width: 140px;
                    flex-shrink: 0;
                }
                .detail-value { color: rgba(255,255,255,0.85); }
                .trailer-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 2rem;
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    width: fit-content;
                }
                .trailer-btn:hover {
                    background: var(--color-primary);
                    color: #000;
                }

                @media (max-width: 768px) {
                    .feature-card { grid-template-columns: 1fr; }
                    .feature-card-img { min-height: 250px; }
                    .feature-card-body { padding: 1.5rem; }
                    .feature-title { font-size: 1.6rem; }
                    .detail-row { flex-direction: column; gap: 0.2rem; }
                    .detail-label { min-width: auto; }
                }

                /* ══════════════ SHORT FILMS ══════════════ */
                .shorts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .short-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.35s ease;
                }
                .short-card:hover {
                    border-color: var(--color-primary);
                    transform: translateY(-5px);
                }
                .short-card-img { aspect-ratio: 16/9; overflow: hidden; }
                .short-card-img img {
                    width: 100%; height: 100%; object-fit: contain;
                    background: #111;
                    transition: transform 0.5s ease;
                }
                .short-card:hover .short-card-img img {
                    transform: scale(1.05); filter: saturate(1.1);
                }
                .short-card-body { padding: 1.25rem; }
                .short-title {
                    font-size: 1.2rem;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                    color: #fff;
                }
                .short-meta {
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 0.4rem;
                    line-height: 1.5;
                }
                .short-meta strong { color: var(--color-primary); font-weight: 600; }
                .short-trailer-link {
                    display: inline-block;
                    margin-top: 0.75rem;
                    color: var(--color-primary);
                    text-decoration: none;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.3s;
                }
                .short-trailer-link:hover { border-bottom-color: var(--color-primary); }

                /* ══════════════ COMMISSIONED ══════════════ */
                .commissioned-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .cs-block {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: border-color 0.3s;
                }
                .cs-block.expanded { border-color: var(--color-primary); }
                .cs-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 2rem;
                    background: transparent;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    text-align: left;
                    transition: background 0.3s;
                }
                .cs-header:hover { background: rgba(255,255,255,0.03); }
                .cs-number {
                    display: inline-block;
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: rgba(255,255,255,0.15);
                    margin-right: 1rem;
                    vertical-align: middle;
                }
                .cs-title {
                    display: inline;
                    font-size: 1.2rem;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                }
                .cs-client {
                    display: block;
                    font-size: 0.8rem;
                    color: var(--color-primary);
                    margin-top: 0.3rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                .cs-toggle {
                    font-size: 1.8rem;
                    color: var(--color-primary);
                    font-weight: 300;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .cs-body { padding: 0 2rem 2rem; }

                /* Subsection labels (Culture Grows) */
                .cs-subsection { margin-bottom: 1.5rem; }
                .cs-sub-label {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-primary);
                    margin-bottom: 0.75rem;
                    display: block;
                    font-weight: 600;
                }
                .cs-links-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 0.5rem;
                }
                .cs-link-card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 6px;
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.3s;
                    font-size: 0.9rem;
                }
                .cs-link-card:hover {
                    background: rgba(212,175,55,0.1);
                    border-color: var(--color-primary);
                }
                .cs-link-title { font-weight: 500; }
                .cs-link-arrow { color: var(--color-primary); font-size: 0.7rem; }

                /* Film cards grid */
                .cs-films-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 1rem;
                }
                .cs-film-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 6px;
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .cs-film-card:hover {
                    border-color: var(--color-primary);
                    transform: translateY(-3px);
                }
                .cs-film-img { aspect-ratio: 4/3; overflow: hidden; }
                .cs-film-img img {
                    width: 100%; height: 100%; object-fit: cover;
                    transition: transform 0.5s;
                }
                .cs-film-card:hover .cs-film-img img { transform: scale(1.05); }
                .cs-film-info { padding: 0.75rem; }
                .cs-film-title {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 0.4rem;
                    color: #fff;
                }
                .cs-watch-link {
                    font-size: 0.7rem;
                    color: var(--color-primary);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 600;
                    transition: color 0.3s;
                }
                .cs-watch-link:hover { color: #fff; }

                @media (max-width: 768px) {
                    .portfolio-hero { padding: 7rem 1rem 3rem; }
                    .portfolio-hero-title { font-size: 2.5rem; }
                    .portfolio-tabs-bar { gap: 0.4rem; padding: 0 1rem 2rem; }
                    .ptab { padding: 0.6rem 1.2rem; font-size: 0.7rem; }
                    .shorts-grid { grid-template-columns: 1fr; }
                    .cs-header { padding: 1rem 1.25rem; }
                    .cs-title { font-size: 1rem; }
                    .cs-body { padding: 0 1.25rem 1.5rem; }
                    .cs-films-grid { grid-template-columns: repeat(2, 1fr); }
                    .cs-links-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
}
