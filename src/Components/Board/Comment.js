import React from 'react'
import {AiOutlineClose} from "react-icons/ai";

function Comment({loaded,removeComment}) {

 
  return (
    <div>
    {
        loaded().map((comment,index)=>{
          return(
              <section className='user-comment' key={index} >
              <h1 className='visually-hidden'>유저 댓글</h1>  
              <strong>{comment[1].commentData.commentWriter}</strong>
              <p>{comment[1].commentData.commentDetail}</p>
              
              <button className='comment-delete' onClick={(e)=>{
                e.preventDefault()
                
                  const password = prompt('비밀번호를 입력하세요')
                  if(password !== comment[1].commentData.commentPassword){
                    alert('비밀번호가 맞지 않습니다.')
                    return
                  }
                  removeComment(index)
              }
                } ><AiOutlineClose/></button>
              </section>
          )
       })
    }
    </div>
  )
}

export default Comment