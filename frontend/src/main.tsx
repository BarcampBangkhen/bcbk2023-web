import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import TwitterWall from './pages/TwitterWall'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="event/twitter" element={<TwitterWall />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
)
