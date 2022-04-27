import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../../Actions/Index';

//stylesheet
import { SwitchContainer, Switch } from './ToggleSwitch.styles.js';

const ToggleSwitch = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  const dispatch = useDispatch();
  return (
    <SwitchContainer colorSwitch={colorSwitch}>
      <Switch
        colorSwitch={colorSwitch}
        onClick={() => dispatch(setColor(!colorSwitch))}
      />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
