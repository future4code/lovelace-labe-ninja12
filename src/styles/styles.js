import styled from 'styled-components'

export const Header = styled.header`
  color: white;
  box-shadow: 1px 1px 20px rgb(27 92 220 / 30%);

  background: rgb(7, 18, 42);
  background: linear-gradient(
    12deg,
    rgba(7, 18, 42, 1) 0%,
    rgba(13, 29, 61, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
  img {
    width: 50px;
    margin-right: 10px;
  }
  nav {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.5rem;
      color: #ffcc63;
    }
  }
`

export const StlLogo = styled.div`
  background-color: white;
  border-radius: 28px;
  width: 50px;
  height: 50px;
  border: 3px solid #466be3;
  margin-right: 20px;
  box-shadow: 1px 1px 10px rgb(27 92 220 / 80%);
`

export const ButtonGradient = styled.button`
  box-shadow: 1px 1px 10px rgb(27 92 220 / 60%);
  color: white;
  border-radius: 8px;
  padding: 0 1rem;
  border: none;
  font-weight: 700;
  position: relative;
  background: linear-gradient(90deg, #2d6cea, #2ea3e0);
  :nth-child(1) {
    width: auto;
    height: 30px;
    margin-right: 10px;
  }
  :nth-child(2) {
    width: auto;
    height: 30px;
  }
  :hover {
    cursor: pointer;
  }
`
export const StyledBgHoverGradient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
  opacity: 0;
  background: linear-gradient(90deg, #2ea3e0, #2d6cea);
  transition: all 0.3s;
  height: 100%;
  width: 100%;
  margin-right: 10px;

  :hover {
    transition: all 0.3s;
    opacity: 100%;
    cursor: pointer;
  }
`

export const StlInput = styled.input`
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-right: 15px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  :nth-child(3) {
    width: 125px;
  }
  :nth-child(2) {
    width: 125px;
  }
`

export const StlSelect = styled.select`
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid transparent;

  option {
    height: 50px;
  }
`

export const StlOption = styled.option`
  padding: 0.7rem;
`

export const InputsSection = styled.section`
  margin: 1rem 0;
  height: auto;
`
export const StlServiceCard = styled.div`
  height: 200px;
  max-width: 205px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff, #f3ebe9);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 2px 0 10px 2px hsl(0deg 0% 100% / 30%);
  word-wrap: break-word;
`
export const StyledContainerServices = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  color: #2f3f56;

  p {
    font-weight: 300;
    margin: 5px 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CartButton = styled.button`
  border: 1px solid transparent;
  width: 31px;
  height: 31px;
  clip-path: circle();
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: all 0.2s ease;
  background-color: #2e72ea;
  :hover {
    background-color: #2864cc;
    cursor: pointer;
  }
`

export const StlButtonDetail = styled.button`
  padding: 8px 13px;
  height: auto;
  border-radius: 20px;
  border: none;
  background-color: #2f3f56;
  color: white;
  transition: all 0.2s ease;
  :hover {
    cursor: pointer;
    background-color: #233041;
  }
`
export const StlJobContainer = styled.main`
  padding: 1rem;
`
