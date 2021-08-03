import React from "react";
import Cart from "./components/cart/Cart";

import Home from "./components/home/Home";
import ProductsContainer from "./components/productsContainer/ProductsContainer";
import { GlobalStyle } from "./styled.App";
import DetalhesServ from "./components/servico/DetalhesServ";
import ProductCard from "./components/productCard/ProductCard";

export default class App extends React.Component {
  state = {
    currentPage: "home",
  };

  setPageHome = () => {
    this.setState({ currentPage: "home" });
  };

  setPageCarrinho = () => {
    this.setState({ currentPage: "carrinho" });
  };

  setPageServicos = () => {
    this.setState({ currentPage: "servicos" });
  };

  setPageProdutos = () => {
    this.setState({ currentPage: "produtos" });
  };

  setStateDetalhes = () => {
    this.setState({ currentPage: "detalhes" });
  };

  renderCurrentPage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home setPageProdutos = {this.setPageProdutos} />;
      case "carrinho":
        return <Cart />;
      // case "servicos":
      //   return <
      case "produtos":
        return <ProductsContainer />;
      case "detalhes":
        return <DetalhesServ />;

      default:
        break;
    }
  }

  render() {
    return (
      <>
        <div>
          <button onClick = {this.setPageHome}>Home</button>
          <button onClick = {this.setPageCarrinho}>Carrinho</button>
        </div>

        {this.renderCurrentPage()}


        <GlobalStyle />
      </>
    );
  }
}
