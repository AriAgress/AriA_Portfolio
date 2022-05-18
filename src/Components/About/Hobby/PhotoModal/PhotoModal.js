import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../../Actions/Index";

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
  border-radius: 10px;
`;

const ModalIMG = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: white;
`;

const PhotoModal = () => {
  const toggleModal = useSelector(state => state.toggleModal);
  const dispatch = useDispatch();

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && toggleModal) {
        setModal(false);
        console.log("I pressed");
      }
    },
    [toggleModal, setModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Background
      toggleModal={toggleModal}
      onClick={() => dispatch(setModal(!toggleModal))}>
      <ModalWrapper>
        <ModalIMG>YO-DAL</ModalIMG>
      </ModalWrapper>
    </Background>
  );
};

export default PhotoModal;
