import React from "react";

//Styles
import { ButtonHolder } from "./button.styles";

export const Button = ({
  text,
  color,
  bgColor,
  bgColorHover,
  borderColorHover,
  colorHover,
  border
}) => {
  return (
    <>
      <ButtonHolder
        color={color}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        borderColorHover={borderColorHover}
        colorHover={colorHover}
        border={border}
      >
        {text} 
      </ButtonHolder>
    </>
  );
};

export default Button;
