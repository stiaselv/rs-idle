export const currentItemGain = (skillIndex) => {
  return {
    type: 'NEW_PRODUCTION_TYPE',
    payload: skillIndex
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