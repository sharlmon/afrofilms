import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="brand">AfroFilms</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AfroFilms International. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .navbar {
          background: var(--color-bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 1rem 0;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.03em;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-links a {
          color: var(--color-text-main);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          position: relative;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--color-primary);
            transition: width var(--transition-fast);
        }
        .nav-links a:hover::after {
            width: 100%;
        }
        .nav-links a:hover {
          color: var(--color-primary);
        }
        .footer {
          border-top: 1px solid var(--color-border);
          padding: 4rem 0;
          margin-top: 4rem;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
