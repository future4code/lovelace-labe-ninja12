import React from 'react'

export class Select extends React.Component {
  render() {
    const { options, event } = this.props

    const selectMap = options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))
    return (
      <select onChange={event} className='selctElement'>
        <option value={'DEFAULT'} defaultValue>
          Escolha:
        </option>
        {selectMap}
      </select>
    )
  }
}

export default Select
