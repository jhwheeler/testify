import React from 'react';
import { render } from 'react-dom';

import css from './index.scss';

const Root = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

render(<Root/>, document.querySelector('#root'));
