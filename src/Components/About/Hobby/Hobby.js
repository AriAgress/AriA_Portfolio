import React from 'react';
import styled from 'styled-components';

const HobbyWrapper = styled.div`
  /* height: 800px; */
  width: 100%;

  color: white;

  display: flex;
  justify-content: center;
`;

const HobbyContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;

  margin-bottom: 100px;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 25px;
`;

const HobbyIMG = styled.div`
  height: 250px;
  width: 250px;
  background-color: blue;
  border-radius: 25px;
`;

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
