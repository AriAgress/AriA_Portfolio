import styled from "styled-components";

export const Background = styled.div`
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

export const ModalWrapper = styled.div`
  width: 75vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;
`;

export const ModalIMG = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: url(${props => props.modalContent && props.modalContent});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// export const IconBox = styled.div`
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
