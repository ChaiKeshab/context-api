import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import NoteState from './context/NoteState.jsx'
import AuthState from './context/AuthState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthState>
      <NoteState>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </NoteState>
    </AuthState>
  </BrowserRouter>
)
