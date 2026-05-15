import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { settingsService } from './services/settingsService'
import App from './App'
import './index.css'


const settings =
  settingsService.getSettings()

settingsService.applyTheme(
  settings.theme
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)