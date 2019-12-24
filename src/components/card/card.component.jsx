import React from "react";

//Components
import { Button } from "../button/button.component";

//Styles
import { CardContainer, CardSide, FrontSide, BackSide } from "./card.styles";

const Card = ({ name, stack, github, demo_URL, bgImage }) => {
  return (
    <>
      <CardContainer>
        <CardSide>
          <FrontSide bgImage={bgImage}>
            <div className="block">
              <h4>{name}</h4>
              <div>{stack}</div>
            </div>
          </FrontSide>
        </CardSide>

        <CardSide>
          <BackSide>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button
                text="See Source Code"
                bgColorHover="white"
                borderColorHover="white"
                colorHover="black"
              />
            </a>
            {demo_URL ? (
              <a href={demo_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  text="Demo"
                  bgColorHover="white"
                  borderColorHover="white"
                  colorHover="black"
                />
              </a>
            ) : null}
          </BackSide>
        </CardSide>
      </CardContainer>
    </>
  );
};

export default Card;
