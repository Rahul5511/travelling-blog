import React, { useEffect } from 'react';
import '../assests/css/loader.css'
import { useNavigate } from 'react-router-dom';

const Loader = () => {
    const navigation = useNavigate()

  useEffect(() => {
   setTimeout(() => {
     navigation('/offer')
   },2800)
  },[])

  return (
    <div>
      <main>
	<div className="preloader">
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
	</div>
	<div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
</main>
    </div>
  )
}

export default Loader;