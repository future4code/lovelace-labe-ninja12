import React from 'react';
import { ButtonCadastre } from '../cadastro/Stl-Cadastro';

export class Button extends React.Component {
  render() {
    const { type, nome, event } = this.props;
    return (
      <ButtonCadastre type={type} onClick={event}>
        {nome}
      </ButtonCadastre>
    );
  }
}

export default Button;
