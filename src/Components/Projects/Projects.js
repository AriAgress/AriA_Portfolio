import React, { useEffect } from "react";
import { projects } from "../../Utils/ProjectObjects";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

// stylesheet
import {
  ProjectsWrapper,
  IntroText,
  ProjectsContainer,
  ProjectImgContainer,
  ProjectImg,
  ProjectDescription,
  Content,
} from "./Projects.styles.js";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <ProjectsWrapper id="ToProject">
      <IntroText colorSwitch={colorSwitch}>WEB APPLICATIONS</IntroText>
      {projects.map((p, i) => (
        <ProjectsContainer key={i} even={p.projectID % 2 === 0 ? true : false}>
          <ProjectImgContainer data-aos="fade-right">
            <ProjectImg src={p.projectImage} alt={p.projectTitle} />
          </ProjectImgContainer>
          <ProjectDescription
            color={p.color}
            color2={p.color2}
            colorSwitch={colorSwitch}
            even={p.projectID % 2 === 0 ? true : false}
            data-aos="fade-left">
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
