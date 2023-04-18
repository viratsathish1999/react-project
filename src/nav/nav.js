import React, { useState } from 'react';
import {IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Choose from '../choose/choose';




function Nav(){
    const navigate=useNavigate();
    function compare(){
     navigate("/choose")
    }
    function home(){
        navigate("/")
    }
    return(
        <>
            <nav>
                <div className="image">
                    <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg" alt="no image"></img>
                </div>
                <div>
                    <ul id="navbar">
                        <li onClick={()=>home()}>HOME</li>
                        <li onClick={()=>compare()}>COMPARE CARS</li>
                        <li>REVIEWS&NEWS</li>
                    </ul>
                </div>
                <div className="input">
                    <input type="text" placeholder="search"></input>
                    <SearchIcon/>
                </div>
                <div className='muiicon'>
                <IconButton  >
                    <LocationOnIcon/>
                </IconButton>
                <IconButton >
                    <GTranslateIcon/>
                </IconButton>
                <IconButton >
                    <AccountCircleIcon/>
                </IconButton>
                
                </div>
                {/* <div id="mobile">
                    <i class="fa fa-bars"></i>
                </div> */}
            </nav>
        </>
    )
}

export default Nav;