import React from 'react'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import img1 from "../image/Electric-system.jpg";
import img2 from "../image/electric-circuit.jpg";
import img3 from "../image/morden-project.jpg";
import img4 from "../image/telecommunication.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Portfolio = () => {


   const Pproducts = [
    {img:img1, type:"ELECTRIC SYSTEM", des:"Commercial electric project", icon:faGreaterThan},
    {img:img2, type:"ELECTRIC SECURITY", des:"Commercial electric project", icon:faGreaterThan},
    {img:img3, type:"MORDEN PROJECT", des:"Commercial electric project", icon:faGreaterThan},
    {img:img4, type:"TELECOMMUNICATION", des:"Commercial electric project", icon:faGreaterThan}
   ]


  return (
    <div className='portfolio--container'>
     

<div className="hussle--flex--top-c">

                    <div className="hussle-twofirst">
                    <p>OUR PORTFOLIO</p>
                    <h2>Explore Our Recent Projects</h2>
                     </div>

                     <div className="hussle-linetext">
      <div className='hussle-line'><span></span></div>
      <div className="hussle--line-p">
        <p>Discover the innovative solutions we've delivered across various industries. Each project reflects our commitment to quality, efficiency, and client satisfaction.</p>
      </div>
    </div>

</div>



     <div className="porfolio--allprojects">
        {  Pproducts.map((item) => (
  
         <div className="portfolio-c-map">
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