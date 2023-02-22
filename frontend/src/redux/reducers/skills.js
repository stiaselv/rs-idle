const initialState = [];

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SKILLS':
      return action.payload;
    case 'EXPERIENCE_GAIN':
      return state.map((skill) => {
        if (skill.name === action.payload.skillName) {
          return { ...skill, experience: skill.experience + action.payload.prodExp };
        } else {
          return skill;
        }
      });
    default:
      return state;
  }
};

export default skillsReducer;
