import React from 'react'
import { GlobalStyle } from './styled-App'


import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import ServicesContainer from './components/servicesContainer/ServicesContainer'
import DetalhesServ from './components/servicesContainer/services/serviceCard/serviceDetails/ServiceDetails'
import Cadastro from './components/cadastro/Cadastro'
import axios from 'axios'
import Loading from './components/loading/Loading'


export default class App extends React.Component {
  state = {
    currentPage: 'services',
    jobs: [] ,
    jobDetail: '',
    loading: false
  }

  getJobs = (jobs) =>{
    this.setState({jobs: jobs})
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
    this.setState({jobDetail: false})
    const { url, headers } = {
      url: 'https://labeninjas.herokuapp.com/jobs',
      headers: {headers: {
        Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
      },}
    };

    this.setState({loading: true})
    try{
    const res = await axios.get (`${url}/${id}`, headers)
    this.setState({loading: false})
    this.setState({jobDetail: res.data})
    }catch{
    }
    
  }

  renderLoading = () => {
    switch (this.state.loading) {
      case true:
        return <Loading/>
      default:
        break;
    }
  }

  switchLoading = (boolean) => {
    this.setState({loading: boolean})
  }

  renderCurrentPage = () => {
    switch (this.state.currentPage) {
      case 'home':
        return (
          <Home
            setPageServices={this.setPageServices}
            setPageCadastro={this.setPageCadastro}
            switchLoading={this.switchLoading}
          />
        )
      case 'carrinho':
        return <Cart setPageServices={this.setPageServices}/>
      case 'cadastro':
        return <Cadastro />
      case 'services':
        return <ServicesContainer switchLoading={this.switchLoading} getJobs={(jobs) => this.getJobs(jobs)} setStateDetalhes={this.setStateDetalhes} />
      case 'detalhes':
        return <DetalhesServ switchLoading={(boolean)=>this.switchLoading(boolean)} setPageServices={this.setPageServices} jobDetail={this.state.jobDetail}/>
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
        {this.state.loading ? this.renderLoading() : this.renderCurrentPage()}

        <GlobalStyle />
      </>
    )
  }
}
