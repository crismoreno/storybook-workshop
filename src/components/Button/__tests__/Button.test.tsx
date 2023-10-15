import React from 'react';
import { act, render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { createRoot } from 'react-dom/client';

import Button from '../Button';

describe('Button', () => {
  const defaultProps = {};

  const getComponent = (props = defaultProps) => (
    <Button {...props}>Test Button</Button>
  );

  const setup = (props = defaultProps): RenderResult =>
    render(getComponent(props));

  it('Should render correctly', async () => {
    const div = document.createElement('div');
    act(() => {
      const root = createRoot(div);
      root.render(getComponent());
      root.unmount();
    });
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
