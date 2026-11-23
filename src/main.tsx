import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.MODE === 'preview' ? (
      <HashRouter><App /></HashRouter> /* bản xem thử (artifact) */
    ) : (
      <BrowserRouter><App /></BrowserRouter>
    )}
  </StrictMode>,
);
