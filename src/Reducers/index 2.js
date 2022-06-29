import { combineReducers } from "redux";
import colorReducer from "./colorSwitch";
import toggleModal from "./toggleModal";
import toggleHamburgerMenu from "./HamburgerMenu";
import modalContent from "./modalContent";

const allReducers = combineReducers({
  colorSwitch: colorReducer,
  toggleModal: toggleModal,
  toggleHamburgerMenu: toggleHamburgerMenu,
  modalContent: modalContent,
});

export default allReducers;
