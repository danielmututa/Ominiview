import React from 'react'
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div className='navbar--container'>
     
     <div className="navbar--log">
        <p className="navbar--Lp">OMNIVIEW</p>
     </div>

     <div className="navbar--links">
        <div className="navbar-link-color"> <NavLink to="/" className='navbarlinks'>HOME</NavLink></div>
        <div className="navbar-link-color">  <NavLink to="/" className='navbarlinks'>ABOUT</NavLink></div>
        <div className="navbar-link-color">  <NavLink to="/" className='navbarlinks'>SERVICES</NavLink></div>
        <div className="navbar-link-color">  <NavLink to="/" className='navbarlinks'>PORTFOLIO</NavLink></div>
        <div className="navbar-link-color"> <NavLink to="/" className='navbarlinks'>CONTACT</NavLink></div>
 




     </div>

    </div>
  )
}

export default Navbar