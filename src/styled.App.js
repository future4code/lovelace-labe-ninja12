
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    #root{
        display: grid;
        grid-template-rows: 80px 1fr;
        text-align: center;

    };
    * {
        /* margin: 0px;
        padding: 0; */
        box-sizing: border-box;
        outline: 0px;
    };
    
`
