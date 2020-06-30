// first step
// action what you want to do - they send data from the application to the store
// the only way to change a state

const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,

  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

const login = () => {
  return {
    type: "LOGIN",
  };
};

export { increment, decrement, login };

