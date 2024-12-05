import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF  } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import {Link} from 'react-scroll'
const Header = () => {
  return (
    <div  className='header--container'>
        <div className="header-text">

        <p className='header-p'>Get quick appointment for tech support! <span  className='header--book'><Link 
     activeClass='active'
     to='allappointment'
     spy={true}
     smooth={true}
     duration={1000}
     offset={50}
     delay={0}
     className="header-navbar-link-color"
     >
     BOOK AN APPOINTMENT
     </Link></span></p>
        </div>

     <div className="header--icons">
        <div className="icon-circle"><FontAwesomeIcon className='coloricon' icon={faFacebookF} /></div>
        <div className="icon-circle"><FontAwesomeIcon className='coloricon' icon={faInstagram} /></div>
        <div className="icon-circle"><FontAwesomeIcon className='coloricon' icon={faTwitter} /></div>
        <div className="icon-circle"><FontAwesomeIcon className='coloricon'icon={faLinkedinIn} /></div>
     </div>
    </div>
  )
}

export default Header