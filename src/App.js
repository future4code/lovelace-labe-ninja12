import React from 'react'
import { GlobalStyle } from './styled-App'

import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import ServicesContainer from './components/servicesContainer/ServicesContainer'
import DetalhesServ from './components/servico/DetalhesServ'
import Cadastro from './components/cadastro/Cadastro'

export default class App extends React.Component {
  state = {
    currentPage: 'home',
  }

  setPageHome = () => {
    this.setState({ currentPage: 'home' })
  }

  setPageCarrinho = () => {
    this.setState({ currentPage: 'carrinho' })
  }

  setPageCadastro = () => {
    this.setState({ currentPage: 'cadastro' })
  }

  setPageServices = () => {
    this.setState({ currentPage: 'services' })
  }

  setStateDetalhes = () => {
    this.setState({ currentPage: 'detalhes' })
  }

  renderCurrentPage = () => {
    switch (this.state.currentPage) {
      case 'home':
        return (
          <Home
            setPageServices={this.setPageServices}
            setPageCadastro={this.setPageCadastro}
          />
        )
      case 'carrinho':
        return <Cart setPageServices={this.setPageServices}/>
      case 'cadastro':
        return <Cadastro />
      case 'services':
        return <ServicesContainer setStateDetalhes={this.setStateDetalhes} />
      case 'detalhes':
        return <DetalhesServ setPageServices={this.setPageServices}/>

      default:
        break
    }
  }

  render() {
    return (
      <>
        <Header
          setPageHome={this.setPageHome}
          setPageCarrinho={this.setPageCarrinho}
        />

        {this.renderCurrentPage()}

        <GlobalStyle />
      </>
    )
  }
}
