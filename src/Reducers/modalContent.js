const modalContent = (state = "", action) => {
  switch (action.type) {
    case "SET_MODAL_CONTENT":
      return action.payload;
    default:
      return state;
  }
};

export default modalContent;
