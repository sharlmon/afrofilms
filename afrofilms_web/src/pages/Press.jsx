import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Press() {
    const featuredPress = [
        {
            date: "17 June 2024",
            publication: "Cineuropa",
            type: "Review",
            title: "Review: Our Land, Our Freedom",
            link: "https://cineuropa.org/en/newsdetail/463666/",
            desc: "A review of the documentary following its premiere at Sheffield DocFest."
        },
        {
            date: "14 June 2024",
            publication: "The Continent",
            type: "Review",
            title: "A Kenyan story told by Kenyans",
            link: "https://www.thecontinent.org",
            desc: "Featured review in The Continent newspaper."
        },
        {
            date: "13 June 2024",
            publication: "Film Carnage",
            type: "Review",
            title: "Review: Our Land, Our Freedom",
            link: "https://filmcarnage.com/2024/06/13/review-our-land-our-freedom/",
            desc: "An in-depth look at the documentary's portrayal of the Mau Mau struggle."
        },
        {
            date: "13 June 2024",
            publication: "Camden New Journal",
            type: "Review",
            title: "Film Review",
            link: "https://www.camdennewjournal.co.uk",
            desc: "Coverage of the UK premiere."
        },
        {
            date: "13 June 2024",
            publication: "Westminster Extra",
            type: "Review",
            title: "Exposing Colonial Atrocities",
            link: "https://westminsterextra.co.uk",
            desc: "Review discussing the film's historical impact."
        },
        {
            date: "13 June 2024",
            publication: "Events London",
            type: "Review",
            title: "Must-See Documentary",
            link: "https://eventslondon.co.uk",
            desc: "Highlighting the film as a key event in London."
        },
        {
            date: "9 June 2024",
            publication: "BBC Sheffield",
            type: "Interview",
            title: "Interview with Meena and Zippy",
            link: "https://www.bbc.co.uk/sounds/play/live:bbc_radio_sheffield",
            desc: "Live interview with the directors discussing the film's journey."
        },
        {
            date: "31 May 2024",
            publication: "Eastern Eye",
            type: "News Story",
            title: "Film Premiere Announcement",
            link: "https://www.easterneye.biz",
            desc: "News coverage announcing the film's UK premiere."
        },
        {
            date: "17 June 2024",
            publication: "Colourful Radio",
            type: "Interview",
            title: "Kenyan Society Interview",
            link: "https://www.colourfulradio.com",
            desc: "Interview with directors Meena Nanji and Zippy Kimundu."
        }
    ];

    const archivePress = [
        {
            year: "2020",
            publication: "Good Pitch",
            title: "Good Pitch Kenya 2020 Selected Projects",
            link: "https://goodpitch.org/events/gp2020ke?fbclid=IwAR0PDfjo-Xp3_xqHSCgDRNyDdy5C3R5RQVzaFdkjIPW9KQyId4clf5ybVfk",
            desc: "Selection of 'Widow Champion' and 'Our Land, Our Freedom' for the prestigious Good Pitch impact documentary forum."
        },
        {
            year: "2019",
            publication: "Africa in Dialogue",
            title: "Filmmaking as a Healing Mechanism: Dialogue with Zippy Kimundu",
            link: "https://africaindialogue.com/2019/09/10/filmmaking-as-a-healing-and-problem-solving-mechanism-a-dialogue-with-zippy-kimundu/",
            desc: "In-depth conversation about storytelling and impact."
        },
        {
            year: "2018",
            publication: "Sheffield DocFest",
            title: "MeetMarket Selected Projects",
            link: "https://sheffdocfest.com/articles/572-selected-meetmarket-and-alternate-realities-market-projects-2018",
            desc: "Selection of 'Widow Champion' for the specialized marketplace."
        },
        {
            year: "2016",
            publication: "Variety",
            title: "Durban FilmMart Announces Pic Prizes",
            link: "https://variety.com/2016/film/festivals/durban-film-mart-announces-pic-prizes-1201799908/",
            desc: "Coverage of awards for 'Testament' (early title for 'Our Land, Our Freedom') at DFM."
        },
        {
            year: "Archive",
            publication: "Documentary.org",
            title: "Testament (Working Title) Project",
            link: "https://www.documentary.org/project/testament-working-title",
            desc: "Feature on 'Testament' (early title for 'Our Land, Our Freedom') project development."
        },
        {
            year: "Archive",
            publication: "Durban FilmMart",
            title: "Press Office Article",
            link: "http://www.durbanfilmmart.co.za/press-office/article?news=202",
            desc: "Official press release regarding 'Testament' award at Durban FilmMart."
        }
    ];

    return (
        <div className="press-page">
            <SEO title="Press & Reviews" description="Media coverage, reviews, and interviews featuring Afrofilms International projects." />

            <div className="container relative z-10 pt-32 pb-20">
                <header className="page-header animate-fade-in text-center mb-20">
                    <span className="section-subtitle">Media Coverage</span>
                    <h1 className="page-title">Press & <span className="text-gold">Reviews</span></h1>
                </header>

                {/* Featured Section */}
                <section className="mb-24">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredPress.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="press-card group"
                            >
                                <div className="press-card-content">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="press-date">{item.date}</span>
                                        <span className="press-type">{item.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading mb-2 group-hover:text-gold transition-colors">{item.publication}</h3>
                                    <h4 className="text-white/80 font-medium mb-4">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">{item.desc}</p>

                                    <div className="mt-auto">
                                        <span className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-gold group-hover:text-gold transition-all">Read Article</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Archive Section */}
                <section>
                    <div className="section-header mb-12 border-b border-white/10 pb-4">
                        <h2 className="text-3xl font-heading text-white">Archive & <span className="text-gold">Industry News</span></h2>
                    </div>

                    <div className="space-y-4">
                        {archivePress.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="archive-item group"
                            >
                                <div className="archive-year">{item.year}</div>
                                <div className="archive-content">
                                    <h3 className="text-xl font-heading text-white group-hover:text-gold transition-colors">{item.publication}</h3>
                                    <p className="text-gray-400">{item.title}</p>
                                </div>
                                <div className="archive-arrow">→</div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                .press-page {
                    min-height: 100vh;
                    background: #050505;
                    color: #fff;
                }
                .page-title {
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-family: var(--font-heading);
                    line-height: 1;
                    text-transform: uppercase;
                }
                .section-subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                /* Cards */
                .press-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 2rem;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .press-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    transform: translateY(-5px);
                    border-color: var(--color-primary);
                }
                
                .press-date {
                    font-size: 0.8rem;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .press-type {
                    font-size: 0.7rem;
                    background: rgba(255,255,255,0.1);
                    padding: 2px 8px;
                    border-radius: 100px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                /* Archive List */
                .archive-item {
                    display: flex;
                    align-items: center;
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.02);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                }
                .archive-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                    padding-left: 2rem;
                }
                .archive-year {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: rgba(255,255,255,0.2);
                    width: 100px;
                    flex-shrink: 0;
                }
                .archive-content {
                    flex-grow: 1;
                }
                .archive-arrow {
                    color: var(--color-primary);
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                }
                .archive-item:hover .archive-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
                    .page-title {
                        font-size: clamp(2.5rem, 8vw, 4rem);
                    }
                    .section-header h2 {
                        font-size: 1.5rem;
                    }
                    .press-card {
                        padding: 1.5rem;
                    }
                    .archive-item {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                        padding: 1rem;
                    }
                    .archive-year {
                        width: auto;
                        font-size: 1rem;
                    }
                    .archive-arrow {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
