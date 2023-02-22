export const currentItemGain = (itemID, title, image, price, haPrice, description, moop, prodTimer, prodExp) => {
  return {
    type: 'NEW_PRODUCTION_TYPE',
    itemID,
    title,
    image,
    price,
    haPrice,
    description,
    moop,
    prodTimer,
    prodExp
  }
}

export const setLoginState = bool => {
  return {
    type: 'SET_LOGIN',
    payload: bool
  }
}

export const setItems = arrayOfItems => {
  return {
    type: 'SET_ITEMS',
    payload: arrayOfItems,
  };
};

export const addItemToInventory = inventoryList => {
  return {
    type: 'SET_INVENTORY',
    inventoryList,
  }
}

export const updateInventory = ({ name, increment, decrementItems = [] }) => {
  return {
    type: 'UPDATE_INVENTORY',
    payload: { name, increment, decrementItems }
  }
}

export const setSkills = arrayOfSkills => {
  return {
    type: 'SET_SKILLS',
    payload: arrayOfSkills,
  }
}

export const experienceGain = (skillName, prodExp, prodTimer) => {
  return {
    type: "EXPERIENCE_GAIN",
    payload: {
      skillName,
      prodExp,
      prodTimer
    }
  }
}