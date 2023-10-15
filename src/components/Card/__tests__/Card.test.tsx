import React from 'react';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { screen } from '@testing-library/react';
import type { CardProps } from '../Card';
import { createRoot } from 'react-dom/client';

import Card from '../Card';

describe('Button', () => {
  const defaultProps: CardProps = {
    image: 'https://i.blogs.es/96c029/windows-xp-sin-soporte/1366_2000.jpg',
    title: 'Test title',
  };

  const getComponent = (props = defaultProps): JSX.Element => (
    <Card {...props}>Test Button</Card>
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

  it('Should truncate title when exceeds 30 chars and there is a subtitle', () => {
    setup({
      ...defaultProps,
      title: 'This is a super super super super super super long title',
      subtitle: 'This is a subtitle',
    });

    const text = screen.getByText('This is a super super super su…');

    expect(text).toBeInTheDocument();
  });

  it('Should not truncate title when exceeds 30 chars but there is no subtitle', () => {
    setup({
      ...defaultProps,
      title: 'This is a super super super super super super long title',
    });

    const text = screen.getByText(
      'This is a super super super super super super long title'
    );

    expect(text).toBeInTheDocument();
  });
});
