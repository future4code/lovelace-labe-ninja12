import React, { Component } from 'react'

export default class ServiceDetails extends Component {
  render() {
    const { title, price, dueDate, description, paymentMethods } =
      this.props.jobDetail
    let ano, mes, dia, toUpperTittle, newPrice, newPaymentMethods
    if (!!this.props.jobDetail) {
      newPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      ano = dueDate.slice(0, 4)
      mes = dueDate.slice(5, 7)
      dia = dueDate.slice(8, 10)
      toUpperTittle = title[0].toUpperCase() + title.substr(1)
      newPaymentMethods = paymentMethods.map((method, index) => (
        <span key={index}>{method} </span>
      ))
    }

    return (
      <>
        {!!this.props.jobDetail && (
          <div>
            <h2>{toUpperTittle}</h2>
            <p>{description}</p>
            <p>Valor: {newPrice} </p>
            <p>
              Válido até {dia}/{mes}/{ano}{' '}
            </p>
            <p>Forma de pagamento: {newPaymentMethods} </p>
            <button>Adicionar ao carrinho</button>
            <button onClick={this.props.setPageServices}>
              Voltar para lista
            </button>
          </div>
        )}
      </>
    )
  }
}
