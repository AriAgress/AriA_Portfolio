import styled from 'styled-components';

// images
import AriAvatar from '../../Assets/AriAvatar.png';

export const BodyWrapper = styled.div`
  height: 80vh;
  max-height: 800px;

  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};

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
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
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
  width: 60%;

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
  }
`;

export const DescriptionBox = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  margin-left: 30px;
`;

export const ProjectButton = styled.div`
  font-size: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Anchor = styled.a`
  &:visited {
    text-decoration: none;
    color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  }
  &:hover {
    color: #ecb365;
  }
`;
