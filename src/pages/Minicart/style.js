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
  margin: 50px auto;

  .item {
    width: 100%;
    display: grid;
    column-gap: 5%;
    grid-template-columns: 15% 65% 10%;
    border-bottom: 2px solid #ff5a5a;
    padding-bottom: 15px;

    & + .item {
      margin-top: 20px;
    }
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
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
