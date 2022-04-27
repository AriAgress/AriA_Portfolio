import styled from 'styled-components';

export const HobbyWrapper = styled.div`
  /* height: 800px; */
  width: 100%;

  /* color: white; */

  display: flex;
  justify-content: center;
`;

export const HobbyContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;

  margin-bottom: 100px;
`;

export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 25px;
`;

export const HobbyIMG = styled.div`
  height: 250px;
  width: 250px;
  background-color: blue;
  border-radius: 25px;
`;
