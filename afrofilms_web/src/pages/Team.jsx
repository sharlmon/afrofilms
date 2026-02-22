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
                    <h1 className="page-title text-5xl md:text-7xl font-heading mb-4 text-white">TEAM</h1>
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
                                            <img src={`/uploads/${member.image}`} alt={member.name} loading="lazy" decoding="async" width="180" height="180" />
                                        ) : (
                                            <div className="placeholder-avatar"></div>
                                        )}
                                    </motion.div>
                                </div>
                                <div className="member-info">
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
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 2.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .team-card {
                    padding: 1rem;
                    text-align: left;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 8px;
                    cursor: pointer;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .member-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4 / 5;
                    margin: 0 auto;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #111;
                }
                
                .member-image {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                
                .member-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                    transition: all 0.6s ease;
                }
                
                .team-card:hover .member-image {
                    transform: scale(1.05);
                }
                
                .team-card:hover .member-image img {
                    filter: grayscale(0%);
                }
                
                .team-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: var(--color-primary);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                
                .member-info {
                    padding-top: 1rem;
                }
                
                .member-role {
                    color: var(--color-primary);
                    display: block;
                    margin-top: 0.5rem;
                }
                
                .placeholder-avatar {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, #111, #222);
                }
            `}</style>
        </div>
    );
}
