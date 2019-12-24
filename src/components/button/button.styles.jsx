import styled from "styled-components";
import { variable, device } from "../../styles/main";

export const ButtonHolder = styled.button`
  padding: 1.5rem;
  margin-top: 1rem;
  background: ${props => (props.bgColor ? props.bgColor : "transparent")};
  border: 2px solid ${props => (props.border ? props.border : "white")};
  color: ${props => (props.color ? props.color : "white")};
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s;
  font-size: 1.7rem;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background: ${props =>
      props.bgColorHover ? props.bgColorHover : variable.colorPrimary};
    border: 2px solid
      ${props =>
        props.borderColorHover
          ? props.borderColorHover
          : variable.colorPrimary};
    color: ${props => (props.colorHover ? props.colorHover : "white")};
    outline: none;

    .arrow {
      padding-left: 1rem;  
    }
  }

  @media ${device.tablet} {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
`;
