import React, { Component } from 'react'
import {CardServiceCard} from './Stl-CartItem'

export class CartItem extends Component {
  render() { 
    return ( 
      <CardServiceCard>
        <h3>{this.props.Cart.title}</h3>
        <span>{this.props.Cart.price}</span>
        <button>Remover</button>
      </CardServiceCard>
    )
  }
}

export default CartItem
