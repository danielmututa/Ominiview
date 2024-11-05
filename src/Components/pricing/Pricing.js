import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {



  const pricing = [
    {price:"$300", month:"/PER MONTH", heading:"STARTER PACKAGES", topic:"Basic Plan" , icon:faCheck, iconx: faXmark, des1:"Lorem ipsum dolor sit",des2:"Lorem ipsum dolor sit", des3:"Lorem ipsum dolor sit", des4:"Lorem ipsum dolor sit", des5:"Lorem ipsum dolor sit" ,des6:"Lorem ipsum dolor sit",button:"BUY PLAN" },
    {price:"$600", month:"/PER MONTH", heading:"BEST PACKAGES", topic:"Advance Plan", iconx: faXmark , icon:faCheck, des1:"Lorem ipsum dolor sit",des2:"Lorem ipsum dolor sit", des3:"Lorem ipsum dolor sit", des4:"Lorem ipsum dolor sit", des5:"Lorem ipsum dolor sit" ,des6:"Lorem ipsum dolor sit",button:"BUY PLAN" },
    {price:"$430", month:"/PER MONTH", heading:"PRIMARY PACKAGES", topic:"Standard Plan" , icon:faCheck ,iconx: faXmark, des1:"Lorem ipsum dolor sit",des2:"Lorem ipsum dolor sit", des3:"Lorem ipsum dolor sit", des4:"Lorem ipsum dolor sit", des5:"Lorem ipsum dolor sit" ,des6:"Lorem ipsum dolor sit", button:"BUY PLAN" }
  ]


  return (
    <div className='pricing--container'>


        
<div className="hussle--flex--top-c">

<div className="hussle-twofirst">
<p>OUR PRICING TABLE</p>
<h2>Our Resasonable Pricing</h2>
 </div>

 <div className="hussle-linetext">
<div className='hussle-line'><span></span></div>
<div className="hussle--line-p">
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil molestiae dignissimos incidunt perferendis omnis.</p>
</div>
</div>

</div>







<div className="pricing--plan">


      { pricing.map((item) =>(

        <div className="pricing--three-container">

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
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.iconx}/></div>
        <p>{item.des5}</p>
        </div>

        <div className="pricing-plan-flex">
         <div className="pricing-checkplan"> <FontAwesomeIcon className='pricing-icon' icon={item.iconx}/></div>
        <p>{item.des6}</p>
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