import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/fonts.css';
import './css/reset.css';
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>,
)
