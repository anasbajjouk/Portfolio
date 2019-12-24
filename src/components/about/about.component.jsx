import React from "react";

//Components
import StackIcons from "../stack-icons/stack-icons.components";
import TitleHeader from "../title-header/title-header.component";

//Styles
import { AboutHolder } from "./about.styles";

const About = () => {
  return (
    <>
      <AboutHolder id="aboutme">
        <div>
          <TitleHeader title="About Me" />
          <p>
            A bachelor holder and a passionate self-taught web developer with
            over 3 years of experience in web developement building web apps
            using the lastest modern technologies - Specialized in React. I am
            looking forward in grabbing a chance to enhance my skills,
            experiences, and capabilities in a dynamic and stable workplace with
            the cutting edge of technologies.
          </p>
        </div>

        <div>
          <TitleHeader title="Stack" />
          <StackIcons />
        </div>
      </AboutHolder>
    </>
  );
};

export default About;
