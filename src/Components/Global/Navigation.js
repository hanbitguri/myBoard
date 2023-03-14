import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    
  return (
    <nav className='global-nav'>
        <ul className='global-nav-list'>
            <Link to='/'><li className='global-nav-item'>🏠Home</li></Link>
            <Link to='/board'><li className='global-nav-item'>📝게시판</li></Link>
            <Link to='https://velog.io/@hanbitguri' target={'_blank'}><li className='global-nav-item'>🚀Velog</li></Link>
            <Link to='https://github.com/hanbitguri' target={'_blank'}><li className='global-nav-item'>🚀GitHub</li></Link>
        </ul>
    </nav>
  )
}

export default Navigation