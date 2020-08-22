import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({src, props, className}) => (
  <div {...props} className={className}>
    <SVG src={src} />
  </div>
);

export default Icon;

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  props: PropTypes.func,
  className: PropTypes.string
};

Icon.defaultProps = {
  props: undefined,
  className: ''
};
