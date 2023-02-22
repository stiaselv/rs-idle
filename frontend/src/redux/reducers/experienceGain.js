const initialState = {
  skillName: "",
  prodExp: 0,
  prodTimer: 0,
};

const experienceGainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXPERIENCE_GAIN":
      if (!action.payload || !action.payload.skillName || !action.payload.prodExp || !action.payload.prodTimer) {
        return state;
      }
      return {
        skillName: action.payload.skillName,
        prodExp: action.payload.prodExp,
        prodTimer: action.payload.prodTimer,
      };
    default:
      return state;
  }
};

export default experienceGainReducer;
