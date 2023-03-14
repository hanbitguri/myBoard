import React from 'react'

function BoardSideBar() {
  return (
    <aside className='board-side-bar lg-only sm-hidden'>
        <h2 className='visually-hidden'>게시판 사이드바</h2>
        <div className='board-side-bar-login'>
            <h2>로그인 해주세요.</h2>
            <div>
                <button>회원가입</button>
                <button>로그인</button>
            </div>
        </div>
    </aside>
  )
}

export default BoardSideBar