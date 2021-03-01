/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.section`

     max-width: 1200px;
     margin: 0 auto;
     height: auto;
    min-height: 250px;
    padding: 30px 0;

    ul.react-multi-carousel-track{
        margin-bottom: 20px;
    }

    .react-multi-carousel-list {
        padding-bottom: 20px;
    }
    .react-multi-carousel-dot button{

        border-color: #ff5a5a
    }
    .react-multi-carousel-dot--active button{
        border-color: #ff5a5a;
        background: #ff5a5a
    }
    .react-multi-carousel-dot--focus button{
        border-color: #ff5a5a;
        background: #ff5a5a
    }

    .react-multiple-carousel__arrow--left{
        left:0
    }
    .react-multiple-carousel__arrow--right{
        right:0
    }
   
`;

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


