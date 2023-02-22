const initialState = {
  items: []
}

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INVENTORY':
      return {
        ...state,
        items: action.payload
      }
    case 'UPDATE_INVENTORY':
      const { name, increment, decrementItems } = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
          if (item.name === name) {
            return {
              ...item,
              quantity: Math.max(0, item.quantity + increment)
            }
          } else if (decrementItems.includes(item.name)) {
            return {
              ...item,
              quantity: Math.max(0, item.quantity - 5)
            }
          } else {
            return item;
          }
        })
      }
    default:
      return state;
  }
}

export default inventoryReducer;
