import React from 'react'
import Navbar from '../Navbar/Navbar'
import imgs from '../image/software-engineer.jpg'


const Home = () => {
  return (
    <div className='home--container'>
        <div className="home-background--image">
        <Navbar/>
            
           <div className="home--textarea">
       <p className='home--work'>Let's Get To Work</p>
       <h2>Delivering Reliable and Innovative Engineering Solutions</h2>
       <p className="home-little-text">From solar power systems to advanced electronics and automation, we combine quality, innovation, and customer satisfaction to bring your ideas to life.</p>

       <div className="home-twobuttons">
        <button>Get A Quote</button>
        <button  className='color-btn'>Learn More</button>
       </div>

         <div className="home-clients--reviews">
            <div className="home-clients">

            </div>
            <div className="home-all-stars">
  <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
  <div className="home-stars"> <img  className='home--imgs' src={imgs} alt="" /></div>
  <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
  <div className="home-stars"> <img className='home--imgs' src={imgs} alt="" /></div>
  <p className="home-last-text">2.3k reviews</p>
            </div>
         </div>
    
           </div>

        </div>
    </div>
  )
}

export default Home