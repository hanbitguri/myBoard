import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Comments({boardItem}) {
    const param = useParams()
    
    console.log(boardItem[param.id].commentList);
    console.log(Object.entries(boardItem[param.id].commentList))

    const loadedComments = Object.entries(boardItem[param.id].commentList)
  return (
    <>
    {
         loadedComments.map((comment)=>{
            return(
                <section className='user-comment'>
                <strong>{comment[1].commentData.commentWriter}</strong>
                <p>{comment[1].commentData.commentDetail}</p>
                </section>
            )
         })
    }
    </>
  )
}

export default Comments