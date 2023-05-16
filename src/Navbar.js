import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <header className='main'>
        <div className='container-flex'>
            <nav className='list'>
                <NavLink to="/" className="list">Home</NavLink>
                <NavLink to="/calculator" className="list">calculator</NavLink>
                <NavLink to="/Plate" className="list">Plate</NavLink>
                <NavLink to="/Contact" className="list">Contact</NavLink>
            </nav>
        </div>
        <div className='symbol'>
          
        </div>
    </header>
    </>
  )
    
}

export default Navbar