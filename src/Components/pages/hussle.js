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
    {img:img4, heading:"Earliest Consultation", description:"Let's discuss your electronic engineering project requirements, timelines, and objectives. This initial meeting will help us"},
    {img:img3, heading:"Customized Solution", description:"Let's discuss your electronic engineering project requirements, timelines, and objectives. This initial meeting will help us"},
    {img:img2, heading:"Affordable Pricing", description:"Let's discuss your electronic engineering project requirements, timelines, and objectives. This initial meeting will help us"},
    {img:img1, heading:"All-In-One-Service", description:"Let's discuss your electronic engineering project requirements, timelines, and objectives. This initial meeting will help us"}
  ];

  const projectdone = [
    {number:'560+', description:'projects done'},
    {number:'180+', description:'technicians'},
  ]
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
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil molestiae dignissimos incidunt perferendis omnis.</p>
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
    {projectdone.map((item,index) => (
      <div key={index} className="hussle--works-time">
        
       <p className='hussle-p-number'>{item.number}</p>
       <p className='hussle-p-n-text'>{item.description}</p>
       <div className='hussle-p-w-line'><span></span></div>
     
      </div>
      ))}
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