import React from 'react'
import { Header, ButtonHeader} from '../../styles/styles'
import Logo from '../../img/ninja.svg'


export default class TelaInicial extends React.Component{
    render(){
        return(
            <Header>
                <div>
                <img src= {Logo}/>
                <h1>LabeNinjas</h1>
                </div>
                
                <nav>
                    <ButtonHeader onClick={this.props.setPageHome}>Home</ButtonHeader>
                    <ButtonHeader onClick={this.props.setPageCarrinho}>Carrinho</ButtonHeader>
                </nav>
            </Header>
        )
    }
}