import React from 'react'
import header from '../images/traing-header.jpg';

const Header = ({title,description,bgImage}) => {
  return (
    <div className='header-backgound' style={{ backgroundImage: `url(${bgImage})` }}>

      <div className='header-content'>
        <h1>{title}</h1>
        <p>{description}
        </p>
      </div>
        
    </div>
  )
}

export default Header