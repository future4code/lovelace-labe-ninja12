import React from "react";

import Home from "./components/home/Home";
import ProductsContainer from "./components/productsContainer/ProductsContainer";
import { GlobalStyle } from "./styled.App";


export default class App extends React.Component {
  render() {
    return (
      <>

        {/* <Home /> */}

        <ProductsContainer/>

        <GlobalStyle />
      </>
    );
  }
}
