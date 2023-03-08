import React from 'react'
import { Link } from 'react-router-dom'
import authContext from '../Store/auth-context'
import {AiTwotoneHome,AiFillFileText} from "react-icons/ai";
import {BsClipboard2DataFill} from "react-icons/bs";

function Header() {
  return (
    <authContext.Consumer>
      {(authContext)=>{
        return (
        <header className='global-header'>
        
        <nav className='header-nav'>
        <button className='global-header-home-button'><Link to={'/'}><AiTwotoneHome/></Link></button>
        <button className='global-header-board-button'><Link to={'/board'}><BsClipboard2DataFill/></Link></button>
        <button className='global-header-homework-button'><Link to={'/homework'}><AiFillFileText/></Link></button>
        </nav>

      
    </header>
        )
      }}
    
    </authContext.Consumer>
  )
}

export default Header