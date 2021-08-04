import React, { Component } from 'react'
import CartItem from './cartItem/CartItem'

export class Cart extends Component {
  render() {
    return (
      <div>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <span>Total: R$100,00</span>
        <button>Finalizar Compra</button>
        <button onClick={this.props.setPageServices}>Voltar para a lista</button>
      </div>
    )
  }
}

export default Cart
