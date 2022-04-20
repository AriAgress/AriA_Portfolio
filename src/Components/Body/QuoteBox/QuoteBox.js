import React from 'react';
import styled from 'styled-components';

const DialogBox = styled.div`
  height: 80%;
  width: 100%;
  background-color: #064663;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// const LeftPoint = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 2vh solid transparent;
//   border-right: 2vh solid transparent;
//   border-top: 10vh solid #064663;
//   transform: rotate(60deg);

//   position: absolute;
// `;

const TextBox = styled.div`
  padding: 30px;
  font-size: 45px;
`;

const QuoteBox = () => {
  return (
    <DialogBox>
      <TextBox>HOW'S IT GOING? I'M ARI AGRESS.</TextBox>
      {/* <LeftPoint /> */}
    </DialogBox>
  );
};

export default QuoteBox;
