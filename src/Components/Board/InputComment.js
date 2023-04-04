import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { onChangeHandler } from '../../Utils/EventHandler/OnChangeFunction';
import { fetchMatcher } from '../../Utils/fetchHandler';

function InputComment({ boardItem, fetchData }) {
  const [commentWriter, setCommentWriter] = useState('');
  const [commentPassword, setCommentPassword] = useState('');
  const [commentDetail, setCommentDetail] = useState('');

  const param = useParams();

  return (
    <form action="" className="input-comment">
      <div className="comment-user">
        <input
          type="text"
          className="comment-writer"
          placeholder="닉네임"
          maxLength={20}
          value={commentWriter}
          onChange={onChangeHandler(setCommentWriter)}
        />
        <input
          type="password"
          className="comment-password"
          placeholder="비밀번호"
          maxLength={10}
          value={commentPassword}
          onChange={onChangeHandler(setCommentPassword)}
        />
      </div>
      <textarea
        className="comment-detail"
        value={commentDetail}
        placeholder="댓글을 입력하세요."
        maxLength={200}
        onChange={onChangeHandler(setCommentDetail)}
      ></textarea>
      <button
        type="submit"
        className="comment-submit-button"
        onClick={e => {
          e.preventDefault();
          fetchMatcher(
            'COMMENT-ADD',
            {
              body: JSON.stringify({
                commentData: {
                  commentWriter,
                  commentPassword,
                  commentDetail,
                },
              }),
            },
            boardItem[param.id].id,
          ).then(() => {
            fetchData();
          });
        }}
      >
        댓글 등록
      </button>
    </form>
  );
}

export default InputComment;
