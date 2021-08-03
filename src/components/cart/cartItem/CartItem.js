import React, { Component } from 'react'
import {CardServiceCard} from './Stl-CartItem'

export class CartItem extends Component {
  render() {
    return (
      <CardServiceCard>
        <h3>Nome do serviço</h3>
        <span>Preço do serviço</span>
        <button>Remover</button>
      </CardServiceCard>
    )
  }
}

export default CartItem
