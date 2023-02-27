import React from 'react'
import { useParams } from 'react-router-dom'


function Read({boardItem}) {
  const param = useParams()
  
  return (
    <section className='read-form'>
      <div className='read-form-header'>
      <h2>[{boardItem[param.id].theme}]{boardItem[param.id].title}</h2>
      <span>{boardItem[param.id].writer}</span>
      <span>{boardItem[param.id].date}</span>
      <span>조회수 {boardItem[param.id].viewPoint}</span>
      </div>
      
      <p className='read-form-main'>{boardItem[param.id].detail}</p>
    </section>

        
    
    
  )
}

export default Read