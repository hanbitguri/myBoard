import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import {useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Header from '../Components/Global/Header';

import Board from './Board/Board';
import Write from '../Components/Board/Write';
import Read from './Board/Read';

import Modify from './Board/Modify';
import Footer from '../Components/Global/Footer';
import Main from './Main/Main';
import Navigation from '../Components/Global/Navigation';
import BoardSideBar from '../Components/Board/BoardSideBar';


function Home() {
  const [boardItem,setBoardItem] = useState([])
  
  
  const fetchData = () =>{
    console.log('fetch data')
    fetch('https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json')
    .then(resp=>resp.json())
    .then(data=>{
      const loadedBoard = []
      for(const key in data){
        loadedBoard.unshift({
          id:key,
          title:data[key].title,
          detail:data[key].detail,
          writer:data[key].writer,
          viewPoint:data[key].viewPoint,
          date:data[key].date,
          theme:data[key].theme,
          password:data[key].password,
          commentList:data[key].commentList,
        })
      }
      setBoardItem(loadedBoard)
      console.log(loadedBoard)
      
    })
  }
  
  useEffect(fetchData,[])
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-lg-12">
          <Header/>
          {(window.location.pathname) && <Navigation/>}
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/board/' element={
          
          <Board boardItem={boardItem} fetchData={fetchData}/>
          
          }/>
          <Route path='/board/write' element={<Write fetchData={fetchData}></Write>}/>
          <Route path='/board/:id' element={<Read boardItem={boardItem} fetchData={fetchData}/>}/>
          <Route path='/read/:id/modify' element={<Modify boardItem={boardItem} fetchData={fetchData}/>}/>
          </Routes>
        </div>
      </div>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default Home;
