import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfirmProvider } from "material-ui-confirm";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfirmProvider>
          <App />
        </ConfirmProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
