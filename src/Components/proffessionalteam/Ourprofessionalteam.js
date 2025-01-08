import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import headt from '../image/headtechnition.jpg'
import software from '../image/softwaredeveloper.jpg'
import electronic from '../image/electronicone--one.jpg'
import electrictwo from '../image/electricengineertwo.jpg'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Ourprofessionalteam = () => {

  const projectRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before adding the class for smoother effect
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, 100);
          }
        });
      },
      {
        threshold: 0.15, // Trigger slightly earlier
        rootMargin: '50px 0px -10% 0px'
      }
    );
  
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return ()=>{

    if (scroll) scroll.destroy();
  };
  }, []);

      

        const ourteam = [
            {image:headt, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Sharon Nadia", des:"Head Technician"},
            {image:software, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"James Nyoni", des:"Software Enginner"},
            {image:electronic, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Oliver Tshuma", des:"Electric Engineer"},
            {image:electrictwo, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Joseph Hove", des:"Electric Engineer"}
        ]

  return (
    <div id='allourteam' className='ourteam-contaner'>
        <p data-scroll data-scroll-repeat data-scroll-offset="100px, 100px" className='ourtem-p'>OUR PROFESSIONAL</p>
        <h2 data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">Expert Technical Team</h2>

        <div className="ourteam--flexmap">
            {  ourteam.map((team, index) => (
               <div  key={index}
               ref={el => projectRefs.current[index] = el}
                 className="ourteam--cards"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">

                <div className="ourteam--height">
                 <div className="ourteam-bg"><img className='ourteam--imgs' src={team.image} alt="" /></div>
              <div className="ourteam--add">  <FontAwesomeIcon className='ourtemicon-color' icon={team.picon} /> </div>   
                </div>

                <h4>{team.heading}</h4>
                <p>{team.des}</p>

                <div className="ourteam--allicons">
                    
                <div className="ourteam-bder-icons"> <FontAwesomeIcon className='ourteam--threeicons' icon={team.ficon} /> </div> 


                <div className="ourteam-bder-icons"> <FontAwesomeIcon className='ourteam--threeicons' icon={team.iicon} /> </div>    


                <div className="ourteam-bder-icons"> <FontAwesomeIcon className='ourteam--threeicons' icon={team.licon} /></div>    
                    
                     
                    
                    
                     </div>

                 </div>
            ))

            }
        </div>
    </div>
  )
}

export default Ourprofessionalteam