import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu/Menu';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const StyledWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 6rem 3rem;
  height: 10vh;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <StyledWrapper>
      <Menu handleOnClick={handleOnClick} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} />
    </StyledWrapper>
  )
};

export default Header;
