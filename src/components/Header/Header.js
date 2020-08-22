import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu/Menu';

const StyledWrapper = styled.div`
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
