import React, { Component } from "react";
import CartItem from "./cartItem/CartItem";

export class Cart extends Component {
  state = {
    cart: [],
  };

  addToCart = () => {
    this.setState({ cart: this.props.cart });
  };

  componentDidMount() {
    this.addToCart();
  }

  finalizePurchase = () => {
    this.setState({ cart: [] });
    alert("A sua compra foi finalizada com sucesso!");
  }; 

  removeSelectedJob = (removeID) => {
    const newCart = this.state.cart.filter(( { id } ) =>{
      return removeID !== id 
    }) 
    this.setState({ cart: newCart })
  }

  render() {
    const renderCartItem = (service) => (
      <CartItem key={service.id} Cart={service} removeSelectedJob={(id) => this.removeSelectedJob(id)} />
    );

    let showCartItem = this.state.cart.map(renderCartItem);

    const totalPrice = this.state.cart.reduce(
      (acc, item) => acc + Number(item.price),
      0
    );

    return (
      <div>
        {showCartItem}
        <span>
          Valor total:
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={this.finalizePurchase}>Finalizar Compra</button>
        <button onClick={this.props.setPageServices}>
          Voltar para a lista
        </button>
      </div>
    );
  }
}

export default Cart;
