import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const Press = lazy(() => import('./pages/Press'));
const Team = lazy(() => import('./pages/Team'));
const Training = lazy(() => import('./pages/Training'));
const Content = lazy(() => import('./pages/Content'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback
const PageLoader = () => (
  <div className="center-loading">
    <div className="loader"></div>
    <style>{`
      .center-loading { min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #050505; }
      .loader { width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s infinite linear; }
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="works" element={<Works />} />
              <Route path="press" element={<Press />} />
              <Route path="team" element={<Team />} />
              <Route path="training" element={<Training />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="404" element={<NotFound />} />
              {/* Default catch-all for dynamic slugs */}
              <Route path=":slug" element={<Content />} />
              {/* Catch all unmatched routes */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

