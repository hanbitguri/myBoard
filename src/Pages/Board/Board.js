import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BoardItem from '../../Components/Board/BoardItem'

function Board({boardItem,fetchData}) {
      
      useEffect(fetchData,[])
      const [firstIndex,setFirstIndex] = useState(0)
      const [lastIndex,setLastIndex] = useState(10)

      const totalPage = Math.ceil(boardItem.length / 10) 
      const [page,setPage] = useState(1)
          
      
      const sliceBoard = (boardItem) =>{
        return boardItem.slice(firstIndex,lastIndex)
      }
      
      const post = []
      for(let i=0 ; i<Math.ceil((sliceBoard(boardItem).length*10)/10);i++){
        post.push(sliceBoard(boardItem)[i])
      }
      
      return(
      
      <section className='board-form'>
        <div className='board-form-header'>
          <h2 className='board-title'>게시판</h2>
          <button className='board-write'><Link to={'/board/write'}>글쓰기</Link></button>
        </div>
       
      <BoardItem boardItem={post}/>

      <span className='paging'>
        <button className='prev-page' disabled={firstIndex===0} onClick={()=>{
          setPage(page-1)
          setFirstIndex(firstIndex-10)
          setLastIndex(lastIndex-10)
        }}>prev</button>
        <button className='next-page' disabled={page===totalPage} onClick={()=>{
          setPage(page+1)
          setFirstIndex(firstIndex+10)
          setLastIndex(lastIndex+10)
        }}>next</button>
      </span>
    </section>
    
      )
    
   
  
}

export default Board