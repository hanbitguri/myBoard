import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Read({boardItem}) {
  const param = useParams()
  const [readPassword,setReadPassword] = useState('')
  return (
    <section className='read-form'>
      <div className='read-form-header'>
      <h2>[{boardItem[param.id].theme}]{boardItem[param.id].title}</h2>
      <span>{boardItem[param.id].writer}</span>
      <span>{boardItem[param.id].date}</span>
      <span>조회수 {boardItem[param.id].viewPoint}</span>
      </div>
      
      <p className='read-form-main'>{boardItem[param.id].detail}</p>

      <div className='read-form-button'>
        <input type="password" id='read-form-auth' value={readPassword} placeholder='비밀번호' onChange={(e)=>{
          setReadPassword(e.target.value)
        }}/>
        <button className='read-form-modify'>수정</button>
        <button className='read-form-remove'  onClick={()=>{
            if(boardItem[param.id].password === readPassword){
              fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${boardItem[param.id].id}.json`,{
                method:"DELETE",
              })
              
            }else{
              alert('비번틀렸어연')
              
              
            }
        }}>삭제</button>
        <button className='read-form-board'><Link to={'/board'}>글목록</Link></button>
      </div>
    </section>

        
    
    
  )
}

export default Read