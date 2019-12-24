import React from "react";
import { HeaderTwo } from "./title-header.styles";

const TitleHeader = ({title, color}) => {
  return (
    <>
      <HeaderTwo color={color}>{title}</HeaderTwo>
    </>
  );
};

export default TitleHeader;
