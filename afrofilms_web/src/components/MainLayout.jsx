import { useState, useEffect, useCallback } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Team' },
  { id: 'collective', label: 'Collective' },
  { id: 'press', label: 'Press' },
  { id: 'contact', label: 'Contact' },
];

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    // Small delay to let sections render
    const timer = setTimeout(() => {
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  const scrollToSection = useCallback((sectionId) => {
    setIsOpen(false);

    // If not on home page, navigate first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and render, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="brand-logo" onClick={() => scrollToSection('home')}>
            <img src="/logo-new.png" alt="AfroFilms International" />
          </Link>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
          </div>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-scroll-btn ${activeSection === id ? 'active-link' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
            <div className="nav-socials">
              <a href="https://www.facebook.com/people/Afro-Films-International-Ltd/100067548437631/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/afrofilmsinternational/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://ke.linkedin.com/company/afrofilms" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://vimeo.com/user70440057" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c1.5-2 3-5 5-6 1.5-.5 2.5 1 2.5 2.5 0 4-2 7.5-2 10.5 0 2.5 3 2 4.5 1.5 2.5-1 5.5-3.5 7-9.5 0-2.5-1-4-3-4-2 0-3 3-3.5 3.5-.5.5-1.5 2.5-2 2.5-1.5 0 .5-6-1-7S7 6 6 7.5c-1 1.5-3 5.5-3 5.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-col">
            <Link to="/" className="brand-logo footer-brand" onClick={() => scrollToSection('home')}>
              <img src="/logo-new.png" alt="AfroFilms International" />
            </Link>
            <p>&copy; {new Date().getFullYear()} AfroFilms International.</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Bekim House, Level 1, Nairobi Kenya</p>
            <p><a href="mailto:admin@afrofilmsinternational.com">admin@afrofilmsinternational.com</a></p>
            <p><a href="tel:+254720100167">+254 720100167</a></p>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/people/Afro-Films-International-Ltd/100067548437631/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/afrofilmsinternational/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://ke.linkedin.com/company/afrofilms" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://vimeo.com/user70440057" target="_blank" rel="noopener noreferrer">Vimeo</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
                .navbar {
                    background: var(--color-bg-glass);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid var(--color-border);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    padding: 1rem 0;
                }

                .main-content {
                    padding-top: 0; /* Hero is full-height, no offset needed */
                }

                .footer {
                    border-top: 1px solid var(--color-border);
                    padding: 4rem 0;
                    margin-top: 0;
                    background: #000;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                }
                .footer-col h4 {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }
                .footer-col p {
                    color: var(--color-text-muted);
                    line-height: 1.8;
                    margin-bottom: 0.5rem;
                }
                .footer-col a {
                    color: var(--color-text-muted);
                    transition: color 0.3s;
                }
                .footer-col a:hover {
                    color: var(--color-primary);
                }
                .footer-brand {
                    margin-bottom: 1rem;
                    display: block;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .brand-logo img {
                    height: 48px;
                    width: auto;
                    object-fit: contain;
                    display: block;
                    filter: invert(1);
                    transition: opacity 0.3s ease;
                }
                .brand-logo:hover img {
                    opacity: 0.85;
                }
                .nav-links {
                    display: flex;
                    gap: 2.5rem;
                    align-items: center;
                }

                /* Scroll nav buttons look like links */
                .nav-scroll-btn {
                    color: var(--color-text-main);
                    font-weight: 500;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 0.1em;
                    position: relative;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    font-family: var(--font-sans);
                    transition: color 0.3s;
                }
                .nav-scroll-btn::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--color-primary);
                    transition: width var(--transition-fast);
                }
                .nav-scroll-btn:hover::after,
                .nav-scroll-btn.active-link::after {
                    width: 100%;
                }
                .nav-scroll-btn:hover,
                .nav-scroll-btn.active-link {
                    color: var(--color-primary);
                }

                .nav-socials {
                    display: flex;
                    gap: 1rem;
                    margin-left: 1rem;
                    padding-left: 1rem;
                    border-left: 1px solid var(--color-border);
                }
                .nav-socials a:hover {
                    color: var(--color-primary);
                }

                /* Mobile Menu */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                    cursor: pointer;
                    z-index: 200;
                }
                .hamburger span {
                    width: 100%;
                    height: 3px;
                    background: var(--color-primary);
                    border-radius: 3px;
                    transition: all 0.3s ease;
                }

                @media (max-width: 900px) {
                    .hamburger {
                        display: flex;
                    }
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 70%;
                        background: rgba(0,0,0,0.95);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        padding: 6rem 2rem;
                        transform: translateX(100%);
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        border-left: 1px solid var(--color-border);
                        align-items: flex-start;
                    }
                    .nav-links.active {
                        transform: translateX(0);
                    }
                    .nav-scroll-btn {
                        font-size: 1.1rem;
                        padding: 0.5rem 0;
                    }
                    .nav-socials {
                        margin-left: 0;
                        padding-left: 0;
                        border-left: none;
                        margin-top: 2rem;
                        justify-content: center;
                    }
                }
            `}</style>
    </div>
  );
}
