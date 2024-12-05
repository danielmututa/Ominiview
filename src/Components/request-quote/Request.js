import React, { useEffect, useRef } from 'react'
import img1 from "../image/affodable-pricing.png"
import img2 from "../image/ealiest consultaion.png"
import img3 from "../image/ALL-IN-ONE-SERVICE.png"
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Request = () => {
  const bestThreeRefs = useRef([]);

  // const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, 100);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '50px 0px -10% 0px'
      }
    );

    // Get all animated elements
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return ()=>{

    if (scroll) scroll.destroy();
  };
  }, []);



  const bestThreeItems = [
    {
      img: img1,
      number: "01.",
      title: "Licensed Technicians",
      description: "Our team of licensed technicians brings expertise and precision to every project. With a strong commitment to quality, we ensure safe, reliable, and effective solutions tailored to your needs."
    },
    {
      img: img2,
      number: "02.",
      title: "Top Rated Service",
      description: "Our service is trusted for its quality and customer satisfaction, delivering exceptional results with attention to detail and excellence."
    },
    {
      img: img3,
      number: "03.",
      title: "Timely Services",
      description: "We prioritize efficiency and punctuality, ensuring your project is completed on time without compromising on quality."
    }
  ];

  return (
    <div id='allrequest' className='request--container'>
      <div className="request--heading" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
        <p>FOR FREE ESTIMATE!</p>
        <h2>Request A Quote</h2>
      </div>

      <form className="request--allforms"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
        <div className="request--top-form" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px" >
          <input className='request-form-type' placeholder='Your Name*' type="text" />
          <input className='request-form-type' placeholder='Email ID*' type="text" />
          <input className='request-form-type' placeholder='Office Address' type="text" />
        </div>

        <div className="request--bottom-form" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
          <select className='request-form-select' name="myselect" id="">
            <option value="option1">Select Your Work Type</option>
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
        <div className="request--best-why " data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
          <p>PEOPLE TRUST</p>
          <h2>Why We Are the Best</h2>
          <p>Our clients trust us for our commitment to excellence, reliability, and innovative solutions. We consistently exceed expectations, delivering results that matter to your success.</p>
        </div>

        {bestThreeItems.map((item, index) => (
          <div 
            key={index}
            className="request--best-three "
            ref={el => bestThreeRefs.current[index] = el}
            data-scroll data-scroll-repeat data-scroll-offset="100px, 100px"
          >
            <div className="request--flex-img-t">
              <div className="request--best-bg">
                <img className='request--img-type' src={item.img} alt="icons" />
              </div>
              <p>{item.number}</p>
            </div>

            <div className="request--best-h-txt">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Request