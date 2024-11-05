import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from "../image/Circuit Design and Prototyping.jpg";
import img2 from "../image/Electronic Testing and Troubleshooting.jpg";
import img3 from "../image/Embedded Systems Development.jpg";
import img4 from "../image/Solar Panel Installation and Maintenance.jpg"




const Services = () => {

    const Services =[
        {imgs:img1,name:"Circuit Design", des:"Design and create prototypes for custom electronic circuits, tailored for specific applications, like power management systems, audio amplifiers, or communication devices.", arrow:faArrowRight},
        {imgs:img3,name:"Embedded Systems", des:" Program and integrate microcontrollers and microprocessors into devices, such as IoT solutions, robotics, and automation systems, allowing hardware to run specific functions.", arrow:faArrowRight},
        {imgs:img4, name:"Solar Installation ", des:" Plan, install, and maintain solar panel systems for residential and commercial use, ensuring optimal energy production and integration with existing electrical systems.", arrow:faArrowRight},
        {imgs:img2, name:"Electronics Repair", des:"Diagnose, test, and repair electronic circuits and systems, ensuring they meet performance standards and are free of issues, often using tools like oscilloscopes and multimeters.", arrow:faArrowRight},
    ]


  return (
    <div className='services--container'>
        <div className="services--flex-container">
            
        <div className="services--yellowsh"></div>

        
        <div className="services--grayish"><span></span></div>


    <div className="services--absolute">

      

     
        <div className="services--flex-top">
            <div className="services--h-text"> 
                <p>OUR SERVICES</p>
                <h2>Ideal Solution For Time Consuming Problems</h2>
            </div>


            <div className="services--line-text">
                <div className="services-line"><span></span></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil molestiae dignissimos incidunt perferendis omnis.</p>
            </div>
        </div>
    
         <div className="services--four-cards">
            {
                 Services.map((item,index) =>(
                    <div key={index} className="services--cards">
                    <img className='service-card-img' src={item.imgs} alt={item.name} />

                    <div className="services--card-flex">
                    <h4>{item.name}</h4>
                    <FontAwesomeIcon icon={item.arrow} />

                    </div>
                    <p>{item.des}</p>

                    <div className="services-card-line"><span></span></div>
                </div>
                 ))
            }
         </div>

    
       


        </div>

        










       


        </div>
    </div>
  )
}

export default Services