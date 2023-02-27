import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className='login-section-wrapper'>
    
        <form className='login-form'>
            <h2>Login</h2>
            <input className='login-form-id-input' type="text" placeholder='아이디를 입력하세요'/>
            <input className='login-form-pw-input' type="password" placeholder='비밀번호를 입력하세요'/>
            <button className='login-form-login-button'type='submit'>로그인</button>
            <button className='login-form-regist-button'><Link to={'/regist'}>회원가입</Link></button>
        </form>
    
    </div>
   
  )
}

export default LoginForm