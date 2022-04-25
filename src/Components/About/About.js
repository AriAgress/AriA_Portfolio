import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  height: 800px;

  color: white;

  display: flex;
  justify-content: center;
`;

const AboutContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 100px;
`;
const ImgContainer = styled.div`
  width: 50%;
  height: 400px;

  border: 1px solid red;
  box-shadow: -20px -20px lightblue;
  border-radius: 25px;
`;
const AboutImg = styled.div``;
const TextContainer = styled.div`
  height: 400px;
  width: 50%;
  padding-left: 60px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const About = () => {
  return (
    <AboutWrapper>
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
    </AboutWrapper>
  );
};

export default About;
