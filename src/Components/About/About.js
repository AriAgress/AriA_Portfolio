import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../Actions/Index";
import { FaRegHandPeace } from "react-icons/fa";

// components
import Hobby from "./Hobby/Hobby";

//stylesheet
import {
  AboutWrapper,
  AboutContainer,
  ImgContainer,
  AboutImg,
  TextContainer,
} from "./About.styles.js";

const About = () => {
  const toggleHamburgerMenu = useSelector(state => state.toggleHamburgerMenu);
  const dispatch = useDispatch();

  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <AboutWrapper
      toggleHamburgerMenu={toggleHamburgerMenu}
      onClick={() => dispatch(setMenu(false))}
      colorSwitch={colorSwitch}>
      <AboutContainer>
        <ImgContainer colorSwitch={colorSwitch}>
          <AboutImg />
        </ImgContainer>
        <TextContainer>
          <h1>
            About Me{" "}
            <FaRegHandPeace
              colorSwitch={colorSwitch}
              style={{ color: colorSwitch ? "#ecb365" : "#B6EFA3" }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </TextContainer>
      </AboutContainer>
      <Hobby />
    </AboutWrapper>
  );
};

export default About;
