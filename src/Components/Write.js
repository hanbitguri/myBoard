import React, { useRef, useState } from 'react'

function Write() {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [detail,setDetail] = useState('')
    const [writer,setWriter] = useState('')
    const [theme,setTheme] = useState('')
    const button = useRef();
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
            }),
            header:{'Content-Type': 'application/json'}
        })
    }} className='write-form'>

        <div className='write-desc'>
        <input type="text" id='writer' placeholder='작성자' value={writer} onChange={(e)=>{
            setWriter(e.target.value)
        }} maxLength='5' />
        <ul className='write-theme-list' >
            <li className='write-theme-item'><button ref={button} onClick={(e)=>{
                e.preventDefault()
                setTheme('자유')
            }}>자유</button></li>
            <li className='write-theme-item'><button onClick={(e)=>{
                e.preventDefault()
                setTheme('정보')
            }}>정보</button></li>
            <li className='write-theme-item'><button onClick={(e)=>{
                e.preventDefault()
                setTheme('망상')
            }}>망상</button></li>
        </ul>
        </div>

        <input type="text" id='title' placeholder='제목을 입력하세요.' value={enteredTitle} onChange={(e)=>{
            setEnteredTitle(e.target.value)
        }} maxLength='15'/>
        <textarea name="" id="detail" placeholder='내용을 입력하세요.' cols="30" rows="10" onChange={(e)=>{
            setDetail(e.target.value)
        }}></textarea>
        <button type="submit" className='write-form-submit-button'>글쓰기</button>
    </form>
  )
}

export default Write