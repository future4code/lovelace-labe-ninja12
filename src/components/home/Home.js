import React from "react";
import { TitleHome, SloganHome, DivHome, HomeButtons, HomeContainer, ImgHome } from "./styled-home";
import { ButtonGradient, StyledBgHoverGradient } from '../../styles/styles'

import NinjaWhite from "../../img/ninja-white.png";

export default class Home extends React.Component {
  render() {
    return (
      <DivHome>
        <HomeContainer>
          <ImgHome src={NinjaWhite} />
          <TitleHome>LabeNinjas</TitleHome>
          <SloganHome> O talento certo no momento certo </SloganHome>

          <HomeButtons>
            <ButtonGradient onClick={this.props.setPageCadastro}>
              Quero ser um ninja
              <StyledBgHoverGradient>Quero ser um ninja</StyledBgHoverGradient>
            </ButtonGradient>
            <ButtonGradient onClick={this.props.setPageServices}>
              Quero contratar um ninja
              <StyledBgHoverGradient>Quero contratar um ninja</StyledBgHoverGradient>
            </ButtonGradient>
          </HomeButtons>
        </HomeContainer>
      </DivHome>
    );
  }
}
