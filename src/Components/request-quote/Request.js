
import React from 'react'
import img1 from "../image/affodable-pricing.png"
import img2 from "../image/ealiest consultaion.png"
import img3 from "../image/ALL-IN-ONE-SERVICE.png"

const Request = () => {


const requestbest = [
{img:img1, number:"01.", heading:"Licensed Technicians", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, alias vel tenetur architecto deleniti eveniet"},
{img:img2, number:"02.", heading:"Top Rated Service", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, alias vel tenetur architecto deleniti eveniet"},
{img:img3, number:"03.", heading:"Timely Services", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, alias vel tenetur architecto deleniti eveniet"}

]

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
        <h2>Why We Are Best</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis velit aperiam quod quos</p>
      </div>



      <div className="request--best-all">

{
  requestbest.map((item) => (
    <div className="request--best-three">

<div className="request--flex-img-t">
<div className="request--best-bg"> <img className='request--img-type' src={item.img} alt="icons" /> </div>
 <p>{item.number}</p>
</div>

<div className="request--best-h-txt">
<h4>{item.heading}</h4>
<p>{item.des}</p>
</div>

    </div>
  ))
}
        

      </div>

     


     </div>


    </div>
  )
}

export default Request