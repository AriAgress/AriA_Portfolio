import React from 'react';

//stylesheet
import {
  HobbyWrapper,
  HobbyContainer,
  ImgContainer,
  HobbyIMG,
} from './Hobby.styles.js';

const Hobby = () => {
  return (
    <HobbyWrapper>
      <HobbyContainer>
        <h1>Hobby</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h4>
        <ImgContainer>
          <HobbyIMG />
          <HobbyIMG />
          <HobbyIMG />
        </ImgContainer>
      </HobbyContainer>
    </HobbyWrapper>
  );
};

export default Hobby;
