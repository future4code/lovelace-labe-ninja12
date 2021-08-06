
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    #root{
        display: grid;
        grid-template-rows: 70px 1fr;
        text-align: center;
        background-color: #141f36;
        height: 100vh;
        
        

    };
    * {
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
        outline: 0px;
        font-family: 'Ubuntu', sans-serif;
                
    };
    
`
