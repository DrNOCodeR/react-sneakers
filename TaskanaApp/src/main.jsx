import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/global.css';
import AppLayout from './layouts/appLayout/AppLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
