import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// components
import Projects from "../Projects/Projects";
import QuoteBox from "./QuoteBox/QuoteBox";

// icons
import { AiOutlineDown } from "react-icons/ai";

// stylesheet
import {
  BodyWrapper,
  BodyContainer,
  IntroContainer,
  ImgContainer,
  TextContainer,
  DescriptionBox,
  DescriptionText,
  ProjectButton,
  Anchor,
  Img,
} from "./Body.styles.js";

const Body = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);

  return (
    <div>
      <BodyWrapper colorSwitch={colorSwitch}>
        <BodyContainer>
          <IntroContainer>
            <ImgContainer>
              <Img></Img>
            </ImgContainer>
            <TextContainer>
              <QuoteBox />
              <DescriptionBox>
                <DescriptionText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </DescriptionText>
                <div>
                  Lets chat at <b>ariagress@gmail.com</b>
                </div>
              </DescriptionBox>
            </TextContainer>
          </IntroContainer>
          <ProjectButton>
            <Anchor colorSwitch={colorSwitch} href="#ToProject">
              <AiOutlineDown />
            </Anchor>
          </ProjectButton>
        </BodyContainer>
      </BodyWrapper>
      <Projects />
    </div>
  );
};

export default Body;
