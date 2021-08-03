import React from "react";
import Cart from "./components/cart/Cart";

import Home from "./components/home/Home";
import ProductsContainer from "./components/productsContainer/ProductsContainer";
import { GlobalStyle } from "./styled.App";


export default class App extends React.Component {
  render() {
    return (
      <> 
        <button> Header </button> 
        <button> Início </button>

        {/* <Home /> */}

        {/* <ProductsContainer/> */}
        <Cart/>

        <GlobalStyle />
      </>
    );
  }
}
