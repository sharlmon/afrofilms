import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { team } from '../data/team';
import SEO from '../components/SEO';

export default function TeamMember() {
    const { id } = useParams();
    const navigate = useNavigate();
    const member = team.find(m => m.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Member Not Found</h2>
                    <Link to="/team" className="text-gold hover:underline">Return to Team</Link>
                </div>
            </div>
        );
    }

    // Split name for visual effect
    const nameParts = member.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <div className="team-member-page">
            <SEO title={`${member.name} - AfroFilms Team`} description={`Learn more about ${member.name}, ${member.role} at AfroFilms International.`} />

            <div className="container mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <button onClick={() => navigate(-1)} className="back-link group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="uppercase tracking-widest text-sm font-bold">Back to Team</span>
                    </button>
                </motion.div>

                <div className="content-grid">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="image-column"
                    >
                        <div className="image-wrapper glass-panel">
                            {member.image ? (
                                <img src={`/uploads/${member.image}`} alt={member.name} className="w-full h-auto" />
                            ) : (
                                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                                    <span className="text-6xl text-gray-700 font-heading">{member.name.charAt(0)}</span>
                                </div>
                            )}
                            <div className="overlay"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="info-column"
                    >
                        <h1 className="name-heading mb-2">
                            <span className="block text-white font-medium">{firstName}</span>
                            <span className="block text-gold font-light">{lastName}</span>
                        </h1>
                        <div className="h-1 w-24 bg-gold mb-8"></div>

                        <h2 className="text-xl uppercase tracking-widest text-gray-400 mb-8">{member.role}</h2>

                        <div className="bio-content text-lg text-gray-300 leading-relaxed space-y-6">
                            {Array.isArray(member.bio) ? (
                                member.bio.map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph.split(' ').map((word, i) => {
                                            if (word.startsWith('http') || word.startsWith('www')) {
                                                const url = word.startsWith('www') ? `https://${word}` : word;
                                                return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{word} </a>;
                                            }
                                            return word + ' ';
                                        })}
                                    </p>
                                ))
                            ) : (
                                <p>{member.bio}</p>
                            )}
                        </div>

                        <div className="socials mt-12 flex gap-4">
                            {/* Placeholder Socials */}
                            <button className="px-6 py-2 border border-gray-700 rounded-full hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider">
                                LinkedIn
                            </button>
                            <button className="px-6 py-2 border border-gray-700 rounded-full hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider">
                                IMDb
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .team-member-page {
                    min-height: 100vh;
                    background: #050505;
                    color: white;
                }
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .image-column {
                        position: relative;
                        top: 0;
                        margin-bottom: 2rem;
                    }
                    .image-wrapper {
                        max-height: 50vh !important;
                    }
                }
                @media (min-width: 1025px) {
                    .image-column {
                        position: sticky;
                        top: 120px;
                    }
                }
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 450px; /* Constrain width */
                    max-height: 75vh; /* Constrain height to viewport */
                    margin: 0 auto; /* Center horizontally */
                    border-radius: 4px;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #000;
                }
                .image-wrapper img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                .name-heading {
                    font-family: var(--font-heading);
                    font-size: clamp(3rem, 5vw, 5rem);
                    line-height: 0.9;
                }
                .glass-panel {
                    background: rgba(255,255,255,0.02);
                    backdrop-filter: blur(10px);
                }
            `}</style>
        </div>
    );
}
