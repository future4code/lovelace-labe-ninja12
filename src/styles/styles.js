import styled from 'styled-components'

export const Header = styled.header`
  color: white;
  background-color: #07122a;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  img {
    width: 60px;
    margin-right: 10px;
  }
  div {
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.5rem;
    }
  }
`

export const ButtonHeader = styled.button`
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
export const StlInput = styled.input`
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-right: 10px;
`

export const StlSelect = styled.select`
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid transparent;
`

export const StlOption = styled.option`
  padding: 0.7rem;
`

export const InputsSection = styled.section`
  margin: 1rem 0;
  height: auto;
`
export const StlServiceCard = styled.div`
  border: 1px solid transparent;
  background-color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 2px 0 10px 2px hsl(0deg 0% 100% / 30%);
`
export const StyledContainerServices = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
max-width: 880px;
margin: 0 auto;

h3{
  color: ;
}

p{
  font-weight: 300;
  margin: 5px 0;
}

`