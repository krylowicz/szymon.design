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
  padding: 2.2rem 2.7rem;
  width: 22rem;
  transform: translateY(8rem);
`;

const Button = ({text}) => (
  <StyledButton>{text}</StyledButton>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
