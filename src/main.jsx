import React, {StrictMode} from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App'
import './assets/css/plugins.css'
import './assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
