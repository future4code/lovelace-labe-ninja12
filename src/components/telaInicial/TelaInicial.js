import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
background-color: orange;

`

export default class TelaInicial extends React.Component{
    render(){
        return(
            <div>
                <HeaderContainer>
                    <header>LabeNinjas</header>
                    <button>Home</button>
                    <button>Carrinho</button>
                </HeaderContainer>

            </div>
        )
    }
}