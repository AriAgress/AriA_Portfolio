import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div``;
const BodyContainer = styled.div``;
const ImgContainer = styled.div``;
const TextContainer = styled.div``;
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
