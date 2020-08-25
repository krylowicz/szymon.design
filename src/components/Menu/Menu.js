import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.button`
  border: none;
  background: none;
  padding: 1.2rem;
  z-index: 200;
  
  &:focus {
    outline: none;
  }
`;

const StyledInnerMenu = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme, isMenuOpen }) => isMenuOpen ? 'transparent' : theme.black};
  transition: all 0.2s ease-out;
  
  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: '';
    width: ${({ isMenuOpen }) => isMenuOpen ? '2.2rem' : '0.5rem'};
    height: ${({ isMenuOpen }) => isMenuOpen ? '0.2rem' : '0.5rem'};
    border-radius: ${({ isMenuOpen }) => isMenuOpen ? '0' : '50%'};
    background: ${({ theme }) => theme.black};
    transition: all 0.2s ease-out;
  }
  
  &::before {    
    top: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-1.2rem'};
    transform: translateX(${({ isMenuOpen }) => isMenuOpen ? '-25%' : '0'}) rotate(-45deg);
  }
  
  &::after {
    top: ${({ isMenuOpen }) => isMenuOpen ? '0' : '1.2rem'};
    transform: translateX(${({ isMenuOpen }) => isMenuOpen ? '-25%' : '0'}) rotate(45deg);
  }
`;

const Menu = ({ handleOnClick, isMenuOpen }, props) => (
  <StyledMenu onClick={handleOnClick} isMenuOpen={isMenuOpen} {...props}>
    <StyledInnerMenu isMenuOpen={isMenuOpen} />
  </StyledMenu>
);

export default Menu;

Menu.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
