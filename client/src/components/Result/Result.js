import React from 'react';
import PropTypes from 'prop-types';

import css from './Result.scss';

const Result = props => {
  const { data } = props;
  const values = Object.values(data);
  const quotients = [];
  values.forEach((innerArray) => {
    let quotient = innerArray[0]/innerArray[1];
    quotients.push(quotient);
  });
  const sum = quotients.reduce((a, b) => a + b, 0);
  const testCoverage = sum/quotients.length;
  const formattedTestCoverage = (testCoverage * 10).toFixed(2);

  return (
    <div className="result">
      <h2>{formattedTestCoverage}% Test Coverage</h2>
    </div>

  );
};

Result.PropTypes = {
  data: PropTypes.object.isRequired,
};

export default Result;

