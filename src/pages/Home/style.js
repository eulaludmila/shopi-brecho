/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`

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


