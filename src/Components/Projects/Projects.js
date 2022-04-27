import React from 'react';
import { projects } from '../../Utils/ProjectObjects';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  padding-top: 100px;
`;

const IntroText = styled.div`
  width: 100%;
  max-width: 960px;
  color: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  font-size: 30px;
  display: flex;
  align-content: flex-start;

  margin-bottom: 25px;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  /* flex-flow: row; */
  flex-flow: ${props => (props.even ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

const ProjectImgContainer = styled.div`
  width: 50%;
  height: 350px;
  z-index: 1;
`;

const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 25px;
`;

const ProjectDescription = styled.div`
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
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: 80px; */
  margin-left: ${props => (props.even ? '0px' : '80px')};
  margin-right: ${props => (props.even ? '80px' : '0px')};
`;

const Projects = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <ProjectsWrapper id='ToProject'>
      <IntroText colorSwitch={colorSwitch}>WEB APPLICATIONS</IntroText>
      {projects.map((p, i) => (
        <ProjectsContainer key={i} even={p.projectID % 2 === 0 ? true : false}>
          <ProjectImgContainer>
            <ProjectImg src={p.projectImage} alt={p.projectTitle} />
          </ProjectImgContainer>
          <ProjectDescription
            color={p.color}
            even={p.projectID % 2 === 0 ? true : false}>
            <Content>
              <h1>{p.projectTitle}</h1>
              <p>{p.description}</p>
              <p>{p.language}</p>
            </Content>
          </ProjectDescription>
        </ProjectsContainer>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
