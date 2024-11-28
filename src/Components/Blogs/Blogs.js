import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import img1 from "../image/why-intallation.webp"
import img2 from "../image/why-mistakes.jpg"
import img3 from "../image/why-morden.jpg"
import img4 from "../image/why-telecommunication.jpg"
const Blogs = () => {


      const blogs=[
        {img:img2 , type:"ELECTRONIC", clip:"Reason why you should avoid mistakes", iconuser:faUser, name:"OURTEAM" , iconclock:faClock, date:"November 5,2024", des:"Small mistakes in electronics can lead to costly repairs and delays. Avoiding them ensures smooth operation and prolongs your equipment’s lifespan."},
        {img:img3 , type:"MORDEN", clip:"Reason why you should avoid mistakes", iconuser:faUser, name:"OURTEAM" , iconclock:faClock, date:"November 5,2024", des:"Small errors in modern systems can cause setbacks, leading to inefficiency, extra costs, and downtime. Preventing mistakes ensures optimal performance and longevity."},
        {img:img1 , type:"INSTALLATION", clip:"Reason why you should avoid mistakes", iconuser:faUser, name:"OURTEAM" , iconclock:faClock, date:"November 5,2024", des:"Even small installation errors can lead to costly delays and repairs. Avoiding them ensures efficiency and long-term reliability"},
        {img:img4 , type:"TELECOMMUNICATION", clip:"Reason why you should avoid mistakes", iconuser:faUser, name:"OURTEAM" , iconclock:faClock, date:"November 5,2024", des:"Small mistakes in telecommunication setups can cause significant disruptions. Avoiding them ensures reliable connections and smooth operations."},
      ]

  return (
    <div className='blogs--container'>
        <p className='blogs--container-p'>BLOGS & ARTICALS</p>
        <h2>Read Our Latest Blogs</h2>

        <div className="blogs--allmap">
            { blogs.map((blogs) => (
                <div className="blogs--mapcard">
                    <img className='blogs--imgs' src={blogs.img} alt="" />

                    <div className="blogs--map-c">
                        <p className='blogs-p-c'>{blogs.type}</p>
                        <h4>{blogs.clip}</h4>
                        <div className="blogs-u-c-flex">
                            <div className="blogs-uc-flex"><FontAwesomeIcon className='blog-icon-gry' icon={blogs.iconuser} /> <p>by<span className='our--span'>{blogs.name}</span></p></div>
                            <div className="blogs-uc-flex"><FontAwesomeIcon className='blog-icon-gry' icon={blogs.iconclock} /> <p>by<span className='our--span'>{blogs.date}</span></p></div>
                        </div>
                        <p className='blogs-des'>{blogs.des}</p>
                    </div>
                </div>
            ))

            }
        </div>
    </div>
  )
}

export default Blogs