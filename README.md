

<br/>
<p align="middle">
  <img width="250px;" src="https://user-images.githubusercontent.com/107792728/225027616-af7d5fa0-0211-4cea-892b-4a3107951525.png"/>
</p>
<h2 align="middle">myBoard</h2>
<p align="middle">React/Firebase로 구현 하는 CRUD 가능한 게시판앱</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/framework-react-blue"/>
  <img src="https://img.shields.io/badge/database-firebase-orange"/>
  <a href="https://github.com/blackcoffee-study/js-lv1-book-manual/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/blackcoffee-study/moonbucks-menu.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

<br/>


<p align="middle">
  <a href="https://hanbitguri.github.io/myBoard">🖥️ 링크</a>
</p>

<br/>

## 🎯 요구사항1 - 웹 설계하기

- [ ] 부트스트랩 그리드 시스템을 이용하여 화면 레이아웃을 잡는다.
  - [ ] 반응형 웹 설계를 한다. ( 모바일 , 데스크탑 )
  - [ ] active,hover,focus 상태도 고려한다 ( 모바일 , 데스크탑 )
- [ ] 리액트 라우터를 이용하여 SPA로 만든다.
- [ ] 함수형 컴포넌트로 제작한다.
  - [ ] 리액트 키 컨셉에 맞게 여러 hook도 사용해본다.
- [ ] firebase rtd 를 이용해서 CRUD가 되는 게시판을 만들어본다.

## 🎯 요구사항2 - 게시판 설계하기

- [ ] 게시판 기본 CRUD를 설계한다.
  - [ ] 댓글 CRUD도 설계한다.




## 📝 firebase API


### CREATE

| method | fetch url                    |
| ------ | ---------------------------- |
| POST   | https://${개인 firebase 해쉬 값}.firebaseio.com/post.json |

```javascript
{
commentList:{}
date,
detail,
id,
password,
theme,
title,
viewPoint,
writer,
}

```

### UPDATE

| method | uri                                  |
| ------ | ------------------------------------ |
| PATCH   | https://${개인 firebase 해쉬 값}.firebaseio.com/post.json  |


### DELETE

| method | uri                          |
| ------ | ---------------------------- |
| DELETE  | https://${개인 firebase 해쉬 값}.firebaseio.com/post.json |


<br/>

## 🐞 Issues

-[ ] active,hover,focus css처리가 아직 되지않았다.


