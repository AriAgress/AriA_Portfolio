import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// icons
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

// components
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

// stylesheet
import {
  NavHamburgerMode,
  HamburgerIcon,
  HamburgerMenu,
  HamburgerContainer,
  Links,
} from "./NavHamburger.styles.js";

const NavHamburger = () => {
  const [isOpen, setOpen] = useState(false);

  const colorSwitch = useSelector(state => state.colorSwitch);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <NavHamburgerMode>
      <HamburgerIcon
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        colorSwitch={colorSwitch}>
        {(isOpen && <IoMdClose data-aos="flip-left" />) || (
          <RiMenuFill data-aos="flip-right" />
        )}
      </HamburgerIcon>
      {isOpen && (
        <HamburgerMenu data-aos="fade-in">
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
