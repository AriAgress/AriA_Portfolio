import { combineReducers } from "redux";
import colorReducer from "./colorSwitch";
import toggleModal from "./toggleModal";
import modalContent from "./modalContent";

const allReducers = combineReducers({
  colorSwitch: colorReducer,
  toggleModal: toggleModal,
  modalContent: modalContent,
});

export default allReducers;
