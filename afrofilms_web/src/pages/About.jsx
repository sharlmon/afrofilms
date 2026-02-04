export default function About() {
    return (
        <div className="container section-padding">
            <div className="about-layout">
                <div className="about-text">
                    <h1 className="text-gradient">About AfroFilms</h1>
                    <p className="lead">
                        We are a collective of storytellers, filmmakers, and visionaries dedicated to bringing African narratives to the global stage.
                    </p>
                    <div className="spacer"></div>
                    <p>
                        Established in 2008, AfroFilms International has been at the forefront of the cinematic renaissance in East Africa. From award-winning documentaries to compelling feature films, our mission is to capture the essence of the human experience through an authentic African lens.
                    </p>
                    <p>
                        Our work spans genres and borders, collaborating with international broadcasters, NGOs, and creative agencies to deliver high-quality production services.
                    </p>
                </div>
                <div className="about-image">
                    {/* Placeholder for team or office image */}
                    <div className="img-box glass">
                        <span>Creative Hub</span>
                    </div>
                </div>
            </div>

            <style>{`
                .about-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 4rem;
                }
                @media (min-width: 768px) {
                    .about-layout {
                        grid-template-columns: 1fr 1fr;
                        align-items: center;
                    }
                }
                .lead {
                    font-size: 1.5rem;
                    line-height: 1.4;
                    margin-bottom: 2rem;
                    color: var(--color-text-main);
                }
                .about-text p {
                    margin-bottom: 1.5rem;
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                }
                .spacer {
                    height: 2rem;
                }
                .img-box {
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%; /* Circle shape style */
                    border: 1px solid var(--color-border);
                }
             `}</style>
        </div>
    );
}
