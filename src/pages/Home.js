import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header/Header';

const StyledWrapper = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const Home = () => (
  <MainTemplate>
    <Header />
    <StyledWrapper />
  </MainTemplate>
);

export default Home;
