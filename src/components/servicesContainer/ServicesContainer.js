import React from 'react'

import Filters from './filters/Filters';
import Services from './services/Services';

export class ServicesContainer extends React.Component {
  render() {
    return (
      <>
        <Filters />
        <Services setStateDetalhes={this.props.setStateDetalhes} />
      </>
    )
  }
}

export default ServicesContainer
