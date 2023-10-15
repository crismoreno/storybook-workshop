import Card from '../Card';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Atom/Card',
  component: 'Card',
};

export const DefaultCardStory = (): JSX.Element => (
  <Card
    image="https://res.cloudinary.com/hyavxktsb/image/upload/v1/projects/41/cover.png"
    title={<p className="uppercase">Default Card</p>}
  />
);

export const ProjectCardStory = (): JSX.Element => (
  <Card
    image="https://res.cloudinary.com/hyavxktsb/image/upload/v1/projects/26/cover.png"
    title={<p className="uppercase">PartyApp</p>}
    subtitle={'Personal Project'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const BlogCardStory = (): JSX.Element => (
  <Card
    image="https://cdn-images-1.medium.com/max/700/1*CpReGVMUH5YdA2O61hUO3w.png"
    title="Landing a job as a Junior Front-End developer"
    subtitle={'21/11/2020 - 3 years ago'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const XPCardStory = (): JSX.Element => (
  <Card
    image="https://i.blogs.es/96c029/windows-xp-sin-soporte/1366_2000.jpg"
    title={
      <>
        <strong>OCT 2019 - JUN 2020</strong> · MA IN FULL-STACK WEB DEVELOPMENT
        AT ASSEMBLER SCHOOL
      </>
    }
    onClick={action('Primary action button')}
  />
);

export const XPCardSmallStory = (): JSX.Element => (
  <Card
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1200px-International_Pokémon_logo.svg.png"
    title={
      <>
        <strong>OCT 2019 - JUN 2020</strong> · MA IN FULL-STACK WEB DEVELOPMENT
        AT ASSEMBLER SCHOOL
      </>
    }
    onClick={action('Primary action button')}
  />
);
