// all actions that returns will be  functions  that return maps and ttype is going to be what the action
// actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
// state
const initialState = {
  count: 0,
  name: '',
  id: 0,
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
