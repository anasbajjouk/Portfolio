import styled from "styled-components";
import { variable, device, size } from "../../styles/main";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-rows: 15% auto;
  justify-items: center;
  align-items: center;

  background-image:  url(https://media.giphy.com/media/aRZ4vTsHnyW6A/source.gif);

  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  position: relative;
  padding: 4rem 2rem;
`;

export const Paragraph = styled.p`
  grid-row: 2 / 3;
  text-align: center;
  color: ${variable.colorGreyLight2};

  .highlight {
    color: #${props => props.highlight};
    font-weight: bold;
  }

  @media ${device.laptop} {
    font-size: 6rem;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
`;

export const Logo = styled.span`
  font-family: quantumregular;
`;

export const Buttons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin-top: -20rem;

  @media ${device.laptop} {
    width: 100%;
    margin-top: -50rem;
    justify-content: space-evenly;
  }

  @media ${device.tablet} {
    width: 100%;
    font-size: 1rem;
    margin-top: -20rem;
  }

  @media (min-width: ${size.laptopL}) {
    width: 30%;
    margin-top: -35rem;
  }

  @media (min-width: ${size.laptop}) {
    width: 30%;
    margin-top: -25rem;
  }
`;
