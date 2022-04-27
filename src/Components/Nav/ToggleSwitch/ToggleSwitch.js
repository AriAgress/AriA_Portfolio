import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../../../Actions/Index';

const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props =>
    props.colorSwitch === true ? 'rgb(210,210,210)' : 'rgb(60, 64, 67)'};
  width: 40px;
  height: 20px;

  border-radius: 50px;
`;

const Switch = styled.div`
  background: ${props =>
    props.colorSwitch === true ? 'rgb(32,33,35)' : 'rgb(183, 198, 185)'};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;

  margin-left: ${props => (props.colorSwitch === true ? '0rem' : '1rem')};

  transition-property: margin;
  transition-duration: 0.4s;
`;

const ToggleSwitch = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  const dispatch = useDispatch();
  return (
    <SwitchContainer>
      <Switch
        colorSwitch={colorSwitch}
        onClick={() => dispatch(setColor(!colorSwitch))}
      />
    </SwitchContainer>
  );
};

export default ToggleSwitch;
