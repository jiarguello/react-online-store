import styled from 'styled-components';

export const LI = styled.li`
  list-style: none;
  &:hover {
    background-color: green;
  }
`

export const Div = styled.div`
  display: ${props => props.visibility ? 'none' : 'in-block'};
  margin-top: 60px;
  background-color: black; 
  opacity: 0.8;
  position: absolute;
  left: 0;
  width: 25%;
`
