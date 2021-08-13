import React from 'react';
import {StlSelect} from '../../styles/styles';

export class Select extends React.Component {
  render() {
    const { options, event } = this.props;

    const selectMap = options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    return (
      <StlSelect onChange={event} className="selctElement">
        <option value={'DEFAULT'} defaultValue>
          Escolha:
        </option>
        {selectMap}
      </StlSelect>
    );
  }
}

export default Select;
