import React from 'react';
//import './Header.css';
import icon1 from '../images/airbnb-logo.png';

function Header() {
    return (
        <div className='header'>
            <img className="header-icon" src={icon1} alt=""
            />
        </div>
    )
}

export default Header