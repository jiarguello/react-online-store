import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H3 = styled.h3`
  color: black;
`

export const Button = styled.button`
  background-color: rgb(250, 136, 0);
  border-radius: 15px;
  height: 30px;
  width: 200px;
  opacity: 0.8;
  cursor: pointer;
  margin-top: 10px;

  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;

  &:hover{
    opacity: 1;
  }
`

export const Span = styled.span`
  color: black;
  position: absolute;
  margin: -3px 5px 10px 13px;
  z-index: 1;
`
export const CartImg = styled.img`
  height: 25px;
  width: 30px;
  z-index: 2;
`

export const DivButton = styled.div`
  color: green;
  display: flex;
  margin-right: 15px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`
export const Main = styled.main`
  color: white;
  display: flex;
  heigth: 100vh;
  width: 100%;
  justify-content: space-between;
  // padding: 50px 50px;
`

export const Section = styled.section`
  display: flex;
  width: 70%;
  margin-left: 50px;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-right: 50px;
  // border: 1px solid black;
  box-shadow: 0px 0px 0.5px 0.5px gray;
  border-radius: 5px;
`
