import styled from 'styled-components';

export const StyledContactsList = styled.ul`
  margin: 15px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledContactsItem = styled.li`
  display: flex;
  gap: 20px;
`;

export const StyledDeleteButton = styled.button`
  background: lightblue;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all linear 250ms;
  &:hover {
    background: linear-gradient(45deg, #3b3b7a, #91617e);
    color: #d3d3d3;
    background-size: cover;
  }
`;
