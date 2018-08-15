import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconsContext = require.context('./source', false, /\.js$/);

function getIconComponent(name) {
  const path = `./${name}.js`;
  const isIconExisted = IconsContext.resolve(path);

  if (!isIconExisted) {
    throw Error(`Icon "${name}" not existed`);
  } else {
    return IconsContext(path).default;
  }
}

const Icon = (props) => {
  const { name, ...restProps } = props;
  const Component = getIconComponent(name);

  return <Component {...restProps} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default styled(Icon)``;
