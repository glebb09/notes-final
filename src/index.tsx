import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import store from './features/store';
import App from './App';

import { ThemeProvider } from './util/themeContext'
import { SidebarProvider } from './util/clickSidebar';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

