import React from 'react';
import styled from 'styled-components';

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
`;
const ImgContainer = styled.div`
  width: 40%;
  background-image: url(https://picsum.photos/200/300);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const TextContainer = styled.div`
  width: 60%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
`;
const DescriptionBox = styled.div``;

const Body = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <ImgContainer />
        <TextContainer>
          HOW IT GOIN?
          <DescriptionBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DescriptionBox>
        </TextContainer>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default Body;
