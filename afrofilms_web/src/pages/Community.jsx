import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TRAINING_IMAGE = "/uploads/2021/05/24-05-2021-at-16.57.32Training-Arts-Residence.jpg";

export default function Community() {
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
            desc: "A Pilot Project at the Nairobi West Prison in partnership with the Kenyan Prisons Services. Providing Creative and Technical Training for inmates to create pioneer ‘Film Clubs’.",
            image: "/uploads/prison.jpg"
        }
    ];

    return (
        <div className="training-page">
            <SEO title="Community & Industrial Building" description="Giving back through film. Our initiatives include empowering refugee girls and prison film clubs." />
            <div className="page-bg" style={{ backgroundImage: `url(${TRAINING_IMAGE})` }}></div>
            <div className="page-overlay"></div>

            <div className="content-container relative z-10 pt-32 pb-32">
                <header className="header text-center mb-32 animate-fade-in relative pt-20">
                    <h1 className="text-6xl md:text-8xl font-heading text-white mb-6 leading-tight relative z-10">
                        Community & <br />
                        <span className="text-gold">Industrial Building</span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-heading text-stroke mb-12 relative z-10 opacity-70">
                        Cinema for Change.
                    </h2>
                    <div className="glass-desc p-8 max-w-2xl mx-auto relative z-10 border-b-4 border-gold">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Afrofilms engages in various community and industry projects including an Arts Space and Residency, a Film Festival and a refugee girls training program.
                        </p>
                    </div>
                </header>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {initiatives.map((item, index) => (
                        <div key={index} className="timeline-item group">
                            <div className="timeline-number">{item.id}</div>

                            <div className="timeline-content">
                                <span className="subtitle">Initiative {item.id}</span>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">{item.desc}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                                        {item.linkText} <span className="arrow">→</span>
                                    </a>
                                )}
                            </div>

                            <div className="timeline-image-wrapper">
                                <div className="timeline-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                {item.hoverImage && (
                                    <div className="timeline-image hover-image" style={{ backgroundImage: `url(${item.hoverImage})` }}></div>
                                )}
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta-section">
                    <h3 className="cta-text">Be Part of the Story.</h3>
                    <Link to="/contact" className="btn btn-primary">Get Involved</Link>
                </div>
            </div>

            <style>{`
                .training-page {
                    min-height: 100vh;
                    position: relative;
                    background: #050505;
                    overflow-x: hidden;
                    color: #fff;
                }
                .page-bg {
                    position: fixed;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.15;
                    filter: blur(10px) grayscale(100%);
                    transform: scale(1.1);
                    z-index: 0;
                }
                .page-overlay {
                    position: fixed;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, #050505 100%);
                    z-index: 0;
                }
                .content-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-left: 2rem;
                    padding-right: 2rem;
                }

                .text-stroke {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                    color: transparent;
                    font-weight: 700;
                }
                .glass-desc {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border-radius: 1rem;
                }

                .timeline-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 15rem; /* Large vertical gap */
                }
                
                /* The Central Gold Line */
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
                    transform: translateX(-50%);
                    z-index: 1;
                }

                .timeline-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }
                
                /* Large Number Behind */
                .timeline-number {
                    position: absolute;
                    top: -4rem;
                    font-size: 15rem;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    color: rgba(255,255,255,0.03);
                    z-index: -1;
                    line-height: 1;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: color 0.5s ease;
                }
                .timeline-item:hover .timeline-number {
                    color: rgba(212, 175, 55, 0.1);
                }

                .timeline-content {
                    width: 45%;
                    padding: 3rem;
                    background: rgba(5,5,5,0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 4px;
                    position: relative;
                    transition: transform 0.5s ease;
                }
                .timeline-item:hover .timeline-content {
                    transform: translateY(-10px);
                    border-color: var(--color-primary);
                }

                .timeline-image-wrapper {
                    width: 45%;
                    height: 400px;
                    position: relative;
                    border-radius: 4px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .timeline-image {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                    filter: grayscale(20%);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .hover-image {
                    opacity: 0;
                    z-index: 1;
                    transition: opacity 0.5s ease, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                .timeline-item:hover .timeline-image {
                    transform: scale(1.1);
                    filter: grayscale(0%);
                }
                .timeline-item:hover .hover-image {
                    opacity: 1;
                }
                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.3);
                    transition: background 0.5s;
                }
                .timeline-item:hover .image-overlay {
                    background: rgba(0,0,0,0);
                }

                /* Zig-Zag Logic */
                .timeline-item:nth-child(even) {
                    flex-direction: row-reverse;
                }
                .timeline-item:nth-child(even) .timeline-content {
                    text-align: right;
                    align-items: flex-end;
                }

                /* Typography */
                .subtitle {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    display: block;
                }
                .title {
                    font-size: 2.5rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                }
                .desc {
                    color: #aaa;
                    line-height: 1.7;
                    font-size: 1.05rem;
                    margin-bottom: 2rem;
                }
                .btn-link {
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    border-bottom: 1px solid rgba(255,255,255,0.3);
                    padding-bottom: 4px;
                    transition: all 0.3s;
                }
                .btn-link:hover {
                    color: var(--color-primary);
                    border-bottom-color: var(--color-primary);
                }

                .cta-section {
                    text-align: center;
                    margin-top: 10rem;
                }
                .cta-text {
                    font-size: 3rem;
                    font-family: var(--font-heading);
                    margin-bottom: 2rem;
                }

                /* Mobile */
                @media (max-width: 900px) {
                    .timeline-line {
                        left: 20px;
                        transform: none;
                    }
                    .timeline-item, .timeline-item:nth-child(even) {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2rem;
                        padding-left: 3rem; /* Make space for line */
                    }
                    .timeline-content, .timeline-image-wrapper {
                        width: 100%;
                    }
                    .timeline-content, .timeline-item:nth-child(even) .timeline-content {
                        text-align: left;
                        padding: 2rem;
                    }
                    .timeline-number {
                        left: 1rem;
                        top: -5rem;
                        font-size: 8rem;
                        transform: none;
                        opacity: 0.3;
                    }
                }
            `}</style>
        </div>
    );
}
