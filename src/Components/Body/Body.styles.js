import styled from "styled-components";

// images
import AriAvatar from "../../Assets/AriAvatar.png";

export const BodyWrapper = styled.div`
  height: 85vh;
  font-family: "Montserrat", sans-serif;

  color: ${props => (props.colorSwitch === true ? "black" : "white")};

  display: flex;
  justify-content: center;
  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 100px) and (max-width: 480px) {
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-flow: column;
  align-items: center;

  margin-top: 100px;
  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 95%;
    margin-top: 50px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 95%;
    margin-top: 50px;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-flow: column-reverse;
    align-items: center;
    text-align: center;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    flex-flow: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 70%;
    width: 70%;
    padding-top: 40px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    height: 70%;
    width: 70%;
    padding-top: 40px;
  }
`;

export const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${AriAvatar});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  width: 50%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;

  margin-left: 60px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    margin-left: 0;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 90%;
    margin-left: 0;
  }
`;

export const DescriptionBox = styled.div`
  height: 40%;

  display: flex;
  flex-flow: column;
  /* justify-content: space-evenly; */

  margin-left: 30px;
`;

export const ProjectButton = styled.div`
  font-size: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionText = styled.div`
  padding-bottom: 100px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 30px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    padding-bottom: 30px;
  }
`;

export const Anchor = styled.a`
  &:visited {
    text-decoration: none;
    color: ${props => (props.colorSwitch === true ? "black" : "white")};
  }
  &:hover {
    color: ${props => (props.colorSwitch === true ? "#ecb365" : "#3BD1BD")};
  }
`;
