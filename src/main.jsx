import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'modern-normalize';

import App from './components/App/App.jsx';
import { store } from './redux/store.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
