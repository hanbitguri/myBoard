import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Read({boardItem,fetchData}) {
  const param = useParams()
  const [readPassword,setReadPassword] = useState('')
  const navigate = useNavigate();

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
        <button className='read-form-modify' onClick={()=>{
            if(boardItem[param.id].password === readPassword){
              
              navigate(`/read/${param.id}/modify`)
            }else{
              alert('비밀번호가 맞지 않습니다.')
            }
        }}>수정</button>
        <button className='read-form-remove'  onClick={()=>{
            if(boardItem[param.id].password === readPassword){
              fetch(`https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${boardItem[param.id].id}.json`,{
                method:"DELETE",
              })
              alert('게시글이 삭제되었습니다.')
              fetchData()
              navigate('/board')


            }else{
              alert('비밀번호가 맞지 않습니다.')
            }
        }}>삭제</button>
        <button className='read-form-board'><Link to={'/board'}>글목록</Link></button>
      </div>
    </section>

        
    
    
  )
}

export default Read