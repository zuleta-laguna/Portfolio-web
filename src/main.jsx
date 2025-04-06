import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ContactME from './routes/ContacMe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='contactame' element={<ContactME/>}/>
    </Routes>
  </Router>
  </StrictMode>
  
)
