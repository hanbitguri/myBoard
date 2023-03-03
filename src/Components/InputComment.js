import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { onChangeHandler } from '../Utils/EventHandler/OnChangeFunction'

function InputComment({boardItem}) {
  const [commentWriter,setCommentWriter] =  useState('')
  const [commentPassword,setCommentPassword] =  useState('')
  const [commentDetail,setCommentDetail] =  useState('')
  const [commentData,setComment] = useState({})
  const param = useParams()
  
  return (
    <form action="">
      <input type="text" value={commentWriter} onChange={(e)=>{
        setCommentWriter(e.target.value)
        
      }}/>
      <input type="password" value={commentPassword} onChange={(e)=>{
        setCommentPassword(e.target.value)
        
      }}/>
      <textarea value={commentDetail} onChange={(e)=>{
        setCommentDetail(e.target.value)
        
      }}></textarea>
      <button type='submit' onClick={(e)=>{
      
      e.preventDefault()
      // setComment((prevState)=>{
      //   return(
      //     {
      //       ...prevState,
      //       commentWriter,
      //       commentPassword,
      //       commentDetail
      //     }
      //   ) 
      // })
      if(!boardItem[param.id].commentList){
        fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${boardItem[param.id].id}/commentList.json`,{
        method:"POST",
        body:JSON.stringify({
          commentData:{
            commentWriter,
            commentPassword,
            commentDetail
          }
        }),
      })
      }
      

    }}>등록</button>
    </form>
  )
}

export default InputComment