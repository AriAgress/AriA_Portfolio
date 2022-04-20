import React from 'react';
import styled from 'styled-components';

// components
import Projects from '../Projects/Projects';
import QuoteBox from './QuoteBox/QuoteBox';

// images
import AriAvatar from '../../Assets/AriAvatar.png';

// icons
import { AiOutlineDown } from 'react-icons/ai';

const BodyWrapper = styled.div`
  height: 60vh;

  color: white;

  display: flex;
  justify-content: center;
`;

const BodyContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  width: 40%;
`;

const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${AriAvatar});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  width: 60%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 60px;
`;

const DescriptionBox = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  margin-left: 30px;
`;

const ProjectButton = styled.div`
  color: white;
  font-size: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = () => {
  return (
    <div>
      <BodyWrapper>
        <BodyContainer>
          <IntroContainer>
            <ImgContainer>
              <Img></Img>
            </ImgContainer>
            <TextContainer>
              <QuoteBox />
              <DescriptionBox>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                  Lets chat at <b>ariagress@gmail.com</b>
                </div>
              </DescriptionBox>
            </TextContainer>
          </IntroContainer>
          <ProjectButton>
            <AiOutlineDown />
          </ProjectButton>
        </BodyContainer>
      </BodyWrapper>
      <Projects />
    </div>
  );
};

export default Body;
