import React from "react";
import { projects } from "../../Utils/ProjectObjects";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../Actions/index";
import { setModalContent } from "../../Actions/index";
import { AiFillGithub } from "react-icons/ai";

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
  ProjectTitle,
  ProjectInfo,
  A,
  LanguageContainer,
  LanguageIcon,
} from "./Projects.styles.js";

const Projects = () => {
  const colorSwitch = useSelector((state) => state.colorSwitch);
  const toggleModal = useSelector((state) => state.toggleModal);
  const modalContent = useSelector((state) => state.modalContent);
  const dispatch = useDispatch();

  return (
    <>
      <ProjectsWrapper id="ToProject">
        <IntroText colorSwitch={colorSwitch}>WEB APPLICATIONS</IntroText>
        {projects.map((p, i) => (
          <ProjectsContainer
            key={i}
            even={p.projectID % 2 === 0 ? true : false}>
            <ProjectImgContainer>
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
              even={p.projectID % 2 === 0 ? true : false}>
              <Content>
                <ProjectTitle>
                  {p.projectTitle}{" "}
                  <A colorSwitch={colorSwitch} href={p.link}>
                    <AiFillGithub />
                  </A>
                </ProjectTitle>
                <ProjectInfo>{p.description}</ProjectInfo>
                <LanguageContainer>
                  <LanguageIcon>{p.language}</LanguageIcon>
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
