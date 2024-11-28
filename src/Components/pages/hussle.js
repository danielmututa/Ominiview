import React from 'react'
import husslepicone from '../image/hs-1.webp'
import husslepictwo from '../image/hs-2.jpg'
import husslepicthree from '../image/hs-3.jpg'
// import hussleicon from '../Assets/images/icons.jpg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import iconpic from "../image/home.jpg"
import img1 from "../image/ALL-IN-ONE-SERVICE.png";
import img2 from "../image/affodable-pricing.png";
import img3 from "../image/customized-solution.png";
import img4 from "../image/ealiest consultaion.png";

const Hussle = () => {

  const Hussledata = [
    {img:img4, heading:"Earliest Consultation", description:"Let’s explore your electronic engineering project—covering requirements, timelines, and objectives. This initial discussion ensures we align with your vision and deliver tailored solutions."},
    {img:img3, heading:"Customized Solution", description:"We’re here to understand your electronic engineering project’s requirements, timelines, and objectives. This first meeting lays the foundation for a solution perfectly tailored to your needs."},
    {img:img2, heading:"Affordable Pricing", description:"Let’s review your electronic engineering project’s requirements, timelines, and objectives. This initial consultation will allow us to provide you with cost-effective solutions tailored to your needs."},
    {img:img1, heading:"All-In-One-Service", description:"Let’s go over your electronic engineering project’s requirements, timelines, and objectives. This initial meeting will help us develop a comprehensive solution that covers all aspects of your project."}
  ];

  return (
    <div className='hussle--container'>

<div className="hussle--flex--top-c">
                    <div className="hussle-twofirst">
                        <p>24/7  Hussle free</p>
                        <h2>Home and Business installation Services</h2>
                     </div>

                     <div className="hussle-linetext">
      <div className='hussle-line'><span></span></div>
      <div className="hussle--line-p">
        <p>We provide reliable, efficient installation services tailored to meet your residential and commercial needs. Experience seamless service from start to finish, backed by our commitment to quality and customer satisfaction.</p>
      </div>
    </div>

</div>


<div className="hussle--container-btm">



        <div className="hussle-topbar">
                
             <div className="hussle-works">
                <img src={husslepicone} alt="" className="hussle--one" />
     
                <div className="hussle-div-two">
                    <img src={husslepictwo} alt="" className="hussle--two" />
                    <img src={husslepicthree} alt="" className="hussle--two" />
                     </div>

    <div className="hussle-allworks-done">
    <div className="hussle-works-t-inner">
    
      <div  className="hussle--works-time">
        
       <p className='hussle-p-number'>560+</p>
       <p className='hussle-p-n-text'>projects done</p>
       <div className='hussle-p-w-line'><span></span></div>
     
       <p className='hussle-p-number'>180+</p>
       <p className='hussle-p-n-text'>technicians</p>

     

      


      </div>
      
        </div>
    </div>

                     
               </div>
        </div>


<div className="hussle--textline">
   

    <div className="hussle-icon-text">
  {Hussledata.map((item, index) => (
    <div key={index} className="hussle--icon-text-flx">
      <img src={item.img } alt="g" className="hussle-one-icon" />

      <div className="hussle-icon-text-desc">
        <h4>{item.heading}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>


     


<div className="hussle-btn-contact">
  <button className="hussle-button">Read More</button>

<div className="hussle-c-booking">
<FontAwesomeIcon className='hussle--p-icon' icon={faPhone} />
<div className="hussle-c-bking-number">
  <p className='hussle-for-booking'>+263 787881911</p>
  <p className='hussle-booking'>call for booking</p>
</div>
</div>

</div>

  </div>

  </div>
    </div>
  )
}

export default Hussle