import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
const Pricing = () => {

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




  const pricing = [
    {price:"$300", month:"/PER MONTH", heading:"STARTER PACKAGES", topic:"Basic Plan" , icon:faCheck, iconx: faXmark, des1:"Perfect for small projects",des2:"Affordable pricing", des3:"Fast delivery", des4:"Scalable as you grow", des5:"Continuous support" ,des6:"Easy to get started",button:"BUY PLAN" },
    {price:"$600", month:"/PER MONTH", heading:"BEST PACKAGES", topic:"Advance Plan", iconx: faXmark , icon:faCheck, des1:"Great for growing projects",des2:"Flexible features", des3:"Priority support", des4:"Faster delivery", des5:"Custom solutions" ,des6:"Scalable for growth",button:"BUY PLAN" },
    {price:"$430", month:"/PER MONTH", heading:"PRIMARY PACKAGES", topic:"Standard Plan" , icon:faCheck ,iconx: faXmark, des1:"Reliable for medium projects",des2:"Cost-effective features", des3:"Quick delivery", des4:"Customizable", des5:"Ongoing support" ,des6:"Scalable growth", button:"BUY PLAN" }
  ]


  return (
    <div id='allpricing' className='pricing--container'>


        
<div className="hussle--flex--top-c" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">

<div className="hussle-twofirst" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
<p>OUR PRICING TABLE</p>
<h2>Our Affordable Pricing</h2>
 </div>

 <div className="hussle-linetext" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
<div className='hussle-line'><span></span></div>
<div className="hussle--line-p">
<p>We offer competitive and transparent pricing, ensuring value for money without compromising on quality. Explore our pricing options tailored to meet your needs.</p>
</div>
</div>

</div>







<div className="pricing--plan">


      { pricing.map((item, index) =>(

        <div 
        ref={el => projectRefs.current[index] = el}
data-scroll data-scroll-repeat data-scroll-offset="100px, 100px"
        className="pricing--three-container ">

<div className="pricing-amount">
        <p className='pricing-amt-c'>{item.price}</p>
        <p className='pricing-amount-pric'>{item.month}</p>
      </div>

        
 <div className="pricing--threeplan">
      
     

       <div className="pricing--plan-card">

        <div className="pricing-hedaer">
    <h5>{item.heading}</h5>
    <h3>{item.topic}</h3>
        </div>

        <div className="pricing--line"><span></span></div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.icon}/></div>
        <p>{item.des1}</p>
        </div>
        
        <div className="pricing-plan-flex">
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.icon}/></div>
        <p>{item.des2}</p>
        </div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.icon}/></div>
        <p>{item.des3}</p>
        </div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.icon}/></div>
        <p>{item.des4}</p>
        </div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan-fade "> <FontAwesomeIcon className='pricing-icon' icon={item.iconx}/></div>
        <p className='pricing-fade'>{item.des5}</p>
        </div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan-fade "> <FontAwesomeIcon className='pricing-icon' icon={item.iconx}/></div>
        <p className='pricing-fade'>{item.des6}</p>
        </div>

        <div className="pricing--button"><button>{item.button}</button></div>

       </div>

 </div>
 </div>
      ))

       
      }
</div>




    </div>
  )
}

export default Pricing