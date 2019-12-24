import styled from "styled-components";
import { device } from "../../styles/main";

export const StackIconsHolder = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-content: center;
  align-items: center;

  .svgIcon {
    width: 30%;
    height: 50%;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 0.5fr));

    .svgIcon {
      width: 50%;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(14.1rem, 0.5fr));

    .svgIcon {
      width: 40%;
    }
  }
`;
