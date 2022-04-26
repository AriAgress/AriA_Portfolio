import { combineReducers } from 'redux';
import colorReducer from './colorSwitch';

const allReducers = combineReducers({
  colorSwitch: colorReducer,
});

export default allReducers;
