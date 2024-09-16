import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu'; 
import { RemoveCircleOutline } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);

  const location = useLocation();
  
  
  return (
    <>
    <div className='Navbar'>

        <ul>
            <li>
              <Link to="/">
              <p>AI Courses</p>
              </Link>
              
            </li>
           
            <li className={location.pathname=='/'?'active':''}>
            <Link to="/">
            Educator Programs
            </Link>
            </li>
            <li className={location.pathname=='/workshops'?'active':''}>
            <Link to="/workshops">
            Instructor-Led Work Shops
            </Link>
            </li> 
            <li className={location.pathname=='/enterprise'?'active':''}>
            <Link to="/enterprise">
            Enterprise Solutions 
            </Link>
            </li>
            <li>
              {isOpen==true?<RemoveCircleOutline onClick={()=>setIsOpen(!isOpen)}/>:<Menu onClick={()=>setIsOpen(!isOpen)}/>}
               
            </li>
            
        </ul>

    </div>
    {isOpen ==true  &&
    <div id="bottom-floating-sidebar">
  <ul>
  <li onClick={()=>setIsOpen(false)} className={location.pathname=='/'?'active':''}>
            <Link to="/">
            Educator Programs
            </Link>
            </li>
            <li onClick={()=>setIsOpen(false)} className={location.pathname=='/workshops'?'active':''}>
            <Link to="/workshops">
            Instructor-Led Work Shops
            </Link>
            </li> 
            <li onClick={()=>setIsOpen(false)} className={location.pathname=='/enterprise'?'active':''}>
            <Link to="/enterprise">
            Enterprise Solutions 
            </Link>
            </li>
  </ul>
    </div>
    }
    
    </>
  )
}

export default Navbar