import styled, { keyframes } from "styled-components";
import { device, variable } from "../../styles/main";

const hoverLoop = keyframes`
0%{
  background: ${variable.colorPrimaryDark};
}

50%{
  background: ${variable.colorPrimary};
}

100%{
  background: #222;
}
`;

export const Wrapper = styled.footer`
  background: #222;
  padding: 23rem 0 0 0;
  margin-top: -15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-align: center;


    & .toTop {
      position: absolute;
      color: white;
      cursor: pointer;
      background: ${variable.colorPrimaryDark};
      border-radius: 1px;
      padding: 2rem;
      top: 470rem;
      left: 50%;
      transform: translateX(-50%);

      &:hover {
        animation: 1s alternate ${hoverLoop} infinite;
      }

       @media ${device.desktopL} {
        top: 422rem;
        left: 50%;
        transform: translateX(-50%);
      }

      @media (max-width:1540px) {
        top: 470rem;
        left: 50%;
        transform: translateX(-50%);
      }

      @media ${device.laptop} {
        top: 729.5rem;
        left: 50%;
        transform: translateX(-50%);
      }

      @media ${device.tablet} {
        top: 714rem;
        left: 50%;
        transform: translateX(-50%);
      }
     
      @media ${device.mobileL} {
        top: 704rem;
        left: 50%;
        transform: translateX(-30%);
      }
      /*@media ${device.tablet} {
        bottom: -625rem;
        left: 50%;
        transform: translateX(-30%);
      } */
    }
  

  @media ${device.tablet} {
    font-size: 1.2rem;
    padding: 18rem 0 0 0;
  }
`;

export const SocialMedia = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-content: center;
  justify-content: center;
  margin: 1rem 0 4rem 0;
  padding: 1rem;
  font-size: 3rem;

  & a {
    background: #383838;
    margin: 2rem;
    padding: 2rem;
    border-radius: 1px;
    height: 8rem;
    width: 8rem;

    & > * {
      color: white;
    }

    &:nth-child(1):hover {
      background: #bd2c00;
    }

    &:nth-child(2):hover {
      background: #00a0dc;
      color: red;
    }

    &:nth-child(3):hover {
      background: #3b5998;
    }
  }

  & + div {
    padding: 2rem 0 1rem 0;
    width: 100%;
    background: #111;
  }
`;
