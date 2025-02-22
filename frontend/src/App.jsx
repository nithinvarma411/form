import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Show from './pages/Show';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </>
  )
}

export default App
