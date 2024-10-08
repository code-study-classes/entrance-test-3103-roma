import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Init } from './init';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Init />
  </StrictMode>,
);
