import React from 'react'

function CommentRemove({removeComment}) {
  return (
    <article className='comment-remove-modal'>
        <h2 className='visually-hidden'>댓글 삭제 모달</h2>
        <input type="password" className='remove-password' placeholder='비밀번호'/>
        <button onClick={removeComment}>확인</button>
    </article>
  )
}

export default CommentRemove