import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <>
      {children}
    </>
  </ThemeProvider>
);

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
