import React from 'react';
import { projects } from '../../Utils/ProjectObjects';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  /* min-height: 100vh;
  width: 100%; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  /* background-color: aqua; */
`;
const Left = styled.div`
  width: 50%;
  height: 300px;
  padding: 30px;
  background: orange;
  border-radius: 8px;
  z-index: 1;
`;
const Right = styled.div`
  width: 50%;
  min-height: 300px;
  background-color: #303137;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  margin-left: -60px;
  margin-bottom: 100px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 80px;
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      {projects.map((p, i) => (
        <ProjectsContainer key={i}>
          <Left></Left>
          <Right>
            <Content>
              <h1>{p.projectTitle}</h1>
              <p>{p.projectTitle}</p>
              <p>{p.language}</p>
              <a href='#' class='btn'>
                Click Me
              </a>
            </Content>
          </Right>
        </ProjectsContainer>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
