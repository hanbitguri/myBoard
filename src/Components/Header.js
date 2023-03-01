import React from 'react'
import { Link } from 'react-router-dom'
import authContext from '../Store/auth-context'

function Header() {
  return (
    <authContext.Consumer>
      {(authContext)=>{
        return (
        <header className='global-header'>
        <h2 className='header-logo'>★</h2>
        <nav className='header-nav'>
        <button><Link to={'/'}>홈</Link></button>
        <button><Link to={'/board'}>게시판</Link></button>
        </nav>

        {authContext.isLogin ? <div className='header-user'>회원님</div> : <button className='header-login'><Link to={'/login'}>로그인</Link></button>}
    </header>
        )
      }}
    
    </authContext.Consumer>
  )
}

export default Header