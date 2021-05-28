import styled from 'styled-components';
import imagem from '../Images/Button.png';


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
export const Button = styled.button`
  background-image: url(${imagem});
  background-size: 100%;
  height: 40px;
  width: 80px;
  cursor: pointer;
  opacity: 0.8;
`
