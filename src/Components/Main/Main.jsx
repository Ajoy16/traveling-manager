import React, { useEffect } from 'react';
import './main.css';
import './main.scss';
import {GrLocation} from 'react-icons/gr';
import {BsClipboardHeart} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'
// data of this
const Data =[
    {
        "img": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Pragser Wildsee, Italy",
        "place": "Italy",
        "price": "$2025",
        "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
        "grade":"CULTURAL RELAX",
         "id" : "01"  
    },

    {
        "img": "https://lp-cms-production.imgix.net/2022-01/Young%20woman%20traveler%20with%20backpack%20traveling%20into%20beautiful%20pagoda%20in%20Wat%20Pra%20Kaew%20Witthaya%20Prasongsin%20GettyImages-1333211288%20rfc.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
        "price": "$2025",
        "place": "Nepal",
        "name": "Nepal",
        "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
        "grade":"CULTURAL RELAX",
         "id" : "02"  

    },
    {
        "img": "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg",
        "name": "Dubai, United Arab Emirates",
        "place": "Dubai",
        "price": "$2025",
        "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
        "grade":"BEACH",
         "id" : "03" 


    },
    {
        "img": "https://images.unsplash.com/photo-1626933777657-212a1b0d0d44?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "kyagar tso Lake Leh Ladakh.",
        "place": "India",
        "price": "$825",
        "description": "Dotted with fascinating coral reefs, the unspoilt beach is a hotspot for water sports. The beautiful beach will steal your heart with its rich and alluring marine life.",
        "grade":"WEEKEND",
         "id" : "04"    
    },
    {
        "img": "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Africa",
        "place": "Africa",
        "price": "$1225",
        "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
        "grade":"CULTURAL RELAX",
         "id" : "05"    
    },
    {
        "img": "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "South Africa",
        "place": "South Africa",
         "price": "$2025",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"CULTURAL RELAX",
         "id" : "06"    
    },

    {
        "img": "https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Niagara Falls, Canada",
        "place": "Canada",
         "price": "$900",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"CULTURAL RELAX",
         "id" : "7"    
    },
    {
        "img": "https://images.unsplash.com/photo-1508591086314-d7deb00cede9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Mount Batur, Indonesia",
        "place": "Indonesia",
         "price": "$500",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"CULTURAL RELAX",
         "id" : "8" 

    },
    {
        "img": "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Vatican City, Rome",
        "place": "Rome,Italy",
         "price": "$500",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"CULTURAL RELAX",
         "id" : "9" 

    },
    {
        "img": "https://images.unsplash.com/photo-1565348271242-2393f74ed8b4?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Suraj tal, Lake,Himachal Pradesh",
        "place": "India",
         "price": "$500",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"CULTURAL RELAX",
         "id" : "12"    
    },
    {
        "img": "https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Канифуши, Maldives",
        "place": "New Zealand",
         "price": "$3500",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"ROMANTIC",
         "id" : "10" 

    },
    {
        "img": "https://images.unsplash.com/photo-1539420183915-57b8a58bd6d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Mount Cook, New Zealand",
        "place": "New Zealand",
         "price": "$1500",
         "description": "Also known as Swaraj Island, Havelock Island is a part of Ritchie’s Archipelago in the Andamans. Its dazzling white sand beaches and fascinating coral reefs are admired by nature lovers from around the world.",
         "grade":"MOUNTAIN",
         "id" : "11" 

    }
    
]
   

const Main = () => {

    // useEffect hook to add a scroll animation
    
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);

    return (
        <section className='main container section'>
              <h1 data-aos="fade-right" className="title">
               Most visited Destinations 
            </h1>
        <div className='secTitle'>
            {/* <h3 data-aos="fade-right" className="title">
               Most visited Destinations 
            </h3> */}
        </div>
          <div className="secContent grid">
            {
                Data.map(({id, img, name, price, place, description, grade}) => {
                  return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                            <img src={img} alt="" />
                        </div>

                        <div className="cardInfo">
                             <h4 className='destTitle'>{name} </h4>
                             <span className='continent flex'>
                             <GrLocation className='icon'/>
                             <span className='name'>{place}</span>
                             </span>

                             <div className='fees flex'>
                             <div className="grade">
                                <span>{grade}<small>+1</small></span>

                             </div>
                             <div className="price">
                                <h5 className='price-in'>{price}</h5>
                             </div>
                             </div>

                             <div className="desc">
                                <p>{description}</p>
                             </div>

                             <button className='btn flex'>
                                Details <BsClipboardHeart className="icon"/>
                             </button>
                        </div>

                    </div>
                  )
                })
            }

          </div>

        </section>
    );
};

export default Main;