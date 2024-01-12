import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Work from '../components/work'
import Contact from '../components/contact'
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