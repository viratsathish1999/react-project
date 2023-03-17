import React, { useState } from 'react';
import {IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GTranslateIcon from '@mui/icons-material/GTranslate';



function Nav(){
    return(
        <>
            <nav>
                <div className="image">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg" alt="no image"></img>
                </div>
                <div>
                    <ul id="navbar">
                        <li>NEW CARS</li>
                        <li>USED CARS</li>
                        <li>REVIEWS&NEWS</li>
                    </ul>
                </div>
                <div className="input">
                    <input type="text" placeholder="search"></input>
                </div>
                <div className='muiicon'>
                <IconButton color="primary" >
                    <LocationOnIcon/>
                </IconButton>
                <IconButton color="primary" >
                    <AccountCircleIcon/>
                </IconButton>
                <IconButton color="primary" >
                    <GTranslateIcon/>
                </IconButton>
                </div>
                <div id="mobile">
                    <i class="fa fa-bars"></i>
                </div>
            </nav>
        </>
    )
}

export default Nav;