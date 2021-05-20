import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;  
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
`

export const Div = styled.div`
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

export const Img = styled.img`
  heigth: auto;
  width: auto;
  min-heigth: 150px;
  min-width: 150px;
  max-heigth: 150px;
  max-width: 150px;
`
export const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
` 
