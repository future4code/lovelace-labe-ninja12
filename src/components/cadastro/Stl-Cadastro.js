import styled from 'styled-components'

export const Title = styled.div`
 color: whitesmoke;
 padding: 20px;
 margin: 20px;
 font-size: 1.5rem;
 align-items: center;

`

export const Form = styled.form`
size: 30px;
display: flex ; 
flex-direction: column;
justify-content: space-between;
padding: 10px;
margin: 10px;


`

export const ButtonCadastre = styled.button`
  padding: 8px 10px;
  background: rgb(45, 108, 234);
  background: linear-gradient(
    90deg,
    rgba(45, 108, 234, 1) 0%,
    rgba(46, 163, 224, 1) 100%
  );
  box-shadow: 1px 1px 10px rgb(27 92 220 / 60%);
  color: white;
  border-radius: 8px;
  border: none;
  transition: all 0.5s;
  font-weight: 700;
  :nth-child(1) {
    margin: 0 10px 0 0;
  }
  :hover {
    cursor: pointer;
    background: rgb(46, 163, 224);
    background: linear-gradient(
      90deg,
      rgba(46, 163, 224, 1) 0%,
      rgba(45, 108, 234, 1) 100%
    );
  }
`