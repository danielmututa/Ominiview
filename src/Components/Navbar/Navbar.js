import React from 'react'
// import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className='navbar--container'>
     
     <div className="navbar--log">
        <p className="navbar--Lp">OMNIVIEW</p>
     </div>

     <div className="navbar--links">

     <Link 
     activeClass='active'
     to='allhome'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     className="navbar-link-color"
     >
     HOME
     </Link>



     <Link 
     activeClass='active'
     to='allhussle'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     className="navbar-link-color"
     >
   ABOUT
     </Link>



     <Link 
     activeClass='active'
     to='allservices'
     spy={true}
     smooth={true}
     duration={500}
     offset={50}
     delay={0}
     className="navbar-link-color"
     >
    SERVICES
     </Link>



     <Link 
     activeClass='active'
     to='allportfolio'
     spy={true}
     smooth={true}
     duration={800}
     offset={50}
     delay={0}
     className="navbar-link-color"
     >
     PORTFOLIO
     </Link>



     <Link 
     activeClass='active'
     to='allappointment'
     spy={true}
     smooth={true}
     duration={1000}
     offset={50}
     delay={0}
     className="navbar-link-color"
     >
   CONTACT
     </Link>



    
     </div>

    </div>
  )
}

export default Navbar










