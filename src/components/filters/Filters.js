import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder={'Valor mínimo'}/>
          <input type="text" placeholder={'Valor máximo'}/>
          <input type="text" placeholder={'Busca por título ou descrição'}/>
          <select name="" id="">
            <option value="">Sem ordenação</option>
            <option value="">Maior valor</option>
            <option value="">Menor valor</option>
            <option value="">Título</option>
            <option value="">Prazo</option>
          </select>
        </div>
      </div>
    )
  }
}
