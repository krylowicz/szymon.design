import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: row;
  background-color: ${({ isMenuOpen }) => isMenuOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'};
  transition: background-color 0.4s ease-in-out;;
`;

const StyledMenu = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 0 2rem 2rem 0;
  padding-left: 4rem;
  transform: translateX(${({ isMenuOpen }) => isMenuOpen ? '0' : '-100%'});
  transition: transform 0.25s ease-in-out;
  z-index: 100;
`;

const StyledMenuLink = styled.p`
  font-family: ${({ theme }) => theme.font.family.rocMedium};
  font-size: 2.4rem;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: left;
`;

const StyledButton = styled(Button)`
  padding: 1.6rem 5.3rem;
`;

const menuItems = [
  'About',
  'Projects',
  'Linkedin',
];

const MobileMenu = ({ isMenuOpen }) => (
  <StyledWrapper isMenuOpen={isMenuOpen}>
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledList>
        {menuItems.map(item => (
          <li key={item}>
            <StyledMenuLink>{item}</StyledMenuLink>
          </li>
        ))}
        <li>
          <StyledButton text='Contact' />
        </li>
      </StyledList>
    </StyledMenu>
  </StyledWrapper>
);

export default MobileMenu;

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
