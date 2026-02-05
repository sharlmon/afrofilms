import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <div className="not-found-page">
            <SEO title="Page Not Found" />
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
        }
        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .error-code {
          font-size: clamp(6rem, 15vw, 12rem);
          font-family: var(--font-heading);
          line-height: 1;
          color: rgba(255,255,255,0.05); /* Ghostly background */
          position: absolute;
          z-index: 0;
          pointer-events: none;
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
      `}</style>
        </div>
    );
}
