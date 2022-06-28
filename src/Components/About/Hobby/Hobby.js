import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../Actions/index";
import { setModalContent } from "../../../Actions/index";
import { HobbyImages } from "../../../Utils/HobbyIMGObjects";

//components
import PhotoModal from "./PhotoModal/PhotoModal";

//stylesheet
import {
  HobbyWrapper,
  HobbyContainer,
  ImgContainer,
  HobbyIMG,
  HobbyTitle,
  HobbyDescription,
} from "./Hobby.styles.js";

const Hobby = () => {
  const toggleModal = useSelector(state => state.toggleModal);
  const modalContent = useSelector(state => state.modalContent);
  const dispatch = useDispatch();

  return (
    <HobbyWrapper>
      <HobbyContainer>
        <HobbyTitle>PHOTOGRAPHY</HobbyTitle>
        <HobbyDescription>
          When the pandemic began, I had a lot of time on my hands, so I took up
          photography as a new hobby to help pass time. Since then I've been
          documenting life with my friends, family, and puppy. Below are some
          photo's I've taken over the past year. Hope you enjoy them as much as
          I do.
        </HobbyDescription>
        <ImgContainer>
          {HobbyImages.map((image, index) => (
            <HobbyIMG
              key={index}
              toggleModal={toggleModal}
              modalContent={modalContent}
              onClick={() => {
                dispatch(setModal(true));
                dispatch(setModalContent(image.projectImage));
              }}
              image={image.projectImage}
            />
          ))}
          {toggleModal === true ? <PhotoModal /> : null}
        </ImgContainer>
      </HobbyContainer>
    </HobbyWrapper>
  );
};

export default Hobby;
