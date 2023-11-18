import React from 'react'
import ReactDOM from 'react-dom/client'     
import './index.css'
// import Header from './components/Header'
import Home from './pages/Home';
import ListaBolo from './pages/ListaBolo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroBolo from './pages/CadastroBolo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Header/> */}

    <Routes>
    <Route path='/' element={<Home />}/> { /* conf.. rota*/} 
    <Route path= 'cadastro/bolo' element = {<CadastroBolo/> }/>
    <Route path='lista/bolo' element= {<ListaBolo/>}/>
    </Routes>
    
     </BrowserRouter>
  </React.StrictMode>,
)
