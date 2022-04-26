const colorReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return action.payload;
    default:
      return state;
  }
};

export default colorReducer;
