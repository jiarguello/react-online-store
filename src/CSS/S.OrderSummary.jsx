import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 100vh;
`
export const SectionPayment = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 3% 0;
  justify-content: space-evenly;  
`

export const DivPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 80%;
  box-shadow: 0px 0px 0px 0.5px grey;
  border-radius: 10px;
`

export const SectionProducts = styled.section`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const DivProducts = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
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
  display: flex;
  align-items: center;
  margin: 10px 5px 10px 5px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  box-shadow: 0px 0px 0px 0.5px grey;
  border-radius: 10px;
  height: 60vh;

`

export const H1 = styled.h1`
  font-size: 5vh;
`

export const H3Form = styled.h3`
  font-size: 1.5em;
  margin: 1em, 0em 0.4em 0em;
`

export const H5 = styled.h3`
  font-size: 1em;
`

export const Input = styled.input`
  margin: 0.3em 0;
  width: 90%;
  border-radius: 15px;
  height: 3em;
  padding-left: 1em;
`

export const DivP = styled.div`
  width: 80%;
  display: flex;
  padding: 0px 15px 0px 0px;
`

export const Ptitle = styled.p`
  margin: 0px 10px 0px 10px;
  font-size: 5vh;
  width: 80%;
`

export const Pprice = styled.p`
  margin: 0px 10px 0px 10px;
  font-size: 3vh;
  width: 20%;
  align-self: rigth;
`

export const ButtonFinish = styled.button`
background-color: rgb(250, 136, 0);
border-radius: 15px;
height: 30px;
width: 200px;
opacity: 0.95;
cursor: pointer;
margin: 1em;

&:hover{
  opacity: 1;
}
`

export const DivBankSlip = styled.div`

`

export const DivCreditCard = styled.div`

`

export const Ptotal = styled.p`
  font-size: 4vh;
`
