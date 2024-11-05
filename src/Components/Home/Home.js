import React from 'react'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  return (
    <div className='home--container'>
        <div className="home-background--image">
        <Navbar/>
            
           <div className="home--textarea">
       <p className='home--work'>Let's Get To Work</p>
       <h2>Hohest, Trustworthy, And Does Good Work</h2>
       <p className="home-little-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod veniam officia fugit, quis accusamus laudantium fuga iste consequ.</p>

       <div className="home-twobuttons">
        <button>Get A Quote</button>
        <button  className='color-btn'>Learn More</button>
       </div>

         <div className="home-clients--reviews">
            <div className="home-clients">

            </div>
            <div className="home-all-stars">
  <div className="home-stars"></div>
  <p className="home-last-text">2.3k reviews</p>
            </div>
         </div>
    
           </div>

        </div>
    </div>
  )
}

export default Home