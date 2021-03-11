import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import './Header.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <img src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png" alt=""/>
            <div className="header-search">
                    <SearchIcon/>
                <input type="text"/>
            </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={PersonIcon} title='Me'/>
            </div>
        </div>
    )
}

export default Header
