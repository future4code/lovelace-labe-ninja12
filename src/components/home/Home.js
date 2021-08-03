import React from 'react'
import styled from 'styled-components'


export default class Home extends React.Component {
    render() {
        return (
            <div>

                <h1>LabeNinjas</h1>
                <p> O talento certo no momento certo </p>
                <button>Quero ser um ninja</button>
                <button onClick = {this.props.setPageProdutos}>Quero contratar um ninja</button>


            </div>


        )

    }

}


