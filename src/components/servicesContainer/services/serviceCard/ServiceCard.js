import React, { Component } from 'react'
import {
  StlServiceCard,
  ButtonsContainer,
  CartButton,
  StlButtonDetail,
} from '../../../../styles/styles'
import Cart from '../../../../img/cart.svg'

export default class ServiceCard extends Component {
  render() {
    const { title, price, dueDate, id } = this.props.jobValues
    const ano = dueDate.slice(0, 4)
    const mes = dueDate.slice(5, 7)
    const dia = dueDate.slice(8, 10)
    const toUpperTittle = title[0].toUpperCase() + title.substr(1)

    return (
      <StlServiceCard>
        <h3>{toUpperTittle}</h3>
        <div>
          <p>
            <strong>Preço: </strong>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <p>
            <strong>Prazo: </strong>
            {dia}/{mes}/{ano}
          </p>
        </div>
        <ButtonsContainer>
          <StlButtonDetail onClick={() => this.props.setStateDetalhes(id)}>
            Ver detalhes
          </StlButtonDetail>
          <CartButton onClick={() => this.props.getJobByID(id)}>
            <img src={Cart} alt='cart' />
          </CartButton>
        </ButtonsContainer>
      </StlServiceCard>
    )
  }
}
