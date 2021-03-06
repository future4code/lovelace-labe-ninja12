import React, { Component } from 'react'
import axios from 'axios'

import ServiceCard from './serviceCard/ServiceCard'
import { StyledContainerServices } from '../../../styles/styles'

const { url, headers } = {
  url: 'https://labeninjas.herokuapp.com/jobs',
  headers: {
    Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
  },
}

export default class Services extends Component {
  state = {
    cart: [],
  }

  getJobByID = async (id) => {
    const { data } = await axios.get(`${url}/${id}`, { headers })
    this.setState({ cart: [...this.state.cart, data] })
    this.props.getServices(this.state.cart)
  }

  render() {
    const {
      minInputValue,
      maxInputValue,
      searchInputValue,
      orderInputValue,
      setStateDetalhes,
    } = this.props

    const listJobs = () => {
      let finalJobs = [...this.props.jobs]

      if (minInputValue) {
        const minPrice = +minInputValue
        finalJobs = finalJobs.filter(({ price }) => price >= minPrice)
      }

      if (maxInputValue) {
        const maxPrice = +maxInputValue
        finalJobs = finalJobs.filter(({ price }) => price <= maxPrice)
      }

      if (searchInputValue) {
        const search = searchInputValue.toUpperCase().trim()

        finalJobs = finalJobs.filter(({ title }) =>
          title.toUpperCase().includes(search)
        )
      }

      if (orderInputValue) {
        const caixaBaixa = orderInputValue.toLowerCase()
        const numerosOrdenados = finalJobs
          .map(({ price }) => price)
          .sort((a, b) => a - b)
        const titulosOrdenados = finalJobs.map(({ title }) => title).sort()

        finalJobs = finalJobs.reduce((acc, obj, index) => {
          if (caixaBaixa === 'maior valor') {
            const produtoOrdenado = {
              ...obj,
              price: numerosOrdenados.reverse()[index],
            }
            return [...acc, produtoOrdenado]
          }

          if (caixaBaixa === 'menor valor') {
            const produtoOrdenado = {
              ...obj,
              price: numerosOrdenados[index],
            }
            return [...acc, produtoOrdenado]
          }

          if (caixaBaixa === 't??tulo') {
            const produtoOrdenado = {
              ...obj,
              title: titulosOrdenados[index],
            }
            return [...acc, produtoOrdenado]
          }

          return acc
        }, [])
      }

      return finalJobs.map((job) => (
        <ServiceCard
          key={job.id}
          jobValues={job}
          getJobByID={(id) => this.getJobByID(id)}
          setStateDetalhes={setStateDetalhes}
        />
      ))
    }
    return <StyledContainerServices>{listJobs()}</StyledContainerServices>
  }
}
