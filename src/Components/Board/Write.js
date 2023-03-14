import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Write({fetchData}) {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [detail,setDetail] = useState('')
    const [writer,setWriter] = useState('')
    const [theme,setTheme] = useState('자유')
    const [password,setPassword] = useState('')
    const navigation = useNavigate()

  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        fetch('https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json',{
            method:'POST',
            body:JSON.stringify({
                title:enteredTitle,
                detail:detail,
                writer:writer,
                date:(new Date()).toLocaleDateString(),
                viewPoint:0,
                theme:theme,
                password:password,
                commentList:[],
            }),
            header:{'Content-Type': 'application/json'}
        })
        fetchData()
        navigation('/board')
        
    }} className='write-form'>

        <div className='write-desc'>
        <input type="text" id='writer' placeholder='작성자' value={writer} onChange={(e)=>{
            setWriter(e.target.value)
        }} maxLength='5' />
        <ul className='write-theme-list' >
            <li className='write-theme-item'><button onClick={(e)=>{
                e.preventDefault()
                setTheme('자유')
            }}>자유</button></li>
            <li className='write-theme-item'><button onClick={(e)=>{
                e.preventDefault()
                setTheme('정보')
            }}>정보</button></li>
            <li className='write-theme-item'><button onClick={(e)=>{
                e.preventDefault()
                setTheme('상상')
            }}>상상</button></li>
        </ul>
        </div>

        <input type="text" id='title' placeholder='제목을 입력하세요.' value={enteredTitle} onChange={(e)=>{
            setEnteredTitle(e.target.value)
        }} maxLength='15'/>
        <textarea name="" id="detail" placeholder='내용을 입력하세요.' cols="30" rows="10" onChange={(e)=>{
            setDetail(e.target.value)
        }}></textarea>
        <input type="password" id='password' placeholder='비밀번호' value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} maxLength='5' />
        
        <button type="submit" className='write-form-submit-button'>글쓰기</button>
    </form>
  )
}

export default Write
