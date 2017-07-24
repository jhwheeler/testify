import React, { Component } from 'react';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import { expect } from 'chai';

import Header from '../client/src/components/Header/Header';

describe('Header', () => {
  const renderer = createRenderer();
  const text = 'Testify';

  it('should render a header', () => {
    renderer.render( <Header text={text} /> );
    const result = renderer.getRenderOutput();
    expect(result).to.be.ok;
  });

  it('should render a header with the correct text', () => {
    renderer.render( <Header text={text} /> );
    const result = renderer.getRenderOutput();
    expect(result.props.children).to.equal('Testify');
  });
});
