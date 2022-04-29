import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 100px) and (max-width: 480px) {
  }
`;

export const IntroText = styled.div`
  width: 100%;
  max-width: 960px;
  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  font-size: 30px;
  display: flex;
  flex-flow: row;
  align-content: flex-start;

  margin-bottom: 25px;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  /* flex-flow: row; */
  flex-flow: ${props => (props.even ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    /* flex-flow: column; */
  }
  @media (min-width: 100px) and (max-width: 480px) {
  }
`;

export const ProjectImgContainer = styled.div`
  width: 50%;
  height: 350px;
  z-index: 1;
`;

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 25px;
`;

export const ProjectDescription = styled.div`
  width: 50%;
  min-height: 300px;
  /* background-color: #303137; */
  background-color: ${props => (props.color ? props.color : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 25px;
  /* color: white; */
  /* margin-left: -60px; */
  /* margin-right: -60px; */
  margin-left: ${props => (props.even ? '0px' : '-60px')};
  margin-right: ${props => (props.even ? '-60px' : '0px')};
  margin-bottom: 100px;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    /* width: 50%;
    margin-left: 0px;
    margin-right: 0px; */
  }
  @media (min-width: 100px) and (max-width: 480px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: 80px; */
  margin-left: ${props => (props.even ? '0px' : '80px')};
  margin-right: ${props => (props.even ? '80px' : '0px')};
`;
