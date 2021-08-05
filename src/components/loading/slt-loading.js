import styled from 'styled-components'

export const Div = styled.div`
  width: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  margin: 1rem auto;
`

export const StlLoading = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
