import React from "react";

//Components
import Titleheader from "../title-header/title-header.component";
import Card from "../card/card.component";

//Data
import { PROJECTS } from "../../data/projects";

//Styles
import { Wrapper, CardsHolder } from "./projects.styles";
const Projects = () => {


  return (
    <>
      <Wrapper id="projects">
        <Titleheader title="Projects" color="white" />
        <CardsHolder>
          {PROJECTS.map(value => (
            <Card
              name={value.name}
              stack={value.stack}
              github={value.github}
              demo_URL={value.demo_URL}
              key={value.id}
              bgImage={value.bgImage}
            />
          )).reverse()}
        </CardsHolder>
      </Wrapper>
    </>
  );
};

export default Projects;
