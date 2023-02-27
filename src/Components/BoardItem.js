import React from 'react'
import { Link } from 'react-router-dom'

function BoardItem({boardItem}) {
  return (
    <>
        {
        boardItem.map((item,index)=>{
            return (
                <Link to={`/board/${index}`} className='board-item' key={item.id} onClick={()=>{
                  fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${item.id}.json`,{
                    method:"PATCH",
                    body:JSON.stringify({
                      viewPoint:item.viewPoint + 1,
                    })
                  })

                }}>
                <ul className='board-item-list'>
                    <div className='board-item-main'>
                    {/* <li>{index}</li> */}
                    <li className='board-item-theme'>[{item.theme}]</li>
                    <li >{item.title}</li>
                    </div>
                    <div className='board-item-desc'>
                    <li>조회수: {item.viewPoint}</li>
                    <li>게시일: {item.date}</li>
                    <li>글쓴이: {item.writer}</li>
                    </div>
                </ul>
                </Link>
            )
        
    
        })
        }
    </>
        
    
  )
}

export default BoardItem