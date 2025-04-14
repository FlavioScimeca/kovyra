import { config } from '@kovyra/theme';
import { TamaguiProvider } from '@kovyra/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TamaguiProvider config={config}>
      <App />
    </TamaguiProvider>
  </StrictMode>,
);
