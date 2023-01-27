const itemGainReducer = (state = 0, action) => {
  switch(action.type){
    case 'NEW_PRODUCTION_TYPE':
      return action.payload;
      
    default:
      return state
  }
}
export default itemGainReducer;