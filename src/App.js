import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Global/Header';
import Board from './Pages/Board/Board';
import Write from './Pages/Board/Write';
import Read from './Pages/Board/Read';
import Modify from './Pages/Board/Modify';
import Footer from './Components/Global/Footer';
import Main from './Pages/Main';
import Navigation from './Components/Global/Navigation';
import { fetchMatcher } from './Utils/fetchHandler';

function App() {
  const [boardItem, setBoardItem] = useState([]);

  const fetchData = () => {
    fetchMatcher('GET')
      .then(resp => resp.json())
      .then(data => {
        const loadedBoard = [];
        for (const key in data) {
          loadedBoard.unshift({
            id: key,
            title: data[key].title,
            detail: data[key].detail,
            writer: data[key].writer,
            viewPoint: data[key].viewPoint,
            date: data[key].date,
            theme: data[key].theme,
            password: data[key].password,
            commentList: data[key].commentList,
          });
        }
        setBoardItem(loadedBoard);
      });
  };

  useEffect(fetchData, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-12">
            <Header />
            <Navigation />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/board/" element={<Board boardItem={boardItem} />} />
              <Route path="/board/write" element={<Write fetchData={fetchData}></Write>} />
              <Route path="/board/:id" element={<Read boardItem={boardItem} fetchData={fetchData} />} />
              <Route path="/read/:id/modify" element={<Modify boardItem={boardItem} fetchData={fetchData} />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
