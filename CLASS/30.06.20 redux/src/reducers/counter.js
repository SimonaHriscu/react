// 2. step
// creating reducers
// to specify how the state tree is transformed ny actions you write pure reducers
//  reducer Will check which action has been dispatched and then modify the state

const counter = (state = 10, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counter;
