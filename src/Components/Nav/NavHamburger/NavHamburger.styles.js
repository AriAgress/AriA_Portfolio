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

export const HamburgerMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 20vh;
  background: #242222;
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
  color: white;
`;

export const Links = styled.div`
  color: white;
`;
