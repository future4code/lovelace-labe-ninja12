import React from 'react';
import {StlInput} from '../../styles/styles'

export class Input extends React.Component {
  render() {
    const { type, placeholder, value, event } = this.props;
    return (
      <StlInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event}
        required
      />
    );
  }
}

export default Input;
