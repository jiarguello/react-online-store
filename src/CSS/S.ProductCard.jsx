import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;  
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
`

export const DivContainer = styled.div`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  heigth: 350px;
  margin: 15px;
  padding: 5px;
  width: 220px;
`

export const DivP = styled.div`
  heigth: 20%;
  width: 100%;
`

export const DivIMG = styled.div`
  display: flex;
  justify-content: center;
  heigth: 150px;
  width: 100%;
`

export const DivB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  heigth: 35%;
  width: 100%;
  justify-content: center;
`

export const Img = styled.img`
  max-heigth: 150px;
  max-width: 210px;
`

export const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; 
`

export const Price = styled.p`
  heigth: 22px;
`

export const Button = styled.button`
  border-radius: 4px;
  background-color: white;
  color: black;
  border: 1px solid black;
  transition-duration: 0.4s;
  heigth: 40px;
  margin-bottom: 5px;
  width: 100px;

  &:hover {
    background-color: black;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`
