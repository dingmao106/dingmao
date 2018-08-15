import React from 'react';
import PropTypes from 'prop-types';

const Flickr = ({ svgRef, title, ...props }) => (
  <span ref={svgRef} {...props}>
    <svg ariaHidden="true" dataPrefix="fab" dataIcon="flickr" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z" />
    </svg>
  </span>
);

Flickr.propTypes = {
  svgRef: PropTypes.string,
  title: PropTypes.string,
};

export default Flickr;
