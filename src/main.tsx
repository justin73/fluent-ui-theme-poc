import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './App';
import { ThemeContextProvider } from './contexts';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </StrictMode>
  );
}
