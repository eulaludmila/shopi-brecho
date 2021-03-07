/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  min-height: 450px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  padding: 30px;
  margin: 50px auto;
  display: grid;
  column-gap: 7%;
  grid-template-columns: 30% auto;

  img {
    height: 450px;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 64px;
    margin-top: 0;
    margin-bottom: 40px;
  }
  .description {
    max-width: 500px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 70px;
  }

  .oldPrice {
    height: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    text-decoration-line: line-through;
    color: #ed2727;
  }

  .value {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: #000000;
    margin: 0 0 50px 0;
  }

  button {
    width: 200px;
    margin: 0 auto;
    height: 40px;
    background: #ff5a5a;
    border-radius: 10px;
    border: 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .stock {
    font-size: 18px;
    font-weight: 500;
  }
`;
