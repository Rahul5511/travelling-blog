import React from 'react';
import nature from '../assests/nature.mp4';
import '../assests/css/home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate(); 

    const explore = () => {
        navigate('/loader')
    }

  return (
    <div>
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Adjust as needed
        }}>
        <div style={{ position: 'absolute', zIndex: '1', top: '30%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:"100%" }}>
        <h1 style={{ color: "white",fontSize:"xxx-large",fontWeight:'500' }}>Time for your </h1>
        <h1 style={{ color: "white",marginBottom:'20px',fontSize:"xxx-large" }}>next Adventure</h1>
        <p style={{ color: "white",fontWeight:'bold',marginBottom:'15px' }}>Let us plan it for you</p>
        <button className='glowing-btn' onClick={explore}><span className='glowing-txt'>E<span className='faulty-letter'>X</span>PLORE</span></button>
      </div>
      
        <video autoPlay muted loop style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          }}>
          <source src={nature} type="video/mp4" />
          {/* Add additional <source> elements for other video formats if needed */}
        </video>
        {/* Your content goes here */}
      </div>
    </div>
  )
}

export default Home
