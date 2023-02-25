import React from 'react'

function Board() {
  return (
    <section className='board-form'>
      <h2 className='board-title'>상상 게시판</h2>
      <div className='board-detail'>
      <ul className='board-detail-list'>
        <li className='board-detail-item'>번호</li>
        <li className='board-detail-item'>제목</li>
        <li className='board-detail-item'>글쓴이</li>
        <li className='board-detail-item'>작성일</li>
        <li className='board-detail-item'>조회</li>
        <li className='board-detail-item'>추천</li>
      </ul>
      </div>
    </section>
  )
}

export default Board