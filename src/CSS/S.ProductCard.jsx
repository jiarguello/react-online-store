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
  width: 300px;
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
  heigth: 35%;
  width: 100%;
`


export const Img = styled.img`
  max-heigth: 150px;
`
export const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; 
` 
