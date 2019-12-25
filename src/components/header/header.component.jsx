import React from "react";

//Components
import { Button } from "../button/button.component";

//Styles
import { HeaderContainer, Paragraph, Logo, Buttons } from "./header.styles";

const Header = ({ name }) => {
  return (
    <>
      <HeaderContainer id="top">
        <Logo>AB</Logo>

        <Paragraph highlight="2998ff">
          Hello, my name is&nbsp;<span className="highlight">{name}</span>.
          <br />
          I'm a front-end web developer.
          <br />
        </Paragraph>

        <Buttons>
          <a href="#aboutme">
            <Button
              text="About me"
              color="white"
              bgColor="transparent"
              bgColorHover="#5643fa"
              borderColorHover="#5643fa"
            />
          </a>

          <a href="#projects">
            <Button
              text="Projects"
              color="white"
              bgColor="transparent"
              bgColorHover="#5643fa"
              borderColorHover="#5643fa"
            />
          </a>
        </Buttons>
      </HeaderContainer>
    </>
  );
};

export default Header;
