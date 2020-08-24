import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu/Menu';

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

const Header = () => (
  <StyledWrapper>
    <Menu />
  </StyledWrapper>
);

export default Header;
