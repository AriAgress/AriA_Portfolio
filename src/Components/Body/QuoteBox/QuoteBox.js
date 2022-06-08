import React from "react";
import { useSelector } from "react-redux";

// stylesheet
import { DialogBox, TextBox } from "./QuoteBox.styles.js";

const QuoteBox = () => {
  const colorSwitch = useSelector(state => state.colorSwitch);
  return (
    <DialogBox colorSwitch={colorSwitch}>
      <TextBox>
        HOW'S IT GOING? I'M{" "}
        <font
          colorSwitch={colorSwitch}
          style={{ color: colorSwitch ? "#ecb365" : "#B6EFA3" }}>
          ARI AGRESS.
        </font>
      </TextBox>
    </DialogBox>
  );
};

export default QuoteBox;
