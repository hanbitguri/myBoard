import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Main from './Main';
import Board from './Board';
import Write from '../Components/Write';
import Read from './Read';
import Regist from './Regist';
import LoginForm from './LoginForm';

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
          theme:data[key].theme
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
          <Routes>
          <Route path='/' element={<Main></Main>}/>
          <Route path='/board' element={<Board boardItem={boardItem}></Board>}/>
          <Route path='/board/write' element={<Write></Write>}/>
          <Route path='/board/:id' element={<Read boardItem={boardItem}/>}/>
          <Route path='/regist' element={<Regist/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          </Routes>
          
          
          
        </div>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default Home;
