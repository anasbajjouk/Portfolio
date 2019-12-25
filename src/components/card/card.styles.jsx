import styled from "styled-components";
import { device, variable } from "../../styles/main";

export const CardContainer = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 55rem;
  overflow: hidden;
  text-align: center;
`;

export const CardSide = styled.div`
  height: 55rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FrontSide = styled(CardSide)`
  box-shadow: 0.1rem 0.3rem 1rem -2rem rgba(0, 0, 0, 0.6);

  ${CardContainer}:nth-child(even) & {
    background-image: ${props =>
      props.bgImage ? `url(${props.bgImage})` : variable.colorGreyLight2};
  }

  ${CardContainer}:nth-child(odd) & {
    background-image: ${props =>
      props.bgImage ? `url(${props.bgImage}) ` : variable.colorGreyDark3};
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${CardContainer}:hover & {
    transform: rotateY(-180deg);
  }

  & .block {

    ${CardContainer}:nth-child(odd) & {
      background: rgba(255, 255, 255, 0.1);
    }

    ${CardContainer}:nth-child(even) & {
      background: rgba(0, 0, 0, 0.8);
    }

    color: white;
    width: 100%;
    padding: 2.3rem 0;
    opacity: 0.7;
    height: 25%;

    & h4 {
      font-size: 2.3rem;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 0.1rem;
        width: 100%;
        transform: translate(-50%, 0);
        background: white;

        @media ${device.tablet} {
          height: 0.09rem;
        }
      }

      & + div {
        padding-top: 1rem;
        font-size: 1.5rem;
        word-wrap: break-word;
      }
    }
  }
`;

export const BackSide = styled(CardSide)`
  transform: rotateY(180deg);
  justify-content: center;

  /* background: #00d2ff;  
  background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff);
  background: linear-gradient(to right top, #3a7bd5, #00d2ff); */

  background: ${variable.colorPrimaryDark};
  background: -webkit-linear-gradient(to right top, #438cfa, #5643fa);
  background: linear-gradient(to right top, #438cfa, #5643fa);


  ${CardContainer}:hover & {
    transform: rotateY(0);
  }
`;
