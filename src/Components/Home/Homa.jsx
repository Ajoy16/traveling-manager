import React, { useEffect } from 'react';
import './home.css';
import './Home.scss';
import video from '../../Assets/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faFilter} from '@fortawesome/free-solid-svg-icons';
import { FiFacebook} from 'react-icons/fi';
import { AiOutlineInstagram} from 'react-icons/ai';
import { FaTripadvisor} from 'react-icons/fa';
import {BsListTask } from 'react-icons/bs';
import { TbApps} from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css'




const Homa = () => {
// useEffect hook to add a scroll animation
    
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


    return (
        <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type ="video/mp4"></video>

        <div className="homeContent container">
            <div className="textDiv">

                {/* <h3 data-aos="fade-up" className='smallText'>
                    Our Packages 
                </h3> */}

                <h1 data-aos="fade-up" className='homeTitle'>
                    Search Your Holidays
                </h1>

            </div>
            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search Your Destination:</label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter name here....' />
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>

                </div>

                <div className="dateInput">
                    <label htmlFor="date">Select your date:</label>
                    <div className="input flex">
                    <input type="date" placeholder='Enter name here....' />
                    </div>
                </div>

                <div className="priceInput">
                   <div className="label_total flex">
                    <label htmlFor="price">Max price:</label>

                    <h3 className='total'>$5000</h3>
                   </div>
                   <div className='input flex'>
                   <input type="range" max="5000" min="1000" />
                   </div>


                </div>
            <div className='searchOptions flex'>
            <FontAwesomeIcon className='icon' icon={faFilter} />
            <span>More Filters</span>
            </div>
            </div>
            <div data-aos="fade-up" className='homeFooterIcons flex'>
                <div className="rightIcons">
                <FiFacebook className="icon"/>
                <AiOutlineInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
                </div>

                <div className="leftIcons">
                <BsListTask className="icon"/>
                <TbApps className="icon"/>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Homa;