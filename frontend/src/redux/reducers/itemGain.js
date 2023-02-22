const initialState = [{
  itemID: 0,
  name: "",
  image: "",
  price: 0,
  haPrice: 0,
  description: "",
  class: "",
  prodTimer: 0,
  prodExp: 0,
  skill: "",
}]

const itemGainReducer = (state = initialState, action) => {
  switch(action.type){
    case 'NEW_PRODUCTION_TYPE':
      return {
        ...state,
        itemID: action.itemID,
        name: action.name,
        image: action.image,
        price: action.price,
        haPrice: action.haPrice,
        description: action.description,
        class: action.class,
        prodTimer: action.prodTimer,
        prodExp: action.prodExp,
        skill: action.skill
      }
      
    default:
      return state
  }
}
export default itemGainReducer;