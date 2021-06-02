import styled from 'styled-components';
import ButtonIMG from '../Images/Button.png';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  background-color: #131921;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`
export const ButtonMenu = styled.button`
  background-image: url(${ButtonIMG});
  background-size: 100%;
  height: 40px;
  width: 80px;
  cursor: pointer;
  opacity: 0.8;
  margin-left: 15px;
`

export const Div = styled.div`
  color: green;
  display: flex;
  margin-right: 15px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export const CartIMG = styled.img`
  height: 25px;
  width: 30px;
  cursor: pointer;
  z-index: 2;
`

export const Span = styled.span`
  color: orange;
  position: absolute;
  margin: -3px 5px 10px 13px;
  z-index: 1;
`


