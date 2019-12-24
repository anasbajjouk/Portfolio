import styled from "styled-components";
import { variable, device } from "./styles/main";

export const AppWrapper = styled.div`
  font-size: 5rem;
  display: grid;
  grid-template-rows: 100vh repeat(4, max-content);
  grid-template-columns: 1fr;
  color: ${variable.colorWhite};
  transition: all 2s;
  @media ${device.desktopL} {
    font-size: 5rem;
  }

  @media ${device.laptopL} {
    font-size: 4.5rem;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.mobileL} {
    font-size: 3.3rem;
  }
`;
