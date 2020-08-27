import React from 'react';
import '../css/Header.css';
import icon1 from '../images/airbnb-logo.png';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img className="header-icon" src={icon1} alt=""
            />
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header