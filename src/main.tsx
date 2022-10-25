import React from 'react';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import ErrorBoundary from './errorBoundary';
import appStore, { persistor } from '~/store';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider store={appStore}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </PersistGate>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
