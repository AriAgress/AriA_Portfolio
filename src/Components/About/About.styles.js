import styled from "styled-components";

//images
import AriProfile from "../../Assets/AriProfile.png";

export const AboutWrapper = styled.div`
  /* height: 800px; */

  color: ${props => (props.colorSwitch === true ? "black" : "white")};

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  align-items: center;

  padding-top: 100px;
  padding-bottom: 100px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    padding-bottom: 25px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    display: flex;
    flex-flow: column;
    padding-bottom: 25px;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 400px;

  box-shadow: ${props =>
    props.colorSwitch === true ? "-20px -20px #84b4ca" : "-20px -20px #064663"};
  border-radius: 25px;
  margin-left: 20px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 90%;
    height: 350px;
  }
`;
export const AboutImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${AriProfile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding-left: 60px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    margin-top: 25px;
    padding-left: 0;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 90%;
    margin-top: 25px;
    padding-left: 0;
  }
`;

export const AboutMe = styled.h1`
  font-family: "Bebas Neue", cursive;
`;

export const MyDescription = styled.p`
  font-family: "Montserrat", sans-serif;
`;
