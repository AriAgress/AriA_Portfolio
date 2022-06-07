import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../../Actions/Index";
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
} from "./NavHamburger.styles.js";

const NavHamburger = () => {
  // const [isOpen, setOpen] = useState(false);

  const toggleHamburgerMenu = useSelector(state => state.toggleHamburgerMenu);
  const dispatch = useDispatch();

  const colorSwitch = useSelector(state => state.colorSwitch);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <NavHamburgerMode>
      <HamburgerIcon
        toggleHamburgerMenu={toggleHamburgerMenu}
        // onClick={() => setOpen(!isOpen)}
        onClick={() => dispatch(setMenu(!toggleHamburgerMenu))}
        colorSwitch={colorSwitch}>
        {(toggleHamburgerMenu && (
          <IoMdClose style={{ color: "red" }} data-aos="flip-left" />
        )) || <RiMenuFill data-aos="flip-right" />}
      </HamburgerIcon>
      {toggleHamburgerMenu && (
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
