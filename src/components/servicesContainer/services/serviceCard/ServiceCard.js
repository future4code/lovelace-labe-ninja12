import React, { Component } from 'react'
import styled from 'styled-components'

const StlServiceCard = styled.div`
border: 1px solid black;
padding: 1rem;
margin: .5rem;
`


export default class ServiceCard extends Component { 
  render() {
    const {title, price, dueDate, id} = this.props.jobValues
    const ano = dueDate.slice(0, 4)
    const mes = dueDate.slice(5, 7)
    const dia = dueDate.slice(8, 10)
    const toUpperTittle = title[0].toUpperCase() + title.substr(1);

    
    return (
      <StlServiceCard>
        <h3>{toUpperTittle}</h3>
        <p><strong>Preço:</strong> {price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
        <p><strong>Prazo:</strong> {dia}/{mes}/{ano}</p>
        <button onClick={()=>this.props.setStateDetalhes(id)}>Ver detalhes</button>
        <button onClick={() => this.props.getJobByID(id)}>Adicionar ao carrinho</button>
      </StlServiceCard>
    )
  }
}
