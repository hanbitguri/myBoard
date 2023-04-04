import React, { useState } from 'react'

function Regist() {
  const [userId,setUserId] = useState('')
  const [userPw,setUserPw] = useState('')
  const [userPwQna,setUserPwQna] = useState('')
  const [userPwQnaNum,setUserPwQnaNum] = useState('')
  return (
    <form className='regist-form' onSubmit={()=>{
      fetch('https://react-http-9dfc2-default-rtdb.firebaseio.com/user.json',{
        method:'POST',
        body:JSON.stringify({
          userId:userId,
          userPw:userPw,
          userPwQnaNum:userPwQnaNum,
          userPwQna:userPwQna
        }),
        header:{'Content-Type': 'application/json'}
      })

    }}>
        <span>아이디입력</span>
        <input type="text" placeholder='아이디' className='regist-id' value={userId} onChange={(e)=>{
          
            setUserId(e.target.value)
          
        }} required maxLength={10} minLength={0}/>

        <span>패스워드입력</span>
        <input type="password" placeholder='비밀번호' value={userPw} onChange={(e)=>{
          setUserPw(e.target.value)
        }} required autoComplete='false' maxLength={15} minLength={0}/>
        <input type="password" placeholder='비밀번호 확인' autoComplete='false' maxLength={15} minLength={0}/>
        <select className='select-question' required value={userPwQnaNum} onChange={(e)=>{
            setUserPwQnaNum(e.target.value)
        }}>
            <option value="">비밀번호 찾기 질문</option>
            <option value="1">내가 태어난 나라는?</option>
            <option value="2">내가 졸업한 초등학교 이름은?</option>
            <option value="3">나의 보물 1호는?</option>
        </select>
        <input type="text" placeholder='비밀번호 찾기 답변' value={userPwQna}  onChange={(e)=>{
          setUserPwQna(e.target.value)
        }} required/>
        <button type='submit'>회원가입</button>
    </form>
  )
}

export default Regist