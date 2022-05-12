import React from "react";
import { useSelector } from "react-redux";
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
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <AboutWrapper colorSwitch={colorSwitch}>
      <AboutContainer>
        <ImgContainer colorSwitch={colorSwitch}>
          <AboutImg />
        </ImgContainer>
        <TextContainer>
          <h1>
            About Me <FaRegHandPeace style={{ color: "#F1AC52" }} />
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
