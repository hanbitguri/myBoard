import React, { useState } from 'react'

function Write() {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [detail,setDetail] = useState('')
    const [writer,setWriter] = useState('')

  return (
    <form action="" onSubmit={(e)=>{
        e.preventDefault();
        fetch('https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json',{
            method:'POST',
            body:JSON.stringify({
                title:enteredTitle,
                detail:detail,
                writer:writer,
                date:Date.now(),
                viewPoint:0,
                hit:0
            }),
            header:{'Content-Type': 'application/json'}
        })
    }}>
        <input type="text" value={enteredTitle} onChange={(e)=>{
            setEnteredTitle(e.target.value)
        }} />
        <input type="text" value={writer} onChange={(e)=>{
            setWriter(e.target.value)
        }} />
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{
            setDetail(e.target.value)
        }}></textarea>
        <button type="submit">글쓰기</button>
    </form>
  )
}

export default Write