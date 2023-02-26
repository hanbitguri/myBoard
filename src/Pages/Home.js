import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import { useEffect,useState } from 'react';

import Header from '../Components/Header';

import Board from './Board';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  useEffect(()=>{
    fetch('https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json')
    .then(resp=>resp.json())
    .then(data=>{
      const loadedBoard = []
      for(const key in data){
        loadedBoard.push({
          id:key,
          title:data[key].title,
          detail:data[key].detail,
          writer:data[key].writer,
          viewPoint:data[key].viewPoint,
          date:data[key].date,
        })
      }
      setBoardItem(loadedBoard)
    })
  },[])

  const [boardItem,setBoardItem] = useState([])
  console.log(boardItem)
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-12 col-lg-12">
          메인페이지 입니다.
          
          {/* <Board boardItem={boardItem}/>  */}
          
          
          
        </div>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default Home;
