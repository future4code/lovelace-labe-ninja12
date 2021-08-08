import React from "react";
import { ButtonHome } from "./styled-home";
import { TitleHome } from "./styled-home";
import { SloganHome } from "./styled-home";
import { DivHome } from "./styled-home";
import { ImgHome } from "./styled-home";
import NinjaWhite from "../../img/ninja-white.png";

export default class Home extends React.Component {
  render() {
    return (
      <DivHome>
        <div>
          <ImgHome src={NinjaWhite} />
          <TitleHome>LabeNinjas</TitleHome>
          <SloganHome> O talento certo no momento certo </SloganHome>

          <div>
            <ButtonHome onClick={this.props.setPageCadastro}>
              Quero ser um ninja
            </ButtonHome>
            <ButtonHome onClick={this.props.setPageServices}>
              Quero contratar um ninja
            </ButtonHome>
          </div>
        </div>
      </DivHome>
    );
  }
}
