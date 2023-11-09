import React, { useEffect } from 'react';
import './footer.css';
import './footer.scss';
import image from '../../Assets/spacex--p-KCm6xB9I-unsplash.jpg';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdTravelExplore} from 'react-icons/md';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css' 

const Footer = () => {
   // useEffect hook to add a scroll animation
    
   useEffect(()=>{
    Aos.init({duration: 2000})
},[]);

    return (
        <section className='footer'>
            <div className="videoDiv">
              <img src={image} alt="" />
            </div>
            <div className='secContent container'>
             <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us </h2>

                </div>
                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text"placeholder='Enter your Email Address' />
                    <button data-aos="fade-up" className='btn flex' type='submit'>
                    SEND <FiSend className='icon'/>
                    </button>
                </div>
                          
             </div>

             <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className='logo flex'> 
                         <MdTravelExplore className='icon'/>  Travel.
                        </a>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                    Traveling is a transformative and enriching experience that allows individuals to explore new places, cultures, and perspectives. 
                    </div>
                    <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className='icon'/>
                        <IoLogoYoutube className='icon'/>
                        <AiFillInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                    </div>

                </div>

              <div className="footerLinks grid">
             
                <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                    <span className="groupTitle">
                    OUR AGENCY
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Services
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Insurance
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                         Agency
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Tourism
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Payment 
                    </li>

                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                    <span className="groupTitle">
                        PARTNERS
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Bookings
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Rentcars
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                         HostelWorld
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Trivago
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        TripAdvisor 
                    </li>

                </div>

                <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                    <span className="groupTitle">
                        LAST MINUTE
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        London
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        California
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                         Indonesia
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Europe
                    </li>

                    <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                         Asia
                    </li>

                </div>

              </div>

              <div className="footerDiv flex">
                <small>Best Travel Website </small>
                <small>COPYRIGHTS RESERVED - AJOY 2023</small>

              </div>


             </div>
            </div>
        </section>
    );
};

export default Footer;