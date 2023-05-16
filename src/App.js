import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Plate from './menu/Plate'
import Navbar from './Navbar'
import Footer from './Footer'
import App1 from './calculator/App1'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact to path='/' element={<Home/>}/>
      <Route path='/calculator' element={<App1/>}/>
      <Route path='/Plate' element={<Plate/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
