
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';


/**
 *  Import all the components
 * @returns
 */
import Header from './Components/Header'
import Footer from './Components/Footer'

/**
 * Import all the routes
 */
import Home from './Pages/Home/Home'
import Profil from './Pages/Profil/Profil'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
