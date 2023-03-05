import React from 'react'
import { Link } from 'react-router-dom'

function BoardItem({boardItem}) {
  return (
    <ul className='board-item-list'>
        {
        boardItem.map((item,index)=>{
            return (
              <li className='board-item'>
                <Link to={`/board/${index}`} key={item.id} onClick={()=>{
                  fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${item.id}.json`,{
                    method:"PATCH",
                    body:JSON.stringify({
                      viewPoint:item.viewPoint + 1,
                    })
                  })
                }}>
                    <article className='board-item-detail'>

                    <div className='board-item-detail-main'>
                    <h2 className='visually-hidden'>게시판 아이템</h2>
                    <span className='board-item-detail-theme'>[{item.theme}]</span>
                    <strong className='board-item-detail-title'>{item.title}</strong>
                    </div>

                    <dl className='board-item-detail-desc'>
                    <dt>조회수:</dt> <dd>{item.viewPoint}</dd>
                    <dt>게시일:</dt> <dd>{item.date}</dd>
                    <dt>글쓴이:</dt> <dd>{item.writer}</dd>
                    </dl>

                    </article>
                </Link>
              </li>
            )
        
    
        })
        }
    </ul>
        
    
  )
}

export default BoardItem