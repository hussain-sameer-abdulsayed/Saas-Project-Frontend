import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n.js';
import App from './App.jsx';
import './index.css';
// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';
// Import Leaflet Draw CSS
import 'leaflet-draw/dist/leaflet.draw.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
