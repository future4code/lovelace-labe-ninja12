import React, { Component } from 'react';
import {InputsSection} from '../../../styles/styles'

import Input from '../../input/Input';
import Select from '../../select/Select';

export default class Filters extends Component {
  render() {
    const {
      onChangeMinInput,
      onChangeMaxInput,
      onChangeSearchInput,
      onChangeOrderInput,
    } = this.props;
    const { minInputValue, maxInputValue, searchInputValue } = this.props;

    const inputsInfos = [
      {
        id: 1,
        type: 'number',
        placeholder: 'Valor mínimo',
        event: onChangeMinInput,
        value: minInputValue,
      },
      {
        id: 2,
        type: 'number',
        placeholder: 'Valor máximo',
        event: onChangeMaxInput,
        value: maxInputValue,
      },
      {
        id: 3,
        type: 'text',
        placeholder: 'Busca por título ou descrição',
        event: onChangeSearchInput,
        value: searchInputValue,
      },
    ];

    const options = ['Maior valor', 'Menor valor', 'Título', 'Prazo'];

    const renderInputs = ({ id, type, placeholder, event, value }) => (
      <Input
        key={id}
        type={type}
        placeholder={placeholder}
        event={event}
        value={value}
      />
    );
    const showInputs = inputsInfos.map(renderInputs);
    return (
      <InputsSection>
        {showInputs}
        <Select event={onChangeOrderInput} options={options} />
      </InputsSection>
    );
  }
}
