import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: ${props =>
    props.colorSwitch === true ? "#AEAEAE" : "#AEAEAE"}; */
  background-color: #aeaeae;
  width: 40px;
  height: 15px;
  margin-left: 10px;

  border-radius: 50px;
  box-shadow: inset 20px 20px 60px #b3b3b3, inset -20px -20px 60px #ffffff;
`;

export const Switch = styled.div`
  background: ${props => (props.colorSwitch === true ? "#ecb365" : "#064663")};
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;

  margin-left: ${props => (props.colorSwitch === true ? "0px" : "17px")};

  transition-property: margin;
  transition-duration: 0.4s;
`;
