import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../Actions/index";
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
  AboutMe,
  MyDescription,
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
          <AboutMe>
            About Me{" "}
            <FaRegHandPeace
              colorSwitch={colorSwitch}
              style={{ color: colorSwitch ? "#ecb365" : "#B6EFA3" }}
            />
          </AboutMe>
          <MyDescription>
            Hello! My name is Ari Agress and I enjoy building websites and
            applications. I have a very diverse background, coming from a degree
            in Economics for UC Davis. My interest in web development came into
            fruition when I used WIX to create a website for my personal
            business. I remember looking at my partners and said, "I think learn
            how to make it myself." From there i began my journey into web
            development and I've never looked back.
          </MyDescription>
          <MyDescription>
            Fast forward to today, I'm currently working as a Full Stack
            Developer for Alphaworks. My specialty is creating/re-vamping
            websites for small businesses in my community. My specialty
            languages are HTML, CSS, JavaScript, and React. I'm also familiar
            with Node.js, Express.js, MongoDB, and more.
          </MyDescription>
        </TextContainer>
      </AboutContainer>
      <Hobby />
    </AboutWrapper>
  );
};

export default About;
