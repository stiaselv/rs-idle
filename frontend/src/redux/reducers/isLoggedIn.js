const loggedInReducer = (state = false, action) => {
  switch(action.type) {
    case 'SET_LOGIN':
      return !state;

    default:
      return state
  }
}
export default loggedInReducer;