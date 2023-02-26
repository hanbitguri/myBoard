import React from 'react'

function BoardItem({boardItem}) {
  return (
    <>
        {
        boardItem.map((item,index)=>{
            return (
                <div className='board-item' key={item.id}>
                <ul className='board-item-list'>
                    <div className='board-item-main'>
                    {/* <li>{index}</li> */}
                    <li className='board-item-theme'>[자유]</li>
                    <li >{item.title}</li>
                    </div>
                    <div className='board-item-desc'>
                    <li>조회수: {item.viewPoint}</li>
                    <li >게시일: {item.date}</li>
                    <li >글쓴이: {item.writer}</li>
                    </div>
                </ul>
                </div>
            )
        
    
        })
        }
    </>
        
    
  )
}

export default BoardItem