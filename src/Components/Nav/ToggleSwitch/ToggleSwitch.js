import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../../Actions/index";

//stylesheet
import {
  SwitchWrapper,
  SwitchContainer,
  Switch,
} from "./ToggleSwitch.styles.js";

const ToggleSwitch = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  const dispatch = useDispatch();
  return (
    <SwitchWrapper>
      <SwitchContainer colorSwitch={colorSwitch}>
        <Switch
          colorSwitch={colorSwitch}
          onClick={() => dispatch(setColor(!colorSwitch))}
        />
      </SwitchContainer>
    </SwitchWrapper>
  );
};

export default ToggleSwitch;
