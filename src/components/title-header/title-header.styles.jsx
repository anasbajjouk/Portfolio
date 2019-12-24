import styled, { keyframes } from "styled-components";
import { device, variable } from "../../styles/main";

const transformAnimate = keyframes`
 from {
  width: 10rem;
  }

  to {
    width: 15rem;
  }
`;

export const HeaderTwo = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 1200;
  text-align: center;
  color: ${props => (props.color ? props.color : variable.colorGreyDark3)};
  transition: 0.5s ease-in-out;
  margin-bottom: 10rem;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    background-color: ${props =>
      props.color ? props.color : variable.colorGreyDark3};
    height: 0.4rem;
    width: 10rem;
    transform: translate(-50%, 0);
  }

  &:hover {
    &:after {
      animation: ${transformAnimate} 0.5s linear forwards;
    }
  }

  @media ${device.mobileM} {
    font-size: 4rem;
  }
`;
