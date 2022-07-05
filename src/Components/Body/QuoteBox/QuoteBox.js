import React from "react";
import { useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore.js";

// stylesheet
import { DialogBox, TextBox } from "./QuoteBox.styles.js";

const QuoteBox = () => {
  const colorSwitch = useSelector((state) => state.colorSwitch);
  return (
    <DialogBox colorSwitch={colorSwitch}>
      <TextBox>
        HOW'S IT GOING? I'M{" "}
        <font
          colorSwitch={colorSwitch}
          style={{ color: colorSwitch ? "#ecb365" : "#B6EFA3" }}>
          ARI AGRESSSS
        </font>
        .
      </TextBox>
    </DialogBox>
  );
};

export default QuoteBox;
