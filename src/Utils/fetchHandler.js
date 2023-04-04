const urlMatcher = (type, optional, optional2) => {
  switch (type) {
    case 'GET':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json`;
    case 'POST':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json`;
    case 'PATCH':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${optional}.json`;
    case 'DELETE':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${optional}.json`;
    case 'COMMENT-ADD':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${optional}/commentList.json`;
    case 'COMMENT-DELETE':
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post/${optional}/commentList/${optional2}.json`;
    default:
      return `https://react-http-9dfc2-default-rtdb.firebaseio.com/post.json`;
  }
};

export const fetchMatcher = (type, metaData, urlOption, urlOption2) => {
  return fetch(urlMatcher(type, urlOption, urlOption2), {
    method: type === 'COMMENT-ADD' ? 'POST' : type,
    ...metaData,
  });
};
