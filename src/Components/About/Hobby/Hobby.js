import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../Actions/Index";

//components
import PhotoModal from "./PhotoModal/PhotoModal";

//stylesheet
import {
  HobbyWrapper,
  HobbyContainer,
  ImgContainer,
  HobbyIMG,
} from "./Hobby.styles.js";

const Hobby = () => {
  const toggleModal = useSelector(state => state.toggleModal);
  const dispatch = useDispatch();

  return (
    <HobbyWrapper>
      <HobbyContainer>
        <h1>Hobby</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h4>
        <ImgContainer>
          <HobbyIMG
            toggleModal={toggleModal}
            onClick={() => dispatch(setModal(!toggleModal))}
          />
          {toggleModal === true ? <PhotoModal /> : null}
          <HobbyIMG />
          <HobbyIMG />
        </ImgContainer>
      </HobbyContainer>
    </HobbyWrapper>
  );
};

export default Hobby;
