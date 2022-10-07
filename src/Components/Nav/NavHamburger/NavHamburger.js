import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../../Actions/index";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

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
  ResumeA,
} from "./NavHamburger.styles.js";

const NavHamburger = () => {
  const toggleHamburgerMenu = useSelector((state) => state.toggleHamburgerMenu);
  const dispatch = useDispatch();

  const colorSwitch = useSelector((state) => state.colorSwitch);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <NavHamburgerMode>
      <HamburgerIcon
        toggleHamburgerMenu={toggleHamburgerMenu}
        onClick={() => dispatch(setMenu(!toggleHamburgerMenu))}
        colorSwitch={colorSwitch}>
        {(toggleHamburgerMenu && (
          <IoMdClose style={{ color: "red" }} data-aos="flip-left" />
        )) || <RiMenuFill data-aos="flip-right" />}
      </HamburgerIcon>
      {toggleHamburgerMenu && (
        <HamburgerMenu colorSwitch={colorSwitch}>
          <HamburgerContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Links
                toggleHamburgerMenu={toggleHamburgerMenu}
                onClick={() => dispatch(setMenu(false))}
                colorSwitch={colorSwitch}>
                Home
              </Links>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Links
                toggleHamburgerMenu={toggleHamburgerMenu}
                onClick={() => dispatch(setMenu(false))}
                colorSwitch={colorSwitch}>
                About
              </Links>
            </Link>
            <Links>
              <ResumeA
                href="https://drive.google.com/file/d/1D3JK6j9uwCr3YgAoVHW9uQJ35xKivI_5/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                colorSwitch={colorSwitch}>
                Resume
              </ResumeA>
            </Links>
          </HamburgerContainer>
        </HamburgerMenu>
      )}
      <ToggleSwitch />
    </NavHamburgerMode>
  );
};

export default NavHamburger;
