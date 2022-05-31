import React, { useState } from "react";
import styled from "styled-components";

//icons
import { GiHamburgerMenu } from "react-icons/gi";

const NavHamburgerContainer = styled.div`
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
    display: block;
  }
`;

const NavHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavHamburgerContainer>
      <GiHamburgerMenu isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      {isOpen && <div>Hello</div>}
    </NavHamburgerContainer>
  );
};

export default NavHamburger;
