import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../../Actions/Index";
import Aos from "aos";
import "aos/dist/aos.css";

//icons
// import { AiOutlineClose } from "react-icons/ai";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: black;
  color: #000;
  position: relative;
  z-index: 10;
`;

const ModalIMG = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: url(${props => props.modalContent && props.modalContent});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// const IconBox = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-size: 2.5em;
//   margin: 40px;
//   color: white;

//   &:hover {
//     cursor: pointer;
//     color: red;
//   }
// `;

const PhotoModal = () => {
  const toggleModal = useSelector(state => state.toggleModal);
  const modalContent = useSelector(state => state.modalContent);
  // const modalContent = useSelector(state => state.modalContent)
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
        <ModalIMG modalContent={modalContent}></ModalIMG>
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
