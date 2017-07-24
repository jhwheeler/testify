import React, { Component } from 'react';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import { expect } from 'chai';

import Button from '../client/src/components/Button/Button';

describe('Button', () => {
  const renderer = createRenderer();

  it('should render a button', () => {
    renderer.render( <Button text='Analyse' /> );
    const result = renderer.getRenderOutput();
    expect(result).to.be.ok;
  });

  it('should render a button with the correct text', () => {
    const text = 'Analyse';
    renderer.render( <Button text={text} /> );
    const result = renderer.getRenderOutput();
    expect(result.props.children).to.equal('Analyse');
  });
});
