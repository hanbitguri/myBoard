import 'bootstrap/dist/css/bootstrap.min.css'; // 그리드 만 빼옴
import { useCallback, useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Main from './Main';
import Board from './Board';
import Write from '../Components/Write';
import Read from './Read';
import Regist from './Regist';
import LoginForm from './LoginForm';
import authContext from '../Store/auth-context';
import Modify from './Modify';
import Footer from '../Components/Footer';

function Home() {
  const [boardItem,setBoardItem] = useState([])
  const [isLogin,setIsLogin] = useState(false);
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
          <Route path='/board' element={<Board boardItem={boardItem}></Board>}/>
          <Route path='/board/write' element={<Write fetchData={fetchData}></Write>}/>
          <Route path='/board/:id' element={<Read boardItem={boardItem} fetchData={fetchData}/>}/>
          <Route path='/regist' element={<Regist/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/read/:id/modify' element={<Modify boardItem={boardItem} fetchData={fetchData}/>}/>
          </Routes>
          
        </div>
      </div>
    </div>
    
    <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default Home;
