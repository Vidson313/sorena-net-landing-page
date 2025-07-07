import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './index.css'; // Assuming no global CSS file for now, Tailwind is via CDN

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to. Ensure there's an element with id='root' in your index.html.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
