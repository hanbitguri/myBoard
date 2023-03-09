import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { CiInstagram } from "react-icons/ci";
import { AiFillHtml5,} from "react-icons/ai";
import { FaReact} from "react-icons/fa";
import { DiJavascript} from "react-icons/di";
import { Link } from 'react-router-dom';



function Main() {
  return (
    <main className='main-page'>
      <p className='main-intro'>
        안녕하세요! <br/>저는 프론트엔드 엔지니어를 꿈꾸는 <strong>전한빛</strong> 입니다. <br/>
      이 블로그는 제 성장과정을 공유하는 공간입니다.  <br/>
      이곳에서 제가 어떤 기술과 프로젝트를 수행했는지를 확인하실 수 있습니다. <br/>
      </p>
      <div className='main-tech-stack'>

      <h2>Tech Stack</h2>
      <ul>
        <li><AiFillHtml5/>HTML/CSS/SCSS</li>
        <li><DiJavascript/>JavaScript</li>
        <li><FaReact/>React</li>
      </ul>
      </div>

      <div className='main-project-category'>
        <h2>프로젝트 카테고리</h2>
           <span><Link to='/homework'>클릭하여 프로젝트 보러가기</Link></span>
      </div>

      <div className='main-social'>
        <h2>소셜 미디어</h2>
        <ul>
          <li><DiGithubBadge className='main-social-git'/><a href="http://github.com/hanbitguri">github.com/hanbitguri</a></li>
          <li><CiInstagram/><a href="https://www.instagram.com/">instagram.com/hanbitguri</a></li>
        </ul>
      </div>
      

      

    </main>
  )
}

export default Main