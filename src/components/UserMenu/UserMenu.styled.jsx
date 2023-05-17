import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-left: 15px;
`;

export const LogoutButton = styled.button`
  background: #5ea5bd;
  color: white;
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
