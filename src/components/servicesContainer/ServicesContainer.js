import React, { Component } from 'react'
import ServiceCard from '../serviceCard/ServiceCard'
import { StyledContainerServices } from './styled-servicesContainer'
import Filters from './filters/Filters'

export default class ServicesContainer extends Component {
  render() {
    return (
      <div>
        <Filters />
        <StyledContainerServices>
          <ServiceCard setStateDetalhes={this.props.setStateDetalhes}/>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </StyledContainerServices>
      </div>
    )
  }
}
