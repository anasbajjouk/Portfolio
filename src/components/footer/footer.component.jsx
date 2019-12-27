import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

//Styles
import { Wrapper, SocialMedia } from "./footer.styles";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <SocialMedia>
          <a
            href="https://github.com/anasbajjouk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/bajjoukanas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://www.facebook.com/anas.bajjouk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a className="toTop" href="#top">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </SocialMedia>

        <div>
          Designed & built by Anas Bajjouk - © Copyright 2019 - All Rights
          Reserved
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
