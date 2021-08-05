import React, { Component } from 'react'

export default class ServiceDetails extends Component {
  render() {
    const {title, price, dueDate, description, paymentMethods} = this.props.jobDetail
    console.log(this.props.jobDetail)
    const anoJob = dueDate.slice(1, 4)
    const mesJob = dueDate.slice(5, 7)
    const diaJob = dueDate.slice(8, 10)
    const toUpperTittleJob = title[0].toUpperCase() + title.substr(1);

    return (
      <div>
        <h2>{toUpperTittleJob}</h2>
        <p>{price} </p>
        <p>Válido até {dueDate}</p>
        <p>{description}</p>
        <p>Forma de pagamento: {paymentMethods}</p>
        <button>Adicionar ao carrinho</button>
        <button onClick={this.props.setPageServices}>Voltar para lista</button>
      </div>
    )
  }
}
