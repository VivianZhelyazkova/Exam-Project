import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Catalog from './components/Catalog'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
