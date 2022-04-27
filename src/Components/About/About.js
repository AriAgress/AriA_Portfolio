import React from 'react';
import { useSelector } from 'react-redux';

// components
import Hobby from './Hobby/Hobby';

//stylesheet
import {
  AboutWrapper,
  AboutContainer,
  ImgContainer,
  AboutImg,
  TextContainer,
} from './About.styles.js';

const About = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <AboutWrapper colorSwitch={colorSwitch}>
      <AboutContainer>
        <ImgContainer>
          <AboutImg />
        </ImgContainer>
        <TextContainer>
          <h1>About Me</h1>
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
