import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Works from './pages/Works';
import Content from './pages/Content';
import About from './pages/About';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="about" element={<About />} />
          {/* Default catch-all for dynamic slugs */}
          <Route path=":slug" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

