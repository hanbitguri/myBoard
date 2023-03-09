import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import {useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Components/Global/Header';
import Main from './Main/Main';
import Board from './Board/Board';
import Write from '../Components/Board/Write';
import Read from './Board/Read';
import Regist from './Regist';
import LoginForm from './LoginForm';
import Modify from './Board/Modify';
import Footer from '../Components/Global/Footer';
import Homework from './Homework/Homework';


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
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-12 col-lg-12">
          <Routes>
          
          <Route path='/' element={<Main></Main>}/>
          <Route path='/board/' element={<Board boardItem={boardItem} fetchData={fetchData}></Board>}/>
          <Route path='/board/write' element={<Write fetchData={fetchData}></Write>}/>
          <Route path='/board/:id' element={<Read boardItem={boardItem} fetchData={fetchData}/>}/>
          <Route path='/regist' element={<Regist/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/read/:id/modify' element={<Modify boardItem={boardItem} fetchData={fetchData}/>}/>
          <Route path='/homework' element={<Homework/>}/>
          
          
          </Routes>
          
        </div>
      </div>
    </div>
    
    <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default Home;
