const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INVENTORY_ITEMS":
      const { itemIdToSubtract, itemIdToAdd, quantityToSubtract, quantityToAdd } = action.payload;
      const subtractedItem = state.inventory.find(item => item.itemID === itemIdToSubtract);
      const addedItem = state.inventory.find(item => item.itemID === itemIdToAdd);
      const newInventory = state.inventory.map(item => {
        if (item.itemID === itemIdToSubtract) {
          return { ...item, quantity: item.quantity - quantityToSubtract };
        } else if (item.itemID === itemIdToAdd) {
          return { ...item, quantity: item.quantity + quantityToAdd };
        } else {
          return item;
        }
      });
      return { ...state, inventory: newInventory };
    default:
      return state;
  }
};
