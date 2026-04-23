import SEO from '../components/SEO';

export default function About() {
    return (
        <div className="about-page">
            <SEO title="About Us" description="Bold. Authentic. African. Afrofilms International is a women-led production company and creative collective based in Kenya." />

            {/* Background Image */}
            <div className="about-bg-container">
                <div className="about-bg-image"></div>
                <div className="about-bg-overlay"></div>
            </div>

            {/* Content overlay */}
            <div className="about-content-wrapper">
                <div className="about-content-inner">
                    <span className="about-subtitle">ABOUT US</span>
                    <h1 className="about-logline">
                        <span className="about-highlight">Bold.</span> Authentic. African.
                    </h1>

                    <div className="about-text-block">
                        <p>
                            Afrofilms International is a women-led production company and creative collective based in Kenya. The company produces high-quality, globally resonant content that ignites socio-political consciousness and action across continents.
                        </p>
                        <p>
                            Specializing in co-productions with local and international filmmakers, Afrofilms creates creatively driven commercial and commissioned work for organizations, corporations, and broadcasters. Across the continent, our team shapes every project from concept to screen, creating socially impactful films grounded in authenticity and meaningful representation.
                        </p>
                        <p>
                            Afrofilms also offers fixing services and full-service production support for international crews filming on the continent, providing high-end equipment and comprehensive logistical coordination.
                        </p>
                        <p>
                            Founded in 2013 by filmmaker Zippy Kimundu, Afrofilms was built through collaboration — strengthening the industry while supporting women and underrepresented communities through skills training and mentorship. The company nurtures creative community by cultivating spaces beyond the city where multidisciplinary artists can connect, experiment, and create.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .about-page {
                    position: relative;
                    background: #000;
                    overflow: hidden;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .about-bg-container {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .about-bg-image {
                    position: absolute;
                    inset: -20px;
                    background-image: url('/uploads/about1.jpg');
                    background-size: cover;
                    background-position: center;
                    filter: blur(3px);
                }
                .about-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.55);
                    z-index: 1;
                }
                .about-content-wrapper {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 8rem 1.5rem 4rem;
                    text-align: center;
                }
                .about-content-inner {
                    margin-top: 3rem;
                }
                .about-subtitle {
                    display: block;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-primary);
                }
                .about-logline {
                    font-size: clamp(2.8rem, 6vw, 5rem);
                    font-family: var(--font-heading);
                    margin-bottom: 3rem;
                    color: #fff;
                    text-transform: uppercase;
                    line-height: 1.1;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
                }
                .about-highlight {
                    color: var(--color-primary);
                }
                .about-text-block {
                    text-align: justify;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.9);
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    padding: 2.5rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                }
                .about-text-block p {
                    margin-bottom: 1.5rem;
                }
                .about-text-block p:last-child {
                    margin-bottom: 0;
                }

                @media (max-width: 768px) {
                    .about-logline {
                        font-size: 2.5rem;
                    }
                    .about-text-block {
                        padding: 1.5rem;
                        font-size: 1rem;
                    }
                    .about-content-wrapper {
                        padding: 6rem 1rem 3rem;
                    }
                }
            `}</style>
        </div>
    );
}
