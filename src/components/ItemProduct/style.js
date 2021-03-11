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
  cursor: pointer;
  & a,
  & a:active,
  & a:link,
  & a:visited {
    color: #000;
    text-decoration: none;
  }
  & + div {
    margin-left: 30px;
  }

  &:hover div.details button {
    margin-left: 25px;
    opacity: 1;
    visibility: visible;
    transition: all 1s;
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
      object-fit: contain;
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

    .price {
      margin: 0;
    }

    p {
      height: 25px;
      text-align: center;
      text-decoration: line-through;
      margin: 0 0 10px 0;
      color: #ff5a5a;
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
      opacity: 0;
      visibility: hidden;
      margin-left: -100px;
      cursor: pointer;
    }

    .details {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      text-decoration: underline;
      margin-top: 10px;
      text-align: center;
    }

    .stock {
      font-size: 20px;
      color: #000;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;
