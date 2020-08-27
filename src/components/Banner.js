import React from 'react';
import '../css/Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner_search'>
                <Button className="banner_searchButton"
                varient='outlined'>Search Dates</Button>
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <h5 className='banner_button'>
                    Explore nearby
                </h5>
            </div>
        </div>
    )
}

export default Banner