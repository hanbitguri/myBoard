import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMatcher } from '../../Utils/fetchHandler';

function Modify({ boardItem, fetchData }) {
  const param = useParams();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [theme, setTheme] = useState('자유');
  const navigation = useNavigate();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        fetchMatcher(
          'PATCH',
          {
            body: JSON.stringify({
              title: enteredTitle,
              detail: detail,
            }),
          },
          boardItem[param.id].id,
        );

        fetchData();
        alert('게시글이 수정되었습니다.');
        navigation('/board');
      }}
      className="modify-form"
    >
      <div className="modify-desc">
        <input
          type="text"
          id="writer"
          placeholder="작성자"
          value={`${boardItem[param.id].writer}`}
          maxLength="5"
          readOnly
        />

        <ul className="modify-theme-list">
          <li className="modify-theme-item">
            <button
              onClick={e => {
                e.preventDefault();
                setTheme('자유');
              }}
            >
              자유
            </button>
          </li>
          <li className="modify-theme-item">
            <button
              onClick={e => {
                e.preventDefault();
                setTheme('정보');
              }}
            >
              정보
            </button>
          </li>
          <li className="modify-theme-item">
            <button
              onClick={e => {
                e.preventDefault();
                setTheme('망상');
              }}
            >
              망상
            </button>
          </li>
        </ul>
      </div>

      <input
        type="text"
        id="title"
        placeholder="제목을 입력하세요."
        value={enteredTitle}
        onChange={e => {
          setEnteredTitle(e.target.value);
        }}
        maxLength="15"
      />
      <textarea
        name=""
        id="detail"
        placeholder="내용을 입력하세요."
        cols="30"
        rows="10"
        onChange={e => {
          setDetail(e.target.value);
        }}
      ></textarea>

      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        value={`${boardItem[param.id].password}`}
        maxLength="5"
        readOnly
      />
      <button type="submit" className="modify-form-submit-button">
        수정하기
      </button>
    </form>
  );
}

export default Modify;
