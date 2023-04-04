export const onChangeHandler = (setState, option = false) => {
  return e => {
    option && e.preventDefault();
    setState(e.target.value);
  };
};
