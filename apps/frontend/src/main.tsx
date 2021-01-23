import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { StoreContext, store } from './app/stores';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
