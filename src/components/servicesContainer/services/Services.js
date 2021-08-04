import React, { Component } from 'react'
import ServiceCard from './serviceCard/ServiceCard'
import { StyledContainerServices } from './styled-services'


export default class ServicesContainer extends Component {
  render() {
    return (
      <div>
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
