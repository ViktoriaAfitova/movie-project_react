import React from 'react';
import Logo from '../Header/video-camera.png';
import './header.css';

const Header = () => {
  return (
    <div className='header' onClick={() => window.scroll(0,0)}>
			<div>
        <img className='logo' src={Logo} alt="" />
			</div>
      <div>
        <input
          className="form-control"
          // value={props.value}
          placeholder="Search"
          // onChange={(e) => props.setSearchValue(e.target.value)}
        ></input>
      </div>
    </div>
  )
}

export default Header