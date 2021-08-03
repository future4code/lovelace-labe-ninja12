import React from 'react';
import axios from 'axios';

import Input from '../input/Input';
import Select from '../select/Select';
import Button from '../button/Button';

export class Cadastro extends React.Component {
  state = {
    nomeInputValue: '',
    descInputValue: '',
    precoInputValue: '',
    formaPagamentoInputValue: [],
    dataInputValue: '',
  };

  onChangeNameInput = ({ target }) =>
    this.setState({ nomeInputValue: target.value });

  onChangeDescInput = ({ target }) =>
    this.setState({ descInputValue: target.value });

  onChangePrecoInput = ({ target }) =>
    this.setState({ precoInputValue: target.value });

  onChangeFormaPagamentoInput = ({ target }) =>
    this.setState({ formaPagamentoInputValue: [target.value] });

  onChangeDataInput = ({ target }) =>
    this.setState({ dataInputValue: target.value });

  criarCadastro = async (event) => {
    event.preventDefault();
    const {
      nomeInputValue,
      descInputValue,
      precoInputValue,
      formaPagamentoInputValue,
      dataInputValue,
    } = this.state;
    const { url, body, headers } = {
      url: 'https://labeninjas.herokuapp.com/jobs',
      body: {
        title: nomeInputValue,
        description: descInputValue,
        price: +precoInputValue,
        paymentMethods: formaPagamentoInputValue,
        dueDate: dataInputValue,
      },
      headers: {
        Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
      },
    };

    await axios.post(url, body, { headers });
  };

  render() {
    const { nomeInputValue, descInputValue, precoInputValue, dataInputValue } =
      this.state;
    const {
      onChangeNameInput,
      onChangeDescInput,
      onChangePrecoInput,
      onChangeFormaPagamentoInput,
      onChangeDataInput,
      criarCadastro,
    } = this;

    const inputsInfos = [
      {
        id: 1,
        type: 'text',
        placeholder: 'Título',
        event: onChangeNameInput,
        value: nomeInputValue,
      },
      {
        id: 2,
        type: 'text',
        placeholder: 'Descrição',
        event: onChangeDescInput,
        value: descInputValue,
      },
      {
        id: 3,
        type: 'number',
        placeholder: 'Preço',
        event: onChangePrecoInput,
        value: precoInputValue,
      },
      {
        id: 4,
        type: 'date',
        event: onChangeDataInput,
        value: dataInputValue,
      },
    ];

    const optionsValues = [
      'Cartão de Débito',
      'Cartão de Crédito',
      'PayPal',
      'Boleto',
      'Pix',
    ];

    const showInputs = inputsInfos.map(
      ({ id, type, placeholder, event, value }) => (
        <Input
          key={id}
          type={type}
          placeholder={placeholder}
          event={event}
          value={value}
        />
      )
    );

    return (
      <div>
        <h2>Cadastre o seu serviço</h2>

        <form name="cadastro">
          {showInputs}
          <Select event={onChangeFormaPagamentoInput} options={optionsValues} />
          <Button
            type={'submit'}
            nome={'Cadastrar Serviço'}
            event={criarCadastro}
          />
        </form>
      </div>
    );
  }
}

export default Cadastro;
