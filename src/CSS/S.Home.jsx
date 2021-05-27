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
  width: 100%;
  height: 60px;
`
export const Button = styled.button`
  background-image: url(${imagem});
  height: 200px;
  width: 400px;
`
