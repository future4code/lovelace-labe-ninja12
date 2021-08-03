import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
background-color: orange;
height: 50px;
align-items: center;
padding: 0 1rem;
nav button:nth-child(1){
    margin: 0 3px 0 0;

}
`

export default class TelaInicial extends React.Component{
    render(){
        return(
            <HeaderContainer>
                <h1>LabeNinjas</h1>
                <nav>
                    <button>Home</button>
                    <button>Carrinho</button>
                </nav>
            </HeaderContainer>
        )
    }
}