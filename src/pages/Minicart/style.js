/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  min-height: 100px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.32);
  border-radius: 10px;

  .item + .item {
    margin-top: 20px;
  }

  @media (min-width: 1020px) {
    margin: 50px auto;
    .item {
      width: 100%;
      display: grid;
      column-gap: 5%;
      grid-template-columns: 15% 65% 10%;
      border-bottom: 2px solid #ff5a5a;
      padding-bottom: 15px;
    }
    img {
      width: 100%;
      height: 120px;
      object-fit: contain;
      cursor: pointer;
    }
  }

  @media (min-device-width: 700px) and (max-width: 1020px) {
    margin: 50px 20px;
    .item {
      width: 100%;
      display: grid;
      column-gap: 5%;
      grid-template-columns: 20% 60% 10%;
      border-bottom: 2px solid #ff5a5a;
      padding-bottom: 15px;
    }
    img {
      width: 100%;
      height: 120px;
      object-fit: contain;
      cursor: pointer;
    }
  }

  @media (min-device-width: 600px) and (max-device-width: 700px) {
    margin: 50px 20px;
    .item {
      width: 100%;
      display: grid;
      column-gap: 5%;
      grid-template-columns: 25% 55% 10%;
      border-bottom: 2px solid #ff5a5a;
      padding-bottom: 15px;
    }
    img {
      width: 100%;
      height: 120px;
      object-fit: contain;
      cursor: pointer;
    }
  }

  @media (max-device-width: 600px) {
    margin: 50px 20px;
    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: 2px solid #ff5a5a;
      padding-bottom: 15px;
    }
    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
      cursor: pointer;
    }
    h3 {
      text-align: center;
    }
    .quantidade {
      justify-content: center;
      margin: 30px 0;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      margin: 0;
    }
    .quantidade {
      display: flex;
      align-items: center;
      .number {
        width: 50px;
        height: 30px;
        background: #ffffff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
      }

      svg {
        cursor: pointer;
      }

      .remove {
        width: 80px;
        height: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 40px;
        font-size: 14px;
        color: #000;
        border: none;
        cursor: pointer;
      }
    }
  }

  .values {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      text-decoration-line: line-through;
      color: #ed2727;
    }

    p {
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      color: #000000;
      margin: 0;
    }
  }
`;

export const Empty = styled.section`
  max-width: 1000px;
  min-height: 100px;
  height: auto;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-direction: column;

  a {
    color: #000;
    text-decoration: underline;
  }
`;
