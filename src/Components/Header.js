import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='global-header'>
        <h2 className='header-logo'>★</h2>
        <nav className='header-nav'>
        <button><Link to={'/'}>홈</Link></button>
        <button><Link to={'/board'}>게시판</Link></button>
        </nav>

        <button className='header-info'><Link to={'/login'}>로그인</Link></button>
    </header>
  )
}

export default Header