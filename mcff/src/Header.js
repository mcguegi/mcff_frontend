import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon className="header_icon" fontSize='large'/>
        </IconButton>
        
        <Link to="/">
        <img src='https://freepngimg.com/thumb/couple/7-2-couple-png-images-thumb.png' className='header_logo' alt='logo'></img>
        </Link>
        
        <Link to="/chats">
        <IconButton>
        <ForumIcon className="header_icon" fontSize='large'/>
        </IconButton>
        </Link>
    </div>
  )
}

export default Header