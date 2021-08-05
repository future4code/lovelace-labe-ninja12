import React from 'react'
import { HeaderContainer } from './Stl-Header'

export default class TelaInicial extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>LabeNinjas</h1>
        <nav>
          <button onClick={this.props.setPageHome}>Home</button>
          <button onClick={this.props.setPageCarrinho}>Carrinho</button>
        </nav>
      </HeaderContainer>
    )
  }
}
