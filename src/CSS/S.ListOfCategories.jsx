import styled from 'styled-components';

export const LI = styled.li`
  color: white;
  list-style: none;
  margin: 5px 5px 0px 5px; 
  width: 220px;

  &:hover {
    color: black;
    background-color: rgb(243, 168, 71);
    cursor: pointer;
  }
`

export const Div = styled.div`
  display: ${props => props.visibility ? 'none' : 'flex'};
  margin-top: 60px;
  background-color: black; 
  opacity: 0.9;
  position: absolute;
  left: 0;
  width: 45%;
  padding: 10px;

  flex-wrap: wrap;
  height: calc(100vh - 80px);
`
