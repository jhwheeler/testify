import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';
import css from './index.scss';

const Root = () => {
  return (
    <div>
      <App />
    </div>
  )
}

render(<Root/>, document.querySelector('#root'));
