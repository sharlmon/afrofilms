import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

export default function Team() {
    // Team Data derived from image map names/IDs
    // Team Data extracted from content/page-15301-team.md
    const team = [
        { id: "15460", name: "Zippy Kimundu", role: "Producer / Director", image: imageMap["15460"] },
        { id: "15459", name: "Wanjiru Kimundu", role: "Head of Production", image: imageMap["15459"] },
        { id: "15458", name: "Betty Nabangala", role: "Residency Curator", image: imageMap["15458"] },
        { id: "15468", name: "Steve Ruiyi", role: "DOP / Technical Lead", image: imageMap["15468"] },
        { id: "15469", name: "Anthony Thuku", role: "Cinematographer", image: imageMap["15469"] },
        { id: "15470", name: "JP Gichengo", role: "Sound Recordist", image: imageMap["15470"] },
        { id: "15488", name: "Jennifer Gatero", role: "Writer", image: imageMap["15488"] },
        { id: "15489", name: "Franki Ashiruka", role: "Head of Post-Production", image: imageMap["15489"] },
        { id: "15491", name: "Willis Abuto", role: "Director of Photography", image: imageMap["15491"] },
        { id: "15484", name: "Dru Mungai", role: "Sound Recordist", image: imageMap["15484"] }
    ];

    return (
        <div className="team-page">
            <SEO title="Our Team" description="Meet the creative visionaries behind AfroFilms International." />
            <div className="container pt-24 pb-20">
                <div className="section-header center mb-16 text-center">
                    <h1 className="page-title text-5xl md:text-7xl font-heading mb-4 text-white">The Creative <span className="text-gold">Team</span></h1>
                    <p className="section-desc text-xl text-gray-400">The visionaries behind the lens.</p>
                </div>

                <div className="team-grid">
                    {team.map(member => (
                        <div key={member.id} className="team-card glass group">
                            <div className="member-image-wrapper">
                                <div className="member-image">
                                    {member.image ? (
                                        <img src={`/uploads/${member.image}`} alt={member.name} />
                                    ) : (
                                        <div className="placeholder-avatar"></div>
                                    )}
                                </div>
                            </div>
                            <div className="member-info mt-6">
                                <h3 className="text-2xl text-white font-medium mb-2">{member.name}</h3>
                                <span className="member-role text-gold tracking-widest text-sm uppercase font-bold">{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .team-page {
                    min-height: 100vh;
                    background: #000;
                    background-image: radial-gradient(circle at top right, #1a1a1a 0%, #000 40%);
                }
                
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 3rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .team-card {
                    padding: 3rem 2rem;
                    text-align: center;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    transition: all 0.4s ease;
                }
                
                .team-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.06);
                    border-color: var(--color-primary);
                }
                
                .member-image-wrapper {
                    position: relative;
                    width: 180px;
                    height: 180px;
                    margin: 0 auto;
                }
                
                .member-image {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid var(--color-primary);
                    padding: 4px; /* Space between border and image */
                    background: transparent;
                    transition: all 0.4s ease;
                }
                
                .member-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    filter: grayscale(100%);
                    transition: all 0.4s ease;
                }
                
                .team-card:hover .member-image img {
                    filter: grayscale(0%);
                }
                
                .member-role {
                    color: var(--color-primary);
                }
                
                .placeholder-avatar {
                    width: 100%;
                    height: 100%;
                    background: #333;
                }
            `}</style>
        </div>
    );
}
