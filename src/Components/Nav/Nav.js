import React from "react";

import { Link } from "react-router-dom";
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
  ResumeButton,
  ResumeA,
} from "./Nav.styles.js";

const Nav = () => {
  const colorSwitch = useSelector((state) => state.colorSwitch);

  const scrollProjects = () => {
    const timer = setTimeout(() => {
      const projects = document.getElementById("ToProject");
      projects.scrollIntoView({ behavior: "smooth" });
      console.log("projects", projects);
      clearTimeout(timer);
    }, 1);
  };

  return (
    <NavWrapper colorSwitch={colorSwitch}>
      <NavContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoContainer colorSwitch={colorSwitch}>AA</LogoContainer>
        </Link>
        <NavHamburger />
        <NavLinksContainer>
          <Link
            to="/Project"
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
          <ResumeA
            href="https://drive.google.com/file/d/1D3JK6j9uwCr3YgAoVHW9uQJ35xKivI_5/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <ResumeButton colorSwitch={colorSwitch}>Resume</ResumeButton>
          </ResumeA>
          <ToggleSwitch colorSwitch={colorSwitch} />
        </NavLinksContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
