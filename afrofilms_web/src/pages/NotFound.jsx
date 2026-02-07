import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SEO title="Page Not Found" />
      <div className="film-grain"></div>
      <div className="container center-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-msg">Scene Not Found.</h2>
        <p className="error-desc">The page you are looking for has been cut from the final edit.</p>
        <Link to="/" className="btn btn-primary">Back to Action</Link>
      </div>

      <style>{`
        .not-found-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #050505;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        
        /* Film Grain Effect */
        .film-grain {
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            opacity: 0.04;
            pointer-events: none;
            z-index: 1;
            animation: grain 0.5s steps(10) infinite;
        }
        @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5%, -10%); }
            20% { transform: translate(-15%, 5%); }
            30% { transform: translate(7%, -25%); }
            40% { transform: translate(-5%, 25%); }
            50% { transform: translate(-15%, 10%); }
            60% { transform: translate(15%, 0%); }
            70% { transform: translate(0%, 15%); }
            80% { transform: translate(3%, 35%); }
            90% { transform: translate(-10%, 10%); }
        }
        
        /* Flicker Effect */
        .not-found-page::before {
            content: '';
            position: absolute;
            inset: 0;
            background: transparent;
            animation: flicker 4s infinite;
            pointer-events: none;
            z-index: 2;
        }
        @keyframes flicker {
            0%, 96%, 100% { opacity: 0; }
            97% { opacity: 0.05; background: #fff; }
            98% { opacity: 0; }
            99% { opacity: 0.02; background: #fff; }
        }
        
        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 3;
        }
        .error-code {
          font-size: clamp(6rem, 15vw, 12rem);
          font-family: var(--font-heading);
          line-height: 1;
          color: rgba(255,255,255,0.05);
          position: absolute;
          z-index: 0;
          pointer-events: none;
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.08; }
        }
        .error-msg {
          font-size: 2.5rem;
          font-family: var(--font-heading);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        .error-desc {
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }
        .btn-primary {
            background: var(--color-primary);
            color: #000;
            padding: 1rem 2rem;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.1em;
            transition: all 0.3s;
        }
        .btn-primary:hover {
            background: #fff;
        }
      `}</style>
    </div>
  );
}
