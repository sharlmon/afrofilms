import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { team } from '../data/team';
import SEO from '../components/SEO';

export default function Team() {
    return (
        <div className="team-page">
            <SEO title="Our Team" description="Meet the creative visionaries behind AfroFilms International." />
            <div className="container pt-24 pb-20">
                <div className="section-header center mb-16 text-center">
                    <h1 className="page-title text-5xl md:text-7xl font-heading mb-4 text-white">The Creative <span className="text-gold">Team</span></h1>
                    <p className="section-desc text-xl text-gray-400">Click on a member to view their portfolio.</p>
                </div>

                <div className="team-grid">
                    {team.map(member => (
                        <Link to={`/team/${member.id}`} key={member.id}>
                            <motion.div
                                className="team-card glass group"
                                layoutId={`card-${member.id}`}
                                whileHover={{ y: -10 }}
                            >
                                <div className="member-image-wrapper">
                                    <motion.div className="member-image" layoutId={`image-${member.id}`}>
                                        {member.image ? (
                                            <img src={`/uploads/${member.image}`} alt={member.name} />
                                        ) : (
                                            <div className="placeholder-avatar"></div>
                                        )}
                                    </motion.div>
                                </div>
                                <div className="member-info mt-6">
                                    <motion.h3 className="text-2xl text-white font-medium mb-2" layoutId={`name-${member.id}`}>{member.name}</motion.h3>
                                    <motion.span className="member-role text-gold tracking-widest text-sm uppercase font-bold" layoutId={`role-${member.id}`}>{member.role}</motion.span>
                                </div>
                            </motion.div>
                        </Link>
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
                    cursor: pointer;
                    height: 100%;
                    transition: all 0.3s ease;
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
                    padding: 4px;
                    background: transparent;
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
                .team-card:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: var(--color-primary);
                }
                
                .member-role {
                    color: var(--color-primary);
                }
                
                .placeholder-avatar {
                    width: 100%;
                    height: 100%;
                    background: #333;
                    border-radius: 50%;
                }
            `}</style>
        </div>
    );
}
