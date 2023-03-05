import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BoardItem from '../Components/BoardItem'
function Board({boardItem}) {
  
      const [page,setPage] = useState(1)

      return(
      <section className='board-form'>
        <div className='board-form-header'>
          <h2 className='board-title'>게시판</h2>
          <button className='board-write'><Link to={'/board/write'}>글쓰기</Link></button>
        </div>
     
      <BoardItem boardItem={boardItem}/>
      <span className='paging'>
        <button className='prev-page'>이전페이지</button>
        <button className='next-page'>다음페이지</button>
      </span>
    </section>
      )
    
   
  
}

export default Board