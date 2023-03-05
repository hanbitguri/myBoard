import React from 'react'
import { Link } from 'react-router-dom'
import BoardItem from '../Components/BoardItem'
function Board({boardItem}) {
  
      return(
        <section className='board-form'>
      <div className='board-form-header'>
      <h2 className='board-title'>게시판</h2>
      <button className='board-write'><Link to={'/board/write'}>글쓰기</Link></button>
      </div>
      {/* <div className='board-detail'>
      <ul className='board-detail-list'>
        <li className='board-detail-item'>번호</li>
        <li className='board-detail-item'>제목</li>
        <li className='board-detail-item'>글쓴이</li>
        <li className='board-detail-item'>작성일</li>
        <li className='board-detail-item'>조회</li>
      </ul>
      </div> */}
      <BoardItem boardItem={boardItem}/>
      <span className='paging'>
        <button className='prev-page'>이전페이지</button>
        <button className='next-page'>다음페이지</button>
      </span>
    </section>
      )
    
   
  
}

export default Board