import React from 'react'

export class Input extends React.Component {
  render() {
    const { type, placeholder, value, event } = this.props
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event}
        required
      />
    )
  }
}

export default Input
