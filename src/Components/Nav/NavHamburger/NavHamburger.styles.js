import styled from "styled-components";

export const NavHamburgerMode = styled.div`
  // media queries
  @media (min-width: 1201px) {
    display: none;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    display: flex;
  }
`;

export const HamburgerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  opacity: 0.7;
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
  font-size: 24px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 20vh;
  /* background: ${props =>
    props.colorSwitch === true ? "white" : "black"}; */
  background: ${props =>
    props.colorSwitch === true
      ? "linear-gradient(315deg, #f0f0f0, #cacaca)"
      : "linear-gradient(145deg, #515ba5, #444d8b)"};
  box-shadow: ${props =>
    props.colorSwitch === true
      ? "13px 13px 26px #d3d3d3, -13px -13px 26px #ededed"
      : "13px 13px 26px #3d4779, -13px -13px 26px #455189;"};
  opacity: 1;
  z-index: 1;
  top: 125px;
  left: 0;
`;

export const HamburgerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Bebas Neue", cursive;
  font-size: 21px;
`;

export const Links = styled.div`
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
`;
