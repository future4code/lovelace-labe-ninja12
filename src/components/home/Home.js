import React from 'react'



export default class Home extends React.Component {
    render() {
        return (
            <div>

                <h1>LabeNinjas</h1>
                <p> O talento certo no momento certo </p>
                <button onClick = {this.props.setPageCadastro}>Quero ser um ninja</button>
                <button onClick = {this.props.setPageServices}>Quero contratar um ninja</button>


            </div>


        )

    }

}


