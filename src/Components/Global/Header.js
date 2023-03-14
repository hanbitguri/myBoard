import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
        <header className='global-header'>
        <nav className='header-nav'>
        <button className='global-header-home-button'><Link to={'/'}>hanbitguri</Link></button>
        </nav>
        </header>
        
        )
      
    
    
  
}

export default Header