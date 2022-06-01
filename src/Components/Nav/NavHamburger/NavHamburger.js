import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// icons
import { GiHamburgerMenu } from "react-icons/gi";

// components
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

// stylesheet
import {
  NavHamburgerMode,
  HamburgerMenu,
  HamburgerContainer,
  Links,
} from "./NavHamburger.styles.js";

const NavHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavHamburgerMode>
      <GiHamburgerMenu isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <HamburgerMenu>
          <HamburgerContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Links>Home</Links>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Links>About</Links>
            </Link>
          </HamburgerContainer>
        </HamburgerMenu>
      )}
      <ToggleSwitch />
    </NavHamburgerMode>
  );
};

export default NavHamburger;
