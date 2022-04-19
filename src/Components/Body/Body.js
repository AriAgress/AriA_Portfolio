import React from 'react';
import styled from 'styled-components';

// components
import QuoteBox from './QuoteBox/QuoteBox';

// images
import AriAvatar from '../../Assets/AriAvatar.png';

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
  flex-flow: row;
  justify-content: space-between;

  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const ImgContainer = styled.div`
  width: 45%;
  background-image: url(${AriAvatar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  width: 55%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
`;

const DescriptionBox = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
`;

const Body = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <ImgContainer />
        <TextContainer>
          <QuoteBox />
          <DescriptionBox>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>
              Lets chat at <b>ariagress@gmail.com</b>
            </div>
          </DescriptionBox>
        </TextContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default Body;
