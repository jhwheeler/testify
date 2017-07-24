import React from 'react';
import PropTypes from 'prop-types';

import css from './Header.scss';

const Header = props => {
  const { text } = props;
  return (
    <h1>
      {props.text}
    </h1>
  );
};

Header.PropTypes = {
  text: PropTypes.string,
};

export default Header;
