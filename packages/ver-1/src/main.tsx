import { Colors } from '@design-system';
import GlobalStyle from '@styles/global-styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Colors}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
