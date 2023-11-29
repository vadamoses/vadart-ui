import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Work from './work'
import Contact from './contact'
const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/work' element={<Work />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </>
  )
}

export default Rout