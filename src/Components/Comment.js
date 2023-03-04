import React from 'react'

function Comment({loaded}) {
  return (
    <>
    {
        loaded().map((comment)=>{
          return(
              <section className='user-comment' key={comment[1].name}>
              <h1 className='visually-hidden'>유저 코멘트</h1>  
              <strong>{comment[1].commentData.commentWriter}</strong>
              <p>{comment[1].commentData.commentDetail}</p>
              </section>
          )
       })
    }
    </>
  )
}

export default Comment