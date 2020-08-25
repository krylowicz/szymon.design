import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font.family.rocWide};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.red};
  width: 22rem;
`;

const Button = ({text, className}) => (
  <StyledButton className={className}>{text}</StyledButton>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
