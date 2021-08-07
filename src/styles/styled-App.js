import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root{
    display: grid;
    grid-template-rows: 70px 1fr;
    text-align: center;
    background: rgb(20,31,54);
    background: linear-gradient(0deg, rgba(20,31,54,1) 0%, #152953 100%);
    height: auto;
    min-height: 100vh;
  };
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    outline: 0px;
    font-family: 'Ubuntu', sans-serif;
  };
    
`
