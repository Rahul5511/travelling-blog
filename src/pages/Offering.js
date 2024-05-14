import React from 'react';
import '../assests/css/offering.css'
import travelImage from '../assests/travelling.png'

const Offering = () => {
  return (
    <div className='offering-container'>
       <div>
         <h2>Travelling Made Easy</h2>
         <p className='travelling-paragraph'>Embark on hassle-free adventures with our travel solutions! Say goodbye to tedious planning and let us handle the details while you focus on making memories. From booking flights and accommodations to arranging activities and transportation, we've got you covered every step of the way. Explore new destinations with confidence and ease, knowing that our experienced team is dedicated to ensuring your journey is smooth and unforgettable. Travel made easy - because every adventure should be a joy from start to finish.</p>
         <div className='button-container'>
          <button className='blog-button'>Travelling Blogs</button>
          <button className='offering-button'>Our Offerings</button>
         </div>
       </div>
       <img src={travelImage} alt='travell'  className='travel-image'/>
    </div>
  )
}

export default Offering
