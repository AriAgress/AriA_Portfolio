import styled from "styled-components";

export const NavWrapper = styled.div`
  height: 125px;
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
  border-bottom: ${props =>
    props.colorSwitch === true ? "5px solid #ecb365" : "5px solid #3BD1BD"};

  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: row;
  justify-content: space-between;

  margin-top: 6vh;
  margin-bottom: 1vh;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 95%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 100px) and (max-width: 480px) {
    display: none;
  }
`;

export const Links = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  position: relative;
  padding: 0 20px;
  font-size: 18px;
  text-transform: uppercase;
  border: 0;
  border-radius: 12px;
  overflow: hidden;
  transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);

  &:before {
    content: attr(alt);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    font-size: 15px;
    font-weight: bold;
    color: ${props => (props.colorSwitch === true ? "black" : "white")};
    letter-spacing: 4px;
    opacity: 1;
  }

  &:active {
    box-shadow: none;
    transform: translateY(7px);
    transition: 35ms cubic-bezier(0.5, 0.7, 0.4, 1);
  }
  &:hover:before {
    transition: all 0s;
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const I = styled.i`
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 4px;
  font-style: normal;
  transition: all 2s ease;
  transform: translateY(-20px);
  opacity: 0;

  ${Links}:hover & {
    transition: all 0.2s ease;
    transform: translateY(0px);
    opacity: 1;
    &:nth-child(1) {
      transition-delay: 0.045s;
    }
    &:nth-child(2) {
      transition-delay: calc(0.045s * 3);
    }
    &:nth-child(3) {
      transition-delay: calc(0.045s * 4);
    }
    &:nth-child(4) {
      transition-delay: calc(0.045s * 5);
    }
    &:nth-child(5) {
      transition-delay: calc(0.045s * 6);
    }
    &:nth-child(6) {
      transition-delay: calc(0.045s * 7);
    }
    &:nth-child(7) {
      transition-delay: calc(0.045s * 8);
    }
    &:nth-child(8) {
      transition-delay: calc(0.045s * 9);
    }
  }
`;
