import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../Actions/Index";
import { setModalContent } from "../../../Actions/Index";
import { HobbyImages } from "../../../Utils/HobbyIMGObjects";
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
  const modalContent = useSelector(state => state.modalContent);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [item, setItem] = useState("");

  return (
    <HobbyWrapper>
      <HobbyContainer>
        <h1>Hobby</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h4>
        <ImgContainer>
          {/* <HobbyIMG
            toggleModal={toggleModal}
            onClick={() => dispatch(setModal(!toggleModal))}
          />
          <HobbyIMG /> */}

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
