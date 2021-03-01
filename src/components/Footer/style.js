/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  min-height: 250px;
  height: auto;
  background: #000;
  padding: 80px 0%;
  color: #ffffff;

  #container {
    max-width: 700px;
    height: auto;
    margin: 0 auto;

    div.container-telefone {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 16px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-right: 10px;
        }
      }
      div + div {
        margin-left: 25px;
      }
    }

    .container-endereco {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      font-size: 16px;
      svg {
        margin-right: 10px;
      }
    }
    .redes-sociais {
      max-width: 100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
