import styled from "styled-components";
import { device, variable, size } from "../../styles/main";

export const AboutHolder = styled.div`
  background: ${variable.colorGreyLight1};
  padding: 15rem 0;
  margin-top: -20vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr)); /*24rem*/
  justify-content: space-between;
  text-align: center;

  & div {
    padding: 5rem;
    margin: 0 5rem;
    font-size: 2.6rem;
    color: ${variable.colorGreyDark1};
    & > p {
      text-align: justify;
    }
  }

  @media (min-width: ${size.laptopL}) {
    padding: 25rem 0;
  }

  @media ${device.laptop} {
    padding: 24rem 0;
    margin-top: -15vh;

    & div {
      padding: 1.3rem;
      margin: 0 2rem;
      font-size: 2rem;
    }
  }

  @media ${device.tablet} {
    padding: 20rem 0;
    margin-top: -15vh;
    grid-gap: 5rem;

    & div {
      padding: 1.3rem;
      margin: 0 2rem;
      font-size: 1.8rem;
    }
  }
`;
