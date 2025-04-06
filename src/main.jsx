import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import ContactME from './routes/ContacMe.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='Contactame' element={<ContactME/>}/>
    </Routes>
  </BrowserRouter>,
)
