import React from 'react';
import { projects, even } from '../../Utils/ProjectObjects';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;
const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  /* flex-flow: row; */
  flex-flow: ${props => (props.even ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
`;
const ProjectImg = styled.div`
  width: 50%;
  height: 300px;
  padding: 30px;
  background: orange;
  border-radius: 8px;
  z-index: 1;
`;
const ProjectDescription = styled.div`
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
  /* margin-right: -60px; */
  margin-bottom: 100px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 80px;
`;

const Projects = () => {
  // const even = ({ projects.projectID }) => {
  //   if (projects.projectID % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <ProjectsWrapper>
      {projects.map((p, i) => (
        <ProjectsContainer key={i} even={even}>
          <ProjectImg></ProjectImg>
          <ProjectDescription>
            <Content>
              <h1>{p.projectTitle}</h1>
              <p>{p.projectTitle}</p>
              <p>{p.language}</p>
            </Content>
          </ProjectDescription>
        </ProjectsContainer>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
