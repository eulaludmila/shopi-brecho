/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #000;
  position: fixed;
  top: 0;
  z-index: 9999;

  #menu{
      max-width: 1200px;
      height: inherit;
      display:flex;
      justify-content:space-between;
      align-items:center;
      align-content:center;
      align-self:center;
      margin: 0 auto;

      .logo{
          height: 40px;
      }

      img.cart{
          height: 25px;
          margin-top: 10px;
      }

      div{
          width: 45px;
          height: 60px;
          position: relative;
          display:flex;
          align-items: center;
      }

      .quantidade{
          width:26px;
          height:26px;
          background-color:#FF5A5A;
          border-radius:50%;
          color:#ffffff;
          display:flex;
          justify-content:center;
          align-content:center;
          position:absolute;
          right:0;
          top:0;
      }
  }
`;

export const NavFixo = styled.div`

  width: 100%;
  height: 75px;

`;


