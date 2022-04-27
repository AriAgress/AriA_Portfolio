import React from 'react';
import { useSelector } from 'react-redux';

// stylesheet
import {
  DialogBox,
  TextBox,
  // LeftPoint,
} from './QuoteBox.styles.js';

const QuoteBox = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <DialogBox colorSwitch={colorSwitch}>
      <TextBox>HOW'S IT GOING? I'M ARI AGRESS.</TextBox>
      {/* <LeftPoint /> */}
    </DialogBox>
  );
};

export default QuoteBox;
