const initialState = [{
  itemID: 0,
  name: "Coins",
  image: "coins.png",
  price: 0,
  haPrice: 0,
  description: "",
  type: "",
  prodTimer: 0,
  prodExp: 0
}]

const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload };
    default:
      return state;
  }
}

export default itemListReducer;