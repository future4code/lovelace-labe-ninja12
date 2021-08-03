import React, { Component } from 'react'
import styled from 'styled-components'

const StlProductCard = styled.div`
border: 1px solid black;
padding: 1rem;
margin: .5rem;
`


export default class ProductCard extends Component {
  render() {
    return (
      <StlProductCard>
        <h3>titulo serviço</h3>
        <p><strong>Preço:</strong> R$ 100,00</p>
        <p><strong>Prazo:</strong> 10/10/1010</p>
        <button>Ver detalhes</button>
        <button>Adicionar ao carrinho</button>

      </StlProductCard>
    )
  }
}
