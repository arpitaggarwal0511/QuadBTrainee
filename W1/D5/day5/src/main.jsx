// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';  // <-- Now import the default export
import { WishlistProvider } from './context/WishlistContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </Provider>
  </React.StrictMode>
);
