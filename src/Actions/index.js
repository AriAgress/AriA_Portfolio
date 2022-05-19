export const setColor = bool => {
  return {
    type: "SET_COLOR",
    payload: bool,
  };
};

export const setModal = bool => {
  return {
    type: "TOGGLE_MODAL",
    payload: bool,
  };
};

export const setModalContent = string => {
  return {
    type: "SET_MODAL_CONTENT",
    payload: string,
  };
};
