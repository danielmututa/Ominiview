import React , { useEffect, useRef }  from 'react'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import img1 from "../image/Electric-system.jpg";
import img2 from "../image/electric-circuit.jpg";
import img3 from "../image/morden-project.jpg";
import img4 from "../image/telecommunication.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';




const Portfolio = () => {


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

     


   const Pproducts = [
    {img:img1, type:"ELECTRIC SYSTEM", des:"Commercial electric project", icon:faGreaterThan},
    {img:img2, type:"ELECTRIC SECURITY", des:"Commercial electric project", icon:faGreaterThan},
    {img:img3, type:"MORDEN PROJECT", des:"Commercial electric project", icon:faGreaterThan},
    {img:img4, type:"TELECOMMUNICATION", des:"Commercial electric project", icon:faGreaterThan}
   ]


  return (
    <div id='allportfolio' className='portfolio--container'>
     

<div className="hussle--flex--top-c" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">

                    <div className="hussle-twofirst"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
                    <p>OUR PORTFOLIO</p>
                    <h2>Explore Our Recent Projects</h2>
                     </div>

                     <div className="hussle-linetext"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
      <div className='hussle-line'><span></span></div>
      <div className="hussle--line-p">
        <p>Discover the innovative solutions we've delivered across various industries. Each project reflects our commitment to quality, efficiency, and client satisfaction.</p>
      </div>
    </div>

</div>



     <div  className="porfolio--allprojects">
        {  Pproducts.map((item, index) => (
        
         <div 
         key={index}
         ref={el => projectRefs.current[index] = el}
         className=" portfolio-c-map "  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
            <img src={item.img} className='portfolio--img' alt="" />

            <div className="portfolio-c-inner-mp">
                <div className="portfolio--flex-txt">
      <h4>{item.type}</h4>
      <p>{item.des}</p>
                </div>

                <div className="portfolio-flex-icon"><FontAwesomeIcon className='porfolioicon' icon={item.icon}/></div>
            </div>
         </div>

        ))}
     </div>

    </div>
  )
}

export default Portfolio