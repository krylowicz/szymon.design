import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.button`
  border: none;
  background: none;
  padding: 1.2rem;
`;

const StyledInnerMenu = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.black};
  
  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.black};
  }
  
  &::before {
    top: -1.2rem;
  }
  
  &::after {
    top: 1.2rem;
  }
`;

const Menu = () => (
  <StyledMenu>
    <StyledInnerMenu />
  </StyledMenu>
);

export default Menu;
