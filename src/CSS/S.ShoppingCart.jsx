import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`
export const SectionCards = styled.section`
  height: 70vh;
  // border: 3px solid black;
  box-shadow: 0px 0px 0px 0.5px grey;
  border-radius: 10px;
  overflow: auto;
  width: 90%;

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: 0px 0px 0px 0.5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
`

export const DivCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  heigth: 120px;
  margin-bottom: 15px;
`

export const DivUpDown = styled.div`
  display: flex;
  min-width: 100px;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.footer`
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ButtonUpDown = styled.button`
  heigth: 50px;
`
export const Ptitle = styled.p`
  width: 60%;
`

export const ButtonReview = styled.button`
background-color: rgb(250, 136, 0);
border-radius: 15px;
height: 30px;
width: 200px;
opacity: 0.9;
cursor: pointer;

&:hover{
  opacity: 1;
}
`
