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

export const setMenu = bool => {
  return {
    type: "TOGGLE_MENU",
    payload: bool,
  };
};

export const setModalContent = string => {
  return {
    type: "SET_MODAL_CONTENT",
    payload: string,
  };
};
