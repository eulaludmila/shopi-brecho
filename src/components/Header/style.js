/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";
import header from "../../assets/images/header.svg";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 600px;
  background-image: url(${header});
  background-size: 100%;
  background-repeat: no-repeat;

  #container {
    max-width: 1200px;
    height: inherit;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: #ffffff;

    div {
      max-width: 400px;
      height: 300px;

      h1 {
        display: flex;
        align-items: center;

        img {
          margin: 0 15px;
        }
      }

      p {
        font-size: 20px;
        margin-top: 40px;
      }
    }
  }
`;
