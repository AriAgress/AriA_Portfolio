import { combineReducers } from "redux";
import colorReducer from "./colorSwitch";
import toggleModal from "./toggleModal";

const allReducers = combineReducers({
  colorSwitch: colorReducer,
  toggleModal: toggleModal,
});

export default allReducers;
