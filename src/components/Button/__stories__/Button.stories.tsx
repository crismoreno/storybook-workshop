import Button from '../Button';
import { action } from '@storybook/addon-actions';
import { UserCircleIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Components/Atom/Button',
  component: 'Button',
};

export const DefaultButtonStory = (): JSX.Element => (
  <Button>default Button</Button>
);

export const ButtonWithIcon = (): JSX.Element => (
  <Button icon={<UserCircleIcon />}>Button with Icon</Button>
);

export const ButtonRounded = (): JSX.Element => (
  <Button rounded>Button Rounded</Button>
);

export const SecondaryButton = (): JSX.Element => (
  <Button buttonType="secondary">Button Rounded</Button>
);

export const ButtonWithOnClickEvent = (): JSX.Element => (
  <Button onClick={action('Primary action button')}>Button with click</Button>
);
