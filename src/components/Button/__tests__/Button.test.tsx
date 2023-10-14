import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  const defaultProps = {};

  const getComponent = (props = defaultProps) => (
    <Button {...props}>Test Button</Button>
  );

  const setup = (props = defaultProps): RenderResult =>
    render(getComponent(props));

  it('Should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot('Default');
  });
});
