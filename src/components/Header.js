import React from 'react'
//import tinder_logo from './tinderlogo.png'
import tinder_logo from '../tinderlogo.png'
import '../CustomStyles/IconStyles.css'
import '../CustomStyles/GlobalStyles.css'
import { Person, Forum } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="Header">
            <IconButton>
                <Person fontSize="large" className="HeaderIcons"/>
            </IconButton>
            <img src={tinder_logo} className="LogoImage" alt=""/>
            <IconButton>
                <Forum fontSize="large" className="HeaderIcons"/>
            </IconButton>
        </div>
    )
}

export default Header
