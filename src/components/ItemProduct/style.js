/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";

export const Item = styled.div`
  width: 260px;
  min-height: 370px;
  height: auto;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  padding-bottom: 20px;
  & + div {
    margin-left: 30px;
  }

  div.image-product {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
  }

  img.price {
    position: absolute;
    top: 0;
    right: 0;
    height: 70px;
  }

  div.details {
    min-height: 190px;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    button {
      width: 80%;
      margin: 0 auto;
      height: 40px;
      background: #ff5a5a;
      border-radius: 10px;
      border: 0;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
