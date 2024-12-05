// import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import imgs from '../image/software-engineer.jpg'


// const Home = () => {
//   return (
//     <div className='home--container'>
//         <div className="home-background--image">
//         <Navbar/>
            
//            <div className="home--textarea">
//        <p className='home--work'>Let's Get To Work</p>
//        <h2>Delivering Reliable and Innovative Engineering Solutions</h2>
//        <p className="home-little-text">From solar power systems to advanced electronics and automation, we combine quality, innovation, and customer satisfaction to bring your ideas to life.</p>

//        <div className="home-twobuttons">
//         <button>Get A Quote</button>
//         <button  className='color-btn'>Learn More</button>
//        </div>

//          <div className="home-clients--reviews">
//             <div className="home-clients">

//             </div>
//             <div className="home-all-stars">
//   <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
//   <div className="home-stars"> <img  className='home--imgs' src={imgs} alt="" /></div>
//   <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
//   <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
//   <p className="home-last-text">2.3k reviews</p>
//             </div>
//          </div>
    
//            </div>

//         </div>
//     </div>
//   )
// }

// export default Home







import React, { useState, useEffect } from 'react';
import img1 from '../image/banner-img01.jpg';
import img2 from '../image/banner-img02.jpg';
import img4 from '../image/banner-repairandservices.jpg';
import img3 from '../image/banner--security.jpg';
 import Navbar from '../Navbar/Navbar'
 import clientone from '../image/client-one.jpg'
 import clienttwo from '../image/client-two.jpg'
 import clientthree from '../image/client-three.jpg'
 import clientfour from '../image/clientt-four.jpg'

const Home = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [barIndex, setBarIndex] = useState(0);

  const images = [
    { id: 1,btn:'Learn More', src: img1, text: "Harness the Power of the Sun with our expert solar installation services, providing clean and renewable energy solutions for a brighter tomorrow." },
    { id: 2,btn:'Learn More', src: img2, text: "Connecting You to the World with our reliable telecom solutions, providing fast and secure connections for your home and business." },
    { id: 3,btn:'Learn More', src: img3, text: "Protecting Your Home and Business with our electrical security solutions, providing peace of mind and safeguarding your property with our expert electrical security systems." },
    { id: 4,btn:'Learn More', src: img4, text: "Fast and Reliable Repair and Maintenance Services for your electrical and telecom systems, keeping your systems running smoothly and efficiently with our expert repair and maintenance solutions." },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
      if (progress >= 100) {
        setProgress(0);
        setBarIndex((prevBarIndex) => prevBarIndex + 1);
        setActiveImage((prevActiveImage) => prevActiveImage + 1);
        if (barIndex >= 3) {
          setBarIndex(0);
          setActiveImage(0);
        }
      }
    }, 40);
    return () => clearInterval(intervalId);
  }, [progress, barIndex, activeImage]);

  return (
    <div id='allhome' className="home-section">

      
      <div className="banner-image-container">
        <div className="banner-navbar">

      <Navbar/>
        </div>
        <img  src={images[activeImage].src} alt={images[activeImage].text} className="homebanner-image" />

       <div className="bannerhome--text-container">
        <div className="banner-text-container">
        <p className="text">{images[activeImage].text}</p>
      
        <div className="home-all-stars">
 <div lazy='loading' className="home-stars"> <img className='home--imgs' src={clientone} alt="" /></div>
 <div lazy='loading' className="home-starsone"> <img  className='home--imgs' src={ clienttwo} alt="" /></div>
 <div lazy='loading' className="home-starstwo"> <img className='home--imgs' src={clientthree} alt="" /></div>
 <div lazy='loading' className="home-starsthree"> <img className='home--imgs' src={clientfour} alt="" /></div>
           </div>
 <p className="home-stars-textfour">2.3k reviews</p>

           <button lazy='loading' className="banner-button">{images[activeImage].btn}</button>
      </div>
      </div>

<div className="banner-all-progressbars">
  
     
<div className="progress-bars">
  {Array(4)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{
            width: `${index === barIndex ? progress : 100}%`,
            backgroundColor: index === barIndex ? ' #FFC527' : '#ffc5273f',
          }}
        />
      </div>
    ))}
</div>
      
      </div>

      </div>

      
   
    </div>
  );
};

export default Home;

