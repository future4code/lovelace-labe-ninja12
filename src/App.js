import React from "react";
import { AppContainer } from "./components/AppContainer";
import Home from "./components/Home";
import { GlobalStyle } from "./styled.App";

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppContainer />
        <Home />
        <GlobalStyle />
      </>
    );
  }
}
