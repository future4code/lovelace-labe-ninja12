import styled from "styled-components";

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
      width: 50px;
  }
  div {
      display: flex;
      align-items: center;
      h1{
          font-size : 1.5rem ;
        }
  }

  
`;

export const ButtonHeader = styled.button`
  padding: 5px 8px;
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
  transition: all 0.5s ;
  :nth-child(1) {
    margin: 0 5px 0 0;
  }
  :hover {
    background: rgb(46, 163, 224);
    background: linear-gradient(
      90deg,
      rgba(46, 163, 224, 1) 0%,
      rgba(45, 108, 234, 1) 100%
    );
  }
`;
