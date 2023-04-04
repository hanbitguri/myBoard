import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InputComment from '../../Components/Board/InputComment';
import Comments from '../../Components/Board/Comments';
import { fetchMatcher } from '../../Utils/fetchHandler';
import { onChangeHandler } from '../../Utils/EventHandler/OnChangeFunction';

function Read({ boardItem, fetchData }) {
  const param = useParams();
  const [readPassword, setReadPassword] = useState('');
  const navigate = useNavigate();

  return (
    <form className="read-form">
      <div className="read-form-header">
        <h2>
          [{boardItem[param.id].theme}]{boardItem[param.id].title}
        </h2>
        <span>{boardItem[param.id].writer}</span>
        <span>{boardItem[param.id].date}</span>
        <span>조회수 {boardItem[param.id].viewPoint}</span>
      </div>

      <p className="read-form-main">{boardItem[param.id].detail}</p>

      <div className="read-form-button">
        <input
          type="password"
          id="read-form-auth"
          value={readPassword}
          placeholder="비밀번호"
          onChange={onChangeHandler(setReadPassword)}
        />
        <button
          className="read-form-modify"
          onClick={e => {
            e.preventDefault();
            if (boardItem[param.id].password === readPassword) {
              navigate(`/read/${param.id}/modify`);
            } else {
              alert('비밀번호가 맞지 않습니다.');
            }
          }}
        >
          수정
        </button>
        <button
          className="read-form-remove"
          onClick={e => {
            e.preventDefault();
            if (boardItem[param.id].password === readPassword) {
              fetchMatcher('DELETE', null, boardItem[param.id].id);

              alert('게시글이 정상적으로 삭제되었습니다.');
              fetchData();
              navigate('/board');
            } else {
              alert('비밀번호가 맞지 않습니다.');
            }
          }}
        >
          삭제
        </button>
        <button className="read-form-board">
          <Link to={'/board'}>글목록</Link>
        </button>
      </div>

      <Comments boardItem={boardItem} fetchData={fetchData}></Comments>
      <InputComment boardItem={boardItem} fetchData={fetchData}></InputComment>
    </form>
  );
}

export default Read;
