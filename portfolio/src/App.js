import React from 'react'
import Nav from './navigation/nav'
import Footer from './navigation/footer'
import Rout from './navigation/rout'
import { BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App