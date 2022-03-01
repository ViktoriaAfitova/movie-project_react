import React from 'react';
import Logo from '../MovieLogo/video-camera.png';
import div from './movieLogo.css';

const MovieLogo = () => {
  return (
		<>
			<img className='logo' src={Logo} />
		</>
  )
}

export default MovieLogo;