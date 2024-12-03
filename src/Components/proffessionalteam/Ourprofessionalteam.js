import React, { useEffect, useRef } from 'react'
import img1 from "../image/software-engineer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
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

      

        const ourteam = [
            {image:img1, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"William Mututa", des:"Head Technician"},
            {image:img1, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Daniel Mututa", des:"Software Enginner"},
            {image:img1, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Michael Mututa", des:"Electric Engineer"},
            {image:img1, picon:faAdd, ficon:faFacebookF, iicon:faInstagram, licon:faLinkedinIn, heading:"Emmanuel Mututa", des:"Electric Engineer"}
        ]

  return (
    <div className='ourteam-contaner'>
        <p className='ourtem-p'>OUR PROFESSIONAL</p>
        <h2>Expert Technical Team</h2>

        <div className="ourteam--flexmap">
            {  ourteam.map((team, index) => (
               <div  key={index}
               ref={el => projectRefs.current[index] = el}
                 className="ourteam--cards  scroll-animation ">

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