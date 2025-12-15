import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from './pages/SignUp';
import Header from './Component/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import RidePage from './pages/RidePage';
import Footer from './Component/Footer';
import GetStarted from './pages/GetStarted';
/* index.css */
import 'leaflet/dist/leaflet.css';



createRoot(document.getElementById('root')).render(
    <>
  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/RidePage" element={<RidePage/>}/>
              <Route path="/getStarted" element={<GetStarted/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
    </>
)
