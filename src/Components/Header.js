import React from 'react'

function Header(props) {
  return (
    <header className='global-header'>
        <button className='sidebar'>사이드바</button>
        <h2 className='main-logo'>메인로고</h2>
        <button className='user-info'>유저정보</button>
    </header>
  )
}

export default Header