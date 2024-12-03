import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
const Footer = () => {

const footercards = [
  {icon:faEnvelope, title:"wmututa@gmail.com", type:"Give U A  Call"},
  {icon:faPhone, title:"+263-776750714", type:"Call To Our Experts"},
  {icon:faLocationDot, title:"JI.Sunset Road No.815", type:"Office Location"},
]

useEffect(() => {
  const scroll = new LocomotiveScroll();
  return ()=>{

  if (scroll) scroll.destroy();
};
}, []);



  return (
    <div className='footer--container'>
    <div className="footer-four-flex">

      <div className="flex--company" >
        <h3>Ominiview.</h3>
        <p >Ominiview delivers innovative telecommunication and technology solutions that help businesses thrive, ensuring seamless operations and reliable performance for all clients.</p>
      </div>

      <div className="flex--company" >
      <div className="footer-u-q-s-links">
          <h4>USEFUL LINKS</h4>
          <div className="footer-line"><span></span></div>
        </div>

  <div className="footer-line-p"> <div className="footer-lines"><span></span></div>    <p>Customers Services</p>  </div>  
   <div className="footer-line-p">  <div className="footer-lines"><span></span></div>    <p>About Our Company</p> </div>       
      </div>

      <div className="flex--company"  >
      <div className="footer-u-q-s-links">
          <h4>QUICK LINKS</h4>
          <div className="footer-line"><span></span></div>
        </div>

  <div className="footer-line-p"> <div className="footer-lines"><span></span></div>    <p> About Us</p> </div>       
     <div className="footer-line-p">  <div className="footer-lines"><span></span></div>    <p>Our Services</p>  </div>     
   <div className="footer-line-p"> <div className="footer-lines"><span></span></div>    <p>Recent Portfolio</p>  </div>        
     <div className="footer-line-p">  <div className="footer-lines"><span></span></div>    <p>Pricing Table</p> </div>      
      </div>

<div className="flex--company"  >

<div className="footer-u-q-s-links">
          <h4>SOCIAL MEDIA</h4>
          <div className="footer-line"><span></span></div>
        </div>
  <p>Stay connected with us for the latest updates, insights, and offers. Follow us across our social media platforms to stay in the loop and engage with our community.</p>

    <div className="footer--cover">
<div className="footer--circle">   <FontAwesomeIcon className='footer-icon-color' icon={faFacebookF} />     </div>      
<div className="footer--circle">  <FontAwesomeIcon  className='footer-icon-color' icon={faLinkedinIn} /></div>      
<div className="footer--circle"> <FontAwesomeIcon  className='footer-icon-color' icon={faInstagram} /></div>     
<div className="footer--circle"> <FontAwesomeIcon className='footer-icon-color' icon={faTwitter} /></div>      
     
    </div>

</div>

    </div>

   <div className="footer--three-flex">
  {  footercards.map((footer)=>(
    <div className="footer-three-card">

      <div className="footer-three-circle"><FontAwesomeIcon className='footer-three-icon' icon={footer.icon}/></div>
     <div className="footer-three-btw">
      <p className='footer-title'>{footer.title}</p>
      <p className='footer-type'>{footer.type}</p>
     </div>
    </div>
  ))
  }
  

   </div>

    </div>
  )
}

export default Footer