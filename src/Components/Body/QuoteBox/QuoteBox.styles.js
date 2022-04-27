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
