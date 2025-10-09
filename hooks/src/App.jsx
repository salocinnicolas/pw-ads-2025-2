import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './Home';
import Exercicio01 from './exercicios/01.jsx';
import Exercicio02 from './exercicios/02.jsx';
import Exercicio03 from './exercicios/03.jsx';

function App() {
  
  return (
    <>
      <h1>Exercicios React Hooks</h1>
      <BrowserRouter>
        <u1>
          <li><Link to="/">Pagina inicial</Link></li>
          <li><Link to="/01">Exercicio 01</Link></li>
          <li><Link to="/02">Exercicio 02</Link></li>
          <li><Link to="/03">Exercicio 03</Link></li>
        </u1>
        <hr />
        <Routes>
          {/* path="/" siginifica a raiz do website*/}
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
