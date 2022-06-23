import styled, { keyframes } from "styled-components";

const float = keyframes`
0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }`;

const float2 = keyframes`
0% {
    line-height: 30px;
    transform: translateY(0px);
  }
  55% {
    transform: translateY(-20px);
  }
  60% {
    line-height: 10px;
  }
  100% {
    line-height: 30px;
    transform: translateY(0px);
  }`;

export const DialogBox = styled.div`
  transform: translateY(0px);
  /* animation: float 5s ease-in-out infinite; */
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  /* mix-blend-mode: multiply; */
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  /* font-size: 15px; */
  background-color: ${props =>
    props.colorSwitch === true ? "#84b4ca" : "#064663"};
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
  /* padding: 50px; */
  border-radius: 25px;
  position: relative;
  box-shadow: 15px 15px
    ${props => (props.colorSwitch === true ? "#064663" : "#84b4ca")};
  height: 30%;
  width: 100%;
  margin-right: 30px;
  /* font-family: "Baloo 2", cursive; */
  // border: 1px solid $color-green;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    transform: translateY(0px);
    animation-name: ${float2};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    content: ".";
    font-weight: bold;
    /* -webkit-text-stroke: 0.5px green; */
    -webkit-text-fill-color: ${props =>
      props.colorSwitch === true ? "#064663" : "#84b4ca"};
    /* border: 1px solid green; */
    text-shadow: 15px 15px
      ${props => (props.colorSwitch === true ? "#064663" : "#84b4ca")};
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: ${props =>
      props.colorSwitch === true ? "#84b4ca" : "#064663"};
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 15px 15px
      ${props => (props.colorSwitch === true ? "#064663" : "#84b4ca")};
    z-index: -2;
  }

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 60%;
    width: 80%;
    margin-bottom: 30px;
    &:after {
      content: none;
    }
  }
  @media (min-width: 100px) and (max-width: 480px) {
    height: 60%;
    width: 80%;
    margin-bottom: 30px;
    &:after {
      content: none;
    }
  }
`;

export const TextBox = styled.div`
  padding: 30px;
  font-size: 60px;
  font-family: "Bebas Neue", cursive;
  font-weight: 400;
`;
