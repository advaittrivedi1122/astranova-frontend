import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-landing-page-image bg-cover bg-center'>
    	<App />
    </div>
  </React.StrictMode>,
)
