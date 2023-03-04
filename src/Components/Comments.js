import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import CommentEmpty from './CommentEmpty'


function Comments({boardItem}) {
    const param = useParams()
    const [commentCount,setCommentCount] = useState(0)
    //const isComment = Object.keys(boardItem[param.id].commentList).length
    const removeComment = () => {
      fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${boardItem[param.id].id}/commentList.json`,{
        method:"DELETE",
      })
    }
    const isComments = () =>{
      if(!boardItem[param.id].commentList){
        return 
      }
      return Object.keys(boardItem[param.id].commentList).length
    }
    const loaded = () => {
      if(!boardItem[param.id].commentList){
        return 
      }
      return Object.entries(boardItem[param.id].commentList)
    }
    //const loadedComments = Object.entries(boardItem[param.id].commentList)

    useEffect(()=>{
      if(!boardItem[param.id].commentList){
        return 
      }
      setCommentCount(Object.keys(boardItem[param.id].commentList).length)
    },[])
  return (
    <>
    <span className='comment-count'>전체댓글 {commentCount}개</span>
    {
      isComments() > 0 ? <Comment loaded={loaded}/> : <CommentEmpty/>
     }
   
    
    </>
  )
}

export default Comments