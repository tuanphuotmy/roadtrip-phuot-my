import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.VITE_HASH_ROUTER === '1' ? (
      <HashRouter><App /></HashRouter> /* bản xem thử tĩnh (artifact) */
    ) : (
      // Readdy dựng bản xem trước dưới /preview/<dự án>/<phiên bản>/ → basename theo BASE_PATH
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}><App /></BrowserRouter>
    )}
  </StrictMode>,
);
