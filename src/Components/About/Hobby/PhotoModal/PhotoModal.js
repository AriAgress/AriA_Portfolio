import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../../Actions/index";
import Aos from "aos";
import "aos/dist/aos.css";

//stylesheet
import {
  Background,
  ModalWrapper,
  ModalIMG,
  // IconBox,
} from "./PhotoModal.styles.js";

//icons
// import { AiOutlineClose } from "react-icons/ai";

const PhotoModal = () => {
  const toggleModal = useSelector(state => state.toggleModal);
  const modalContent = useSelector(state => state.modalContent);
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && toggleModal) {
        dispatch(setModal(false));
        console.log("I pressed");
      }
    },
    [setModal, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Background
      toggleModal={toggleModal}
      onClick={() => dispatch(setModal(!toggleModal))}>
      <ModalWrapper data-aos="fade-up">
        <ModalIMG modalContent={modalContent} />
      </ModalWrapper>
      {/* <IconBox>
        <AiOutlineClose
          toggleModal={toggleModal}
          onClick={() => dispatch(setModal(!toggleModal))}
        />
      </IconBox> */}
    </Background>
  );
};

export default PhotoModal;
