import React, { useEffect } from "react";
import { projects } from "../../Utils/ProjectObjects";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../Actions/Index";
import { setModalContent } from "../../Actions/Index";
import Aos from "aos";
import "aos/dist/aos.css";

//Icons
import { DiJavascript, DiReact, DiHtml5, DiCss3 } from "react-icons/di";

//components
import PhotoModal from "../../Components/About/Hobby/PhotoModal/PhotoModal";

// stylesheet
import {
  ProjectsWrapper,
  IntroText,
  ProjectsContainer,
  ProjectImgContainer,
  ProjectImg,
  ProjectDescription,
  Content,
  LanguageContainer,
  LanguageIcon,
} from "./Projects.styles.js";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const colorSwitch = useSelector(state => state.colorSwitch);
  const toggleModal = useSelector(state => state.toggleModal);
  const modalContent = useSelector(state => state.modalContent);
  const dispatch = useDispatch();
  return (
    <>
      <ProjectsWrapper id="ToProject" data-aos="fade-right">
        <IntroText colorSwitch={colorSwitch}>WEB APPLICATIONS</IntroText>
        {projects.map((p, i) => (
          <ProjectsContainer
            key={i}
            even={p.projectID % 2 === 0 ? true : false}>
            <ProjectImgContainer data-aos="fade-right">
              <ProjectImg
                src={p.projectImage}
                alt={p.projectTitle}
                toggleModal={toggleModal}
                modalContent={modalContent}
                onClick={() => {
                  dispatch(setModal(true));
                  dispatch(setModalContent(p.projectImage));
                }}
              />
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
                <LanguageContainer>
                  <LanguageIcon>
                    <DiJavascript />
                  </LanguageIcon>
                  <LanguageIcon>
                    <DiReact />
                  </LanguageIcon>
                  <LanguageIcon>
                    <DiHtml5 />
                  </LanguageIcon>
                  <LanguageIcon>
                    <DiCss3 />
                  </LanguageIcon>
                </LanguageContainer>
              </Content>
            </ProjectDescription>
          </ProjectsContainer>
        ))}
      </ProjectsWrapper>
      {toggleModal === true ? <PhotoModal /> : null}
    </>
  );
};

export default Projects;
