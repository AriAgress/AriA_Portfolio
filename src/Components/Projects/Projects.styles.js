import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  // media queries
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const IntroText = styled.div`
  width: 100%;
  max-width: 960px;
  font-family: "Bebas Neue", cursive;
  color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
  font-size: 30px;
  display: flex;
  flex-flow: row;
  align-content: flex-start;

  margin-bottom: 25px;

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  /* flex-flow: row; */
  flex-flow: ${(props) => (props.even ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    flex-flow: column;
    margin-bottom: 50px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    flex-flow: column;
    margin-bottom: 50px;
  }
`;

export const ProjectImgContainer = styled.div`
  width: 50%;
  height: 350px;
  z-index: 1;

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    height: 300px;
    width: 80%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    height: 250px;
    width: 80%;
  }
`;

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 25px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    margin-top: 25px;
  }
`;

export const ProjectDescription = styled.div`
  width: 50%;
  min-height: 300px;
  color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
  background-color: ${(props) =>
    props.colorSwitch === true ? props.color : props.color2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 25px;
  margin-left: ${(props) => (props.even ? "0px" : "-60px")};
  margin-right: ${(props) => (props.even ? "-60px" : "0px")};
  margin-bottom: 100px;

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    width: 80%;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    border-radius: 0px 0px 25px 25px;
    min-height: 450px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
    width: 80%;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    border-radius: 0px 0px 25px 25px;
    min-height: 350px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.even ? "0px" : "80px")};
  margin-right: ${(props) => (props.even ? "80px" : "80px")};

  // media queries
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: ${(props) => (props.even ? "0px" : "30px")};
    margin-right: ${(props) => (props.even ? "30px" : "30px")};
  }
  @media (min-width: 100px) and (max-width: 480px) {
    margin-left: ${(props) => (props.even ? "0px" : "20px")};
    margin-right: ${(props) => (props.even ? "20px" : "20px")};
  }
`;

export const ProjectTitle = styled.h1`
  font-family: "Bebas Neue", cursive;
`;

export const ProjectInfo = styled.p`
  font-family: "Montserrat", sans-serif;
`;

export const A = styled.a`
  margin-left: 15px;
  color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
  &:visited {
    color: ${(props) => (props.colorSwitch === true ? "black" : "white")};
    text-decoration: none;
  }
`;

export const LanguageContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row;
`;

export const LanguageIcon = styled.div`
  font-size: 35px;
`;
