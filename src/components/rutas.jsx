import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import About from './pages/abaut/about';

function Rutas() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Rutas;
