import React from 'react'
import { GlobalStyle } from './styles/styled-App'
import { BgEffect } from './styles/styles'

import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import ServicesContainer from './components/servicesContainer/ServicesContainer'
import DetalhesServ from './components/servicesContainer/services/serviceCard/serviceDetails/ServiceDetails'
import Cadastro from './components/cadastro/Cadastro'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    currentPage: 'home',
    jobs: [], 
    cart: [],
    jobDetail: ''
  }

  getJobs = (jobs) =>{
    this.setState({jobs: jobs})
  } 

  getServices = (services) =>{
    this.setState({cart: services})
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

  setStateDetalhes = async (id) => {
    this.setState({ currentPage: 'detalhes' })
    const { url, headers } = {
      url: 'https://labeninjas.herokuapp.com/jobs',
      headers: {headers: {
        Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
      },}
    };
    const res = await axios.get (`${url}/${id}`, headers)
    this.setState({jobDetail: res.data})
    
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
        return <Cart cart={this.state.cart} setPageServices={this.setPageServices}/>
      case 'cadastro':
        return <Cadastro />
      case 'services':
        return <ServicesContainer getJobs={(jobs) => this.getJobs(jobs)} setStateDetalhes={this.setStateDetalhes} getServices={(services) => this.getServices(services)} /> 
      case 'detalhes':
        return <DetalhesServ setPageServices={this.setPageServices} jobDetail={this.state.jobDetail}/>

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
