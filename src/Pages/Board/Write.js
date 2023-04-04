import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onChangeHandler } from '../../Utils/EventHandler/OnChangeFunction';
import { fetchMatcher } from '../../Utils/fetchHandler';

function Write({ fetchData }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [writer, setWriter] = useState('');
  const [theme, setTheme] = useState('자유');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        fetchMatcher('POST', {
          body: JSON.stringify({
            title: enteredTitle,
            detail: detail,
            writer: writer,
            date: new Date().toLocaleDateString(),
            viewPoint: 0,
            theme: theme,
            password: password,
            commentList: [],
          }),
          header: { 'Content-Type': 'application/json' },
        });

        fetchData();
        navigation('/board');
      }}
      className="write-form"
    >
      <div className="write-desc">
        <input
          type="text"
          id="writer"
          placeholder="작성자"
          value={writer}
          onChange={onChangeHandler(setWriter)}
          maxLength="5"
        />
        <ul className="write-theme-list">
          <li className="write-theme-item">
            <button onClick={onChangeHandler(setTheme, true)}>자유</button>
          </li>
          <li className="write-theme-item">
            <button onClick={onChangeHandler(setTheme, true)}>정보</button>
          </li>
          <li className="write-theme-item">
            <button onClick={onChangeHandler(setTheme, true)}>상상</button>
          </li>
        </ul>
      </div>

      <input
        type="text"
        id="title"
        placeholder="제목을 입력하세요."
        value={enteredTitle}
        onChange={onChangeHandler(setEnteredTitle)}
        maxLength="15"
      />
      <textarea
        name=""
        id="detail"
        placeholder="내용을 입력하세요."
        cols="30"
        rows="10"
        onChange={onChangeHandler(setDetail)}
      ></textarea>
      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangeHandler(setPassword)}
        maxLength="5"
      />

      <button type="submit" className="write-form-submit-button">
        글쓰기
      </button>
    </form>
  );
}

export default Write;
