import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.scss';

const Button = props => {
  const { text, handleClick } = props;
  return (
    <button>
      {props.text}
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string,
}

export default Button;
