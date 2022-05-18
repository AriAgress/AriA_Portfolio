import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <BodyWrapper colorSwitch={colorSwitch}>
        <BodyContainer>
          <IntroContainer>
            <ImgContainer>
              <Img data-aos="fade-right" />
            </ImgContainer>
            <TextContainer>
              <QuoteBox />
              <DescriptionBox>
                <DescriptionText data-aos="fade-left" data-aos-duration="1500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </DescriptionText>
                <div data-aos="fade-left" data-aos-duration="2500">
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
