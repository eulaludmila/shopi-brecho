/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Main = styled.main`
    background-color:var(--black);
    color: var(--white);
    flex:1;
    
    /* padding-top: 50px; */
    /* padding-left: 5%;
    padding-right: 5%; */
    /*Verifica se existe o parâmetro */
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;
export const Page = styled.main`
    min-height:100vh;
    height:auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;