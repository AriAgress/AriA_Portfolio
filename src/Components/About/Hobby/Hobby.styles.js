import styled from "styled-components";

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

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 25px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    flex-flow: column;
    align-items: center;
  }
`;

export const HobbyIMG = styled.div`
  height: 250px;
  width: 250px;
  background: url(${props => props.image && props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 450px;
    width: 450px;
    margin: 25px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    height: 300px;
    width: 300px;
    margin: 25px;
  }
`;
