import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF  } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
const Header = () => {
  return (
    <div  className='header--container'>
        <div className="header-text">

        <p className='header-p'>Get quick appointment for tech support! <span className='header--book'>BOOK AN APPOINTMENT</span></p>
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