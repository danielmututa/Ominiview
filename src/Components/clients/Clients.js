import React, { useState } from 'react'
import img1 from "../image/software-engineer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faStar } from '@fortawesome/free-solid-svg-icons'

const Clients = () => {
    const [currentindex, setCurrentindex] = useState(0);

    const Client = [
        {
            comment: 'Working with this team has been an amazing experience. They truly understand our needs and deliver beyond expectations. Their professionalism and attention to detail make them stand out',
            img: img1,
            name: "Consolata Daria",
            type: 'ENTERPRENEUR',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'The team’s expertise and dedication to our project have been exceptional. They delivered innovative solutions on time, and their attention to detail is unmatched. Highly recommend',
            img: img1,
            name: "Kelvin Musipha",
            type: 'SUPERVISOR, CUSTOMER',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'Working with this team has been a game-changer for our business. Their innovative approach and commitment to excellence made a huge impact on our project’s success. Truly a great partnership!',
            img: img1,
            name: "Isdor Munengwa",
            type: 'CEO & CO-FOUNDER',
            icon: faStar,
            btn: faCircleDot
        },
        {
            comment: 'Exceptional service and results! The team went above and beyond to meet our needs, delivering high-quality work with efficiency and precision. A true partner in our success!',
            img: img1,
            name: "Charls Lungu",
            type: 'ENTERPRENEUR',
            icon: faStar,
            btn: faCircleDot
        }
    ];

    return (
        <div className='client--container'>
            <div className="hussle--flex--top-c">
                <div className="hussle-twofirst">
                    <p>CLIENT SAYS</p>
                    <h2>Happy Customers</h2>
                </div>
                <div className="hussle-linetext">
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
                            <div className="client--rateicons">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} className='client--icons' icon={Client[currentindex].icon} />
                                ))}
                            </div>
                            <p className='client--cmt-p'>{Client[currentindex].comment}</p>
                            <div className="client--line"><span></span></div>
                            <div className="client--cemment-namer">
                                <img className='client--img' src={Client[currentindex].img} alt={Client[currentindex].name} />
                                <div className="client--comment--flex">
                                    <h4>{Client[currentindex].name}</h4>
                                    <p>{Client[currentindex].type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Render the buttons to switch comments */}
                <div className="client--buttons">
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
