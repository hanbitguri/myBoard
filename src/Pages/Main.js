import React from 'react'

function Main() {
  return (
    <main className='main-page'>
      <p className='main-intro'>
        안녕하세요! 저는 프론트엔드 엔지니어를 꿈꾸는 <strong>전한빛</strong> 입니다. <br/>
      이 블로그는 제 성장과정을 공유하는 공간입니다.  <br/>
      제가 어떤 기술과 프로젝트를 수행했는지를 확인하실 수 있습니다. <br/>
      </p>
      <div className='main-tech-stack'></div>
      <h2>Tech Stack</h2>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <div className='main-project-category'>
        <h2>프로젝트 카테고리</h2>
        <ul>
          <li>개인 블로그 (myLog)</li>
          <li>오늘의 집 클론 (내일의 집)</li>
        </ul>
        <span>위 카테고리를 클릭하시면 해당하는 포트폴리오 목록을 확인하실 수 있습니다.</span>
      </div>
      

      

    </main>
  )
}

export default Main