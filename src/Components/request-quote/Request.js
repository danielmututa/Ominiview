
import React from 'react'
import img1 from "../image/affodable-pricing.png"
import img2 from "../image/ealiest consultaion.png"
import img3 from "../image/ALL-IN-ONE-SERVICE.png"

const Request = () => {

  return (
    <div className='request--container'>
        <div className="request--heading">
            <p>FOR FREE ESTIMATE!</p>
            <h2>Request A Quote</h2>
        </div>

        <form className="request--allforms">

            <div className="request--top-form">
                <input className='request-form-type' placeholder='Your Name*' type="text" />
                <input className='request-form-type' placeholder='Email ID*' type="text" />
                <input className='request-form-type' placeholder='Office Address' type="text" />
                
               
            </div>

            <div className="request--bottom-form">

            <select className='request-form-select' name="myselect" id="">
              <option value="option1" >Select Your Work Type</option>
              <option value="option1">Option1</option>
              <option value="option1">Option2</option>
              <option value="option1">Option3</option>
            </select>

            <select className='request-form-select' name="myselect" id="">
              <option value="option1"></option>
              <option value="option1">Option1</option>
              <option value="option1">Option2</option>
              <option value="option1">Option3</option>
            </select>

            <button type='submit' className="request-form-select">Get Estimate Quote</button>
            </div>
        </form>


     <div className="request--people-trust">

      <div className="request--best-why">
        <p>PEOPLE TRUST</p>
        <h2>Why We Are the Best</h2>
        <p>Our clients trust us for our commitment to excellence, reliability, and innovative solutions. We consistently exceed expectations, delivering results that matter to your success.</p>
      </div>



      
    <div className="request--best-three">
<div className="request--flex-img-t">
<div className="request--best-bg"> <img className='request--img-type' src={img1} alt="icons" /> </div>
 <p>01.</p>
</div>

<div className="request--best-h-txt">
<h4>Licensed Technicians</h4>
<p>Our team of licensed technicians brings expertise and precision to every project. With a strong commitment to quality, we ensure safe, reliable, and effective solutions tailored to your needs.</p>
</div>
    </div>
  
        
    <div className="request--best-three">
<div className="request--flex-img-t">
<div className="request--best-bg"> <img className='request--img-type' src={img2} alt="icons" /> </div>
 <p>02.</p>
</div>

<div className="request--best-h-txt">
<h4>Top Rated Service</h4>
<p>Our service is trusted for its quality and customer satisfaction, delivering exceptional results with attention to detail and excellence.</p>
</div>
    </div>
  
        
    <div className="request--best-three">
<div className="request--flex-img-t">
<div className="request--best-bg"> <img className='request--img-type' src={img3} alt="icons" /> </div>
 <p>03.</p>
</div>

<div className="request--best-h-txt">
<h4>Timely Services</h4>
<p>We prioritize efficiency and punctuality, ensuring your project is completed on time without compromising on quality.</p>
</div>
    </div>
  
        

      

     


     </div>


    </div>
  )
}

export default Request