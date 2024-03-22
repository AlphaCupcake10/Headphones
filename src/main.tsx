import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LenisWrapper from './components/LenisWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LenisWrapper>
      <App />
    </LenisWrapper>
  </React.StrictMode>,
)
