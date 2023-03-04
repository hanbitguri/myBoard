import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { onChangeHandler } from '../Utils/EventHandler/OnChangeFunction'

function InputComment({boardItem,fetchData}) {
  const [commentWriter,setCommentWriter] =  useState('')
  const [commentPassword,setCommentPassword] =  useState('')
  const [commentDetail,setCommentDetail] =  useState('')
  
  const param = useParams()
  
  return (
    <form action="" className='input-comment'>
      <div className='comment-user'>
      <input type="text" className='comment-writer' placeholder='닉네임' value={commentWriter} onChange={(e)=>{
        setCommentWriter(e.target.value)
        
      }}/>
      <input type="password" className='comment-password' placeholder='비밀번호' value={commentPassword} onChange={(e)=>{
        setCommentPassword(e.target.value)
        
      }}/>
      </div>
      <textarea className='comment-detail' value={commentDetail} placeholder='댓글을 입력하세요.' onChange={(e)=>{
        setCommentDetail(e.target.value)
        
      }}></textarea>
      <button type='submit' className='comment-submit-button' onClick={(e)=>{
      
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
      
      fetchData()
      

    }}>댓글 등록</button>
    </form>
  )
}

export default InputComment