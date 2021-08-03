import React, { Component } from 'react'
import ProductCard from '../productCard/ProductCard'
import { StyledContainerProduct } from './styled.productsContainer'
import Filters from './filters/Filters'

export default class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <Filters />
        <StyledContainerProduct>
          <ProductCard />
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </StyledContainerProduct>
      </div>
    )
  }
}
