import styled from 'styled-components';

export const DialogBox = styled.div`
  height: 80%;
  width: 100%;
  /* background-color: #84b4ca; */
  background-color: ${props =>
    props.colorSwitch === true ? '#84b4ca' : '#064663'};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  // media queries
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 60%;
    width: 80%;
  }
  @media (min-width: 100px) and (max-width: 480px) {
  }
`;

// export const LeftPoint = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 2vh solid transparent;
//   border-right: 2vh solid transparent;
//   border-top: 10vh solid #064663;
//   transform: rotate(60deg);

//   position: absolute;
// `;

export const TextBox = styled.div`
  padding: 30px;
  font-size: 45px;
`;
