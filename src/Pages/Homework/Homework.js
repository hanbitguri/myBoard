import React from 'react'

function Homework() {
  return (
    <article className='homework'>
        <h1 className='visually-hidden'>개발 성장과정 리스트</h1>

        <h2 className='homework-title'>Homework</h2>
        <span className='homework-number'>목차.</span>
        <ol className='homework-list'>
            <li className='homework-item'>
                <span>220923</span>
                <a href="https://hanbitguri.github.io/js-tomorrow-house" target='_blank'>오늘의 집 클론코딩 프로젝트</a>
            </li>
            <li className='homework-item'>
                <span>221204</span>
                <a href="https://github.com/hanbitguri/js-dropdown" target='_blank'>JS-드랍다운 만들어보기</a>
            </li>
            <li className='homework-item'>
                <span>221205</span>
                <a href="https://github.com/hanbitguri/js-signup-checklist" target='_blank'>JS-가입약관폼 만들어보기</a>
            </li>
            <span className='homework-list-contour'>-</span>
            <li className='homework-item'>
                <span>230122</span>
                <a href="https://hanbitguri.github.io/js-moonbucks-menu" target='_blank'>JS-문벅스메뉴판 따라만들기</a>
            </li>
            <li className='homework-item'>
                <span>230301</span>
                <a href="https://hanbitguri.github.io/mylog" target='_blank'>리액트/firebase로 만든 게시판 블로그</a>
            </li>  
        </ol>

    </article>
  )
}

export default Homework