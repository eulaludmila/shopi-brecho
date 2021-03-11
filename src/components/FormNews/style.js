/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: 250px;
  padding: 80px 0;

  h2 {
    text-align: center;
    margin: 0;
  }
  h3 {
    text-align: center;
  }

  @media (min-width: 630px) {
    form {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 38% 38% 14%;
      column-gap: 2.5%;
      margin-top: 50px;
      align-items: center;
      justify-content: center;

      input {
        outline: none;
        background: #fffefe;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
        border-radius: 8px;
        border: solid 1px #fffefe;
        height: 40px;
        padding: 15px;
        margin-top: 10px;
      }

      p {
        height: 20px;
        margin: 6px 0 0 0;
        font-size: 14px;
        color: #ed2727;
      }

      .container-button {
        width: 100%;
        height: 97px;
      }

      button {
        height: 40px;
        width: 100%;
        background: #000000;
        border-radius: 10px;
        color: #ffffff;
        outline: none;
        border: 0;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
  @media (max-width: 630px) {
    form {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      align-items: center;
      justify-content: center;

      input {
        outline: none;
        background: #fffefe;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
        border-radius: 8px;
        border: solid 1px #fffefe;
        height: 40px;
        padding: 15px;
        margin-top: 10px;
      }

      p {
        height: 20px;
        margin: 6px 0 15px 0;
        font-size: 14px;
        color: #ed2727;
      }

      .container-button {
        width: 100%;
        height: 97px;
      }

      button {
        height: 40px;
        width: 100%;
        background: #000000;
        border-radius: 10px;
        color: #ffffff;
        outline: none;
        border: 0;
      }

      div {
        width: 100%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
`;

export const ContainerReceived = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: 250px;
  padding: 80px 0;
  h2 {
    text-align: center;
    margin: 0;
  }
  h3 {
    text-align: center;
  }
`;
