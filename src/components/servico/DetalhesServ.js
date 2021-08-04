import React, { Component } from 'react'

export default class DetalhesServ extends Component {
  render() {
    return (
      <div>
        <h2>Web Designer</h2>
        <p>R$ 800.00 </p>
        <p>Válido até 31/08/2021</p>
        <p>Criação de peças publicitárias</p>
        <p>Forma de pagamento:</p>
        <button>Adicionar ao carrinho</button>
        <button onClick={this.props.setPageServices}>Voltar para lista</button>
      </div>
    )
  }
}
