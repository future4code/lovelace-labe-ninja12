import React from 'react';

export class Button extends React.Component {
  render() {
    const { type, nome, event } = this.props;
    return (
      <button type={type} onClick={event}>
        {nome}
      </button>
    );
  }
}

export default Button;
