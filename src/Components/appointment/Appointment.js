import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Appointment = () => {
  return (
    <div className='appointment--container'>

  <div className="appointment--left-side">

    <div className="appointment--inner-left-side">

        <div className="appointment--top-flex">
     <p>BOOK AN APPOINTMENT</p>
 <div className="appointment--line"><span></span></div>
        </div>

        <h2>Let's Start A Project With Our Team!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, maiores. Officiis consectetur cupiditate, veritatis atque corrupti earum! Ea natus suscipit, corporis molestias rem autem, est culpa voluptatem impedit voluptates i?</p>

       
    </div>


    <div className="appointment--bg-yw">
          
          <div className="appointment-w-bg-icon"><FontAwesomeIcon  className='appointment--icon-color' icon={faEnvelopeOpenText} /></div>
<div className="appointment--emails-cont">
    <p className='appointment--p-small'>Need Any Help?</p>
    <p className='appiontment--p--c-p'>Call: +263 776750714</p>
</div>


          <div className="appointment-w-bg-icon"><FontAwesomeIcon  className='appointment--icon-color' icon={faPhone} /></div>
<div className="appointment--emails-cont">
    <p className='appointment--p-small'>Email Us Anytime</p>
    <p className='appiontment--p--c-p'>mututadaniel54@gmail.com</p>
</div>
        </div>

  </div>

   
     <form className="appointment--form-container">
        <div className="appointment-two-inputs">
            <input className='appointment-inputs' placeholder='Your Name*' type="text" />
            <input className='appointment-inputs' placeholder='Phone No_*' type="text" />
        </div>
        <input className='appointment--email'  placeholder='Your Email*' type="text" />
       <textarea type="text" placeholder='Your Message'  className="appointment--message"  name="" id="" />
       <div className="appointment--button"><button type='submit'>BOOK APPOINTMENT</button></div>
     </form>



    </div>
  )
}

export default Appointment