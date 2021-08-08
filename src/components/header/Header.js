import React from 'react'
import {
  Header,
  ButtonHeader,
  StlLogo,
  StyledBgHoverGradient,
} from '../../styles/styles'
import Logo from '../../img/ninja.svg'

export default class TelaInicial extends React.Component {
  render() {
    return (
      <Header>
        <div>
          <StlLogo>
            <img src={Logo} alt='logo' />
          </StlLogo>

          <h1>LabeNinjas</h1>
        </div>

        <nav>
          <ButtonHeader onClick={this.props.setPageHome}>
            Home
            <StyledBgHoverGradient>Home</StyledBgHoverGradient>
          </ButtonHeader>
          <ButtonHeader onClick={this.props.setPageCarrinho}>
            Carrinho
            <StyledBgHoverGradient>Carrinho</StyledBgHoverGradient>
          </ButtonHeader>
        </nav>
      </Header>
    )
  }
}
