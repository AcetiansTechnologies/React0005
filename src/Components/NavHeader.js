import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { Person, Web } from '@mui/icons-material';
import  logoWhite from '../images/logo_white.png'

const NavHeader = () => {
  
  return (
    <>
    <ScrollToTop/>
    <div className='NavHeader'>
            <ul>
                <li>
                    <img className='Nav-Company-logo' src={logoWhite}></img>    
                </li>

                <li>
                      
                </li>
            </ul>
    </div>
    </>
  )
}

export default NavHeader