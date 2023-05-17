import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  position: relative;
  margin: 100px auto;
  width: 400px;
  padding: 30px;
  background-color: rgba(139, 134, 136, 0.5);
  border: 2px solid lightgray;
  border-radius: 5px;
`;

export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthLink = styled(NavLink)`
  color: white;
  &.active {
    color: #61cfe5;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  border-bottom: 2px solid #ffffff5b;
  padding-bottom: 20px;
`;
