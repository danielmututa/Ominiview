import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faStar } from '@fortawesome/free-solid-svg-icons'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import enterprenuerone from '../image/enterprenuerone.jpg'
import enterprenuer from '../image/enterprenuer.jpg'
import ceofounder from '../image/ceo-founder.jpg'
import supervisor from '../image/supervisorcustomer.jpg'

const Clients = () => {
    const [currentindex, setCurrentindex] = useState(0);

    const Client = [
        {
            comment: 'Working with this team has been an amazing experience. They truly understand our needs and deliver beyond expectations. Their professionalism and attention to detail make them stand out',
            img: enterprenuer,
            name: "Consolata Daria",
            type: 'ENTERPRENEUR',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'The team’s expertise and dedication to our project have been exceptional. They delivered innovative solutions on time, and their attention to detail is unmatched. Highly recommend',
            img: supervisor,
            name: "Kelvin Musipha",
            type: 'SUPERVISOR, CUSTOMER',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'Working with this team has been a game-changer for our business. Their innovative approach and commitment to excellence made a huge impact on our project’s success. Truly a great partnership!',
            img: ceofounder,
            name: "Isdor Munengwa",
            type: 'CEO & CO-FOUNDER',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'Exceptional service and results! The team went above and beyond to meet our needs, delivering high-quality work with efficiency and precision. A true partner in our success!',
            img:  enterprenuerone,
            name: "Charls Lungu",
            type: 'ENTERPRENEUR',
            icon: faStar,
            btn: faCircleDot
        }
    ];

    useEffect(() => {
        const scroll = new LocomotiveScroll();
        return ()=>{
    
        if (scroll) scroll.destroy();
      };
      }, []);

    return (
        <div id='allclients' className='client--container'>
            <div className="hussle--flex--top-c"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
                <div className="hussle-twofirst"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px" >
                    <p>CLIENT SAYS</p>
                    <h2>Happy Customers</h2>
                </div>
                <div className="hussle-linetext"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
                    <div className='hussle-line'><span></span></div>
                    <div className="hussle--line-p">
                        <p>Our clients trust us for delivering outstanding results. Here's what they have to say about their experiences with our services.</p>
                    </div>
                </div>
            </div>

            <div className="client--btwn-button">
                <div className="client--map-container">
                    {/* Render only the client at currentindex */}
                    <div className="client--flex-map">
                        <div className="client-all-flex">
                            <div className="client--rateicons"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} className='client--icons' icon={Client[currentindex].icon} />
                                ))}
                            </div>
                            <p className='client--cmt-p'  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">{Client[currentindex].comment}</p>
                            <div className="client--line" data-scroll data-scroll-repeat data-scroll-offset="100px, 100px"><span></span></div>
                            <div className="client--cemment-namer"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
                                <img lazy='loading' className='client--img' src={Client[currentindex].img} alt={Client[currentindex].name} />
                                <div className="client--comment--flex">
                                    <h4>{Client[currentindex].name}</h4>
                                    <p>{Client[currentindex].type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Render the buttons to switch comments */}
                <div className="client--buttons"  data-scroll data-scroll-repeat data-scroll-offset="100px, 100px">
    {Client.map((_, index) => (
        <FontAwesomeIcon
            key={index}
            className={`client--btn--switch ${index === currentindex ? 'active' : ''}`}
            icon={faCircleDot}
            onClick={() => setCurrentindex(index)}
        />
    ))}
</div>
            </div>
        </div>
    )
}

export default Clients;
