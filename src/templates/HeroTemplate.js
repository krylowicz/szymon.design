import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
// import Icon from 'components/Icon/Icon';
// import svg from 'assets/hex-t-m.svg';

const StyledWrapper = styled.div`
  padding: 0 0 0 4rem;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// const StyledIcon = styled(Icon)`
//   position: absolute;
//   top: 0;
//   right: 0;
// `;

const StyledHeading = styled.h1`
  text-align: left;
  font-weight: 600;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.font.family.rocWide};
  color: ${({ theme }) => theme.black};
`;


const HeroTemplate = () => (
  <StyledWrapper>
    <Header />
    <StyledHeading>
      Hi, <span role="img" aria-label="waving hand">👋</span> <br />
      I&apos;m Szymon, <br />
      UX/UI Designer <br />
      Based in London
    </StyledHeading>
    <Button text="Let me show you!"/>
  </StyledWrapper>
);

export default HeroTemplate;
