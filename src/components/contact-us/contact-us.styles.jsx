import styled, { css } from "styled-components";
import { device, variable } from "../../styles/main";

const styles = css`
  margin: 0.6rem 0 0.6rem 5rem;
  font-size: 1.7rem;
  font-family: inherit;
  color: ${variable.colorGreyDark3};
  padding: 2.5rem 2rem;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.07);
  border: none;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
  width: 40%;
  align-self: center;
  max-width: 60%;
  min-width: 40%;
  max-height: 20rem;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.1);
    border-bottom: 3px solid ${variable.colorPrimary};
  }

  &:focus:invalid {
    border-bottom: 3px solid red;
  }

  &::-webkit-input-placeholder {
    color: ${variable.colorGreyDark2};
  }

  @media ${device.laptop} {
    margin: 0.6rem 0 0.6rem 0rem;
    font-size: 1.5rem;
    padding: 2.5rem 1.5rem;
    width: 80%;
    max-width: 70%;
    min-width: 50%;
    max-height: 20rem;
    min-height: 10%;
  }
`;

export const Form = styled.form`
  padding: 20rem 0;
  margin-top: -15rem;
  background: ${variable.colorGreyLight1};
  -webkit-clip-path: polygon(0% 25%, 100% 5%, 100% 90%, 50% 100%, 0% 90%);
  clip-path: polygon(0% 15%, 100% 3%, 100% 90%, 50% 100%, 0% 90%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & .successMessage {
    display: block;
    padding: 2rem;
    background-color: #f44336;
    border-radius: 1px;
    color: white;
    margin-bottom: 10rem;
  }

  & span {
    margin-top: -5rem;
    font-size: 1.5rem;
    color: ${variable.colorGreyDark2};
    text-shadow: 1px 1px 7.5rem black;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      padding: 0 2rem;
      text-align: center;
    }
  }


  /* & .submitButton {
    margin-left: 56rem;
  } */

  /* @media ${device.desktopL} {
    & .submitButton {
      margin-left: 71rem;
    }
  }

  @media ${device.desktop} {
    & .submitButton {
      margin-left: 67rem;
    }
  } */

  @media ${device.laptop} {
    padding: 13rem 0;
    margin-top: -7.7rem;
    -webkit-clip-path: polygon(0% 10%, 100% 3%, 100% 90%, 50% 100%, 0% 90%);
    clip-path: polygon(0% 10%, 100% 3%, 100% 90%, 50% 100%, 0% 90%);

    & .submitButton {
      margin: 0;
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  ${styles}
`;
export const TextArea = styled.textarea`
  ${styles}
`;
