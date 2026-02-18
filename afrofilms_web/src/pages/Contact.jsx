import { useState } from 'react';
import imageMap from '../lib/image_map.json';
import SEO from '../components/SEO';

export default function Contact() {
    const contactImage = imageMap["1236"] ? `/uploads/${imageMap["1236"]}` : null;

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Using FormSubmit.co for serverless form handling
        try {
            const res = await fetch('https://formsubmit.co/ajax/admin@afrofilmsinternational.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: 'New Contact from AfroFilms Website'
                })
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="contact-page">
            <SEO title="Contact" description="Get in touch with AfroFilms International. Based in Nairobi, Kenya. We execute creative projects from Script to Screen." />
            <section className="contact-hero">
                <div className="hero-bg" style={{ backgroundImage: contactImage ? `url(${contactImage})` : 'none' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content center">
                    <span className="section-subtitle text-gold">Get In Touch</span>
                    <h1 className="hero-title">Start Your Project</h1>
                </div>
            </section>

            <section className="contact-content section-padding">
                <div className="container relative z-10">
                    <div className="contact-hub-grid">
                        {/* Visit Card */}
                        <div className="hub-card glass group">
                            <div className="card-icon">📍</div>
                            <h3 className="card-title">Visit Us</h3>
                            <div className="card-body">
                                <p>Bekim House, Level 1<br />Nairobi, Kenya</p>
                            </div>
                            <a href="https://maps.app.goo.gl/eTxi7PMegZpt7aPs8" target="_blank" rel="noopener noreferrer" className="card-link">
                                Get Directions <span className="arrow">→</span>
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="hub-card glass group">
                            <div className="card-icon">✉️</div>
                            <h3 className="card-title">Email Us</h3>
                            <div className="card-body">
                                <p>For inquiries and collaborations:</p>
                                <a href="mailto:admin@afrofilmsinternational.com" className="highlight-link">admin@afrofilmsinternational.com</a>
                            </div>
                            <a href="mailto:admin@afrofilmsinternational.com" className="card-link">
                                Send Email <span className="arrow">→</span>
                            </a>
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2 className="form-heading">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="form-status success">Message sent successfully!</p>}
                            {status === 'error' && <p className="form-status error">Failed to send. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
                .contact-hero {
                    position: relative;
                    height: 50vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background: #111;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, #000);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                .hero-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    margin-bottom: 0;
                }
                .section-subtitle {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .contact-content {
                    position: relative;
                    margin-top: -80px;
                    padding-bottom: 8rem;
                }

                .contact-hub-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .hub-card {
                    padding: 3rem 2rem;
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.4s ease;
                }

                .hub-card:hover {
                    background: rgba(20, 20, 20, 0.9);
                    transform: translateY(-10px);
                    border-color: var(--color-primary);
                }

                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                    filter: grayscale(1);
                    transition: filter 0.3s;
                }
                .hub-card:hover .card-icon {
                    filter: grayscale(0);
                }

                .card-title {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1rem;
                    font-family: var(--font-heading);
                }

                .card-body {
                    margin-bottom: 2rem;
                    color: #aaa;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .highlight-link {
                    color: #fff;
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 1.1rem;
                    transition: color 0.3s;
                }
                .hub-card:hover .highlight-link {
                    color: var(--color-primary);
                }

                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.85rem;
                    color: var(--color-primary);
                    font-weight: 600;
                    padding-bottom: 2px;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s;
                }
                .card-link:hover {
                    opacity: 0.8;
                    border-bottom-color: var(--color-primary);
                }
                .arrow {
                    transition: transform 0.3s;
                }
                .card-link:hover .arrow {
                    transform: translateX(5px);
                }

                /* Contact Form */
                .contact-form-section {
                    max-width: 700px;
                    margin: 5rem auto 0;
                    padding: 3rem;
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                }
                .form-heading {
                    text-align: center;
                    font-size: 2rem;
                    color: #fff;
                    font-family: var(--font-heading);
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 4px;
                    color: #fff;
                    font-size: 1rem;
                    transition: all 0.3s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    background: rgba(255,255,255,0.08);
                }
                .form-input::placeholder {
                    color: #666;
                }
                textarea.form-input {
                    resize: vertical;
                    min-height: 120px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 1rem 2rem;
                    background: var(--color-primary);
                    color: #000;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .submit-btn:hover {
                    background: #fff;
                }
                .submit-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .form-status {
                    text-align: center;
                    margin-top: 1rem;
                    font-size: 0.95rem;
                }
                .form-status.success { color: #4ade80; }
                .form-status.error { color: #f87171; }

                @media (max-width: 768px) {
                    .contact-content {
                        margin-top: 0;
                        padding-top: 2rem;
                    }
                    .contact-hub-grid {
                        grid-template-columns: 1fr;
                    }
                    .hub-card {
                        padding: 2rem;
                    }
                    .contact-form-section {
                        padding: 2rem;
                        margin: 3rem 1rem 0;
                    }
                }
            `}</style>
        </div>
    );
}
