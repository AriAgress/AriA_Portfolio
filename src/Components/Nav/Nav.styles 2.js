import styled, { keyframes } from "styled-components";

//images
// import AriLogoDark from "../../Assets/AriLogoDark.png";

// import AriLogoLight from "../../Assets/AriLogoLight.png";

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
  align-items: center;

  margin-top: 35px;
  margin-bottom: 10px;

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

const rotate_hue = keyframes`
   to { filter: hue-rotate(1turn);
   }
  `;

export const LogoContainer = styled.div`
  --border-radius: 50%;
  --border-width: 4px;
  /* appearance: none; */
  position: relative;
  padding: 1em;
  border-radius: 50%;
  font-family: "Fascinate", cursive;
  font-size: 21px;
  font-weight: 500;
  color: ${props => (props.colorSwitch === true ? "black" : "white")};
  z-index: 2;

  &:after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotate_hue} linear 500ms infinite;
    animation-play-state: paused;
  }
  &:hover:after {
    animation-play-state: running;
  }

  &: after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }
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
    font-size: 20px;
    font-family: "Bebas Neue", cursive;
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
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  font-style: normal;
  font-family: "Bebas Neue", cursive;
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
