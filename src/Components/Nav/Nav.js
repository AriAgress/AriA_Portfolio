import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import NavHamburger from "./NavHamburger/NavHamburger";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

//stylesheet
import {
  NavWrapper,
  NavContainer,
  LogoContainer,
  NavLinksContainer,
  Links,
  I,
} from "./Nav.styles.js";

const Nav = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  const scrollProjects = () => {
    const timer = setTimeout(() => {
      // window.scrollTo({ top: "1300", behavior: "smooth" });
      const projects = document.getElementById("ToProject");
      projects.scrollIntoView({ behavior: "smooth" });
      console.log("projects", projects);
      clearTimeout(timer);
    }, 1);
  };

  const location = useLocation();

  useEffect(() => {
    (() => {
      // useLocation.pathname === "/ToProject" && scrollProjects();
    })();
    console.log(location);
  }, [location]);

  return (
    <NavWrapper colorSwitch={colorSwitch}>
      <NavContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoContainer colorSwitch={colorSwitch}>AA</LogoContainer>
        </Link>
        <NavHamburger />
        <NavLinksContainer>
          <Link
            to="/ToProject"
            onClick={scrollProjects}
            style={{ textDecoration: "none" }}>
            <Links colorSwitch={colorSwitch} alt="PROJECTS">
              <I colorSwitch={colorSwitch}>P</I>
              <I colorSwitch={colorSwitch}>R</I>
              <I colorSwitch={colorSwitch}>O</I>
              <I colorSwitch={colorSwitch}>J</I>
              <I colorSwitch={colorSwitch}>E</I>
              <I colorSwitch={colorSwitch}>C</I>
              <I colorSwitch={colorSwitch}>T</I>
              <I colorSwitch={colorSwitch}>S</I>
            </Links>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Links colorSwitch={colorSwitch} alt="ABOUT">
              <I colorSwitch={colorSwitch}>A</I>
              <I colorSwitch={colorSwitch}>B</I>
              <I colorSwitch={colorSwitch}>O</I>
              <I colorSwitch={colorSwitch}>U</I>
              <I colorSwitch={colorSwitch}>T</I>
            </Links>
          </Link>
          <ToggleSwitch colorSwitch={colorSwitch} />
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
