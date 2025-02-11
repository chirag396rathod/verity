import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/scss/style.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store.js'
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from './lib/config.js'
import { ToastContainer } from 'react-toastify';
import SearchProvider from './context/SearchContext.jsx';
import { PaginationProvider } from './context/PaginationContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ReduxProvider store={store}>
      <PaginationProvider>  
        <SearchProvider>
          <BrowserRouter basename={BASE_URL}>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </SearchProvider>
      </PaginationProvider>
    </ReduxProvider>
  </StrictMode>,
)
