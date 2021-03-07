/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ContainerSobre = styled.section`

    width: 100%;
    height: auto;
    min-height: 250px;
    padding: 80px 0;
    background: #E8E8E8;
    overflow: hidden;

    .container{
      max-width: 1200px;
      margin: 0 auto;
      height: auto;
      min-height: 250px;
      color: #000000;
      display: grid;
      grid-template-columns: 30% 36% 30%;
      column-gap: 2%;

      h2{
        width: 90%;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: solid 3px #000000;
        margin: 0 auto;
      }

      img{
        width:100%;
      }

      p{
        margin: 30px 0 0 0;
      }

    }

`;


