import React from 'react'
import styled from 'styled-components'
// import styled from 'styled-components'


const HomeContainer = styled.header`

text-align: center;
padding: 0px
`




export default class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeContainer> <header>LabeNinjas</header>
                    <h1>LabeNinjas</h1>
                    <p> O talento certo no momento certo </p>
                    <button>Quero ser um ninja</button>
                    <button>Quero contratar um ninja</button>
                </HomeContainer>

            </div>


        )

    }

}


