import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutTemplate = () => (
  <StyledWrapper>
    <h1>about</h1>
  </StyledWrapper>
);

export default AboutTemplate;
