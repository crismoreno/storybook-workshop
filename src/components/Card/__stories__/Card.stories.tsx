import Card from '../Card';
import { action } from '@storybook/addon-actions';
import defaultCardImg from '../../../images/Card/default.png';
import blogPostImg from '../../../images/Card/blog-post-img.png';
import projectImg from '../../../images/Card/project-img.png';
import smallImg from '../../../images/Card/small-img.png';
import xpImg from '../../../images/Card/xp-img.jpg';

export default {
  title: 'Components/Atom/Card',
  component: 'Card',
};

export const DefaultCardStory = (): JSX.Element => (
  <Card
    image={defaultCardImg}
    title={<p className="uppercase">Default Card</p>}
  />
);

export const ProjectCardStory = (): JSX.Element => (
  <Card
    image={projectImg}
    title={<p className="uppercase">PartyApp</p>}
    subtitle={'Personal Project'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const BlogCardStory = (): JSX.Element => (
  <Card
    image={blogPostImg}
    title="Landing a job as a Junior Front-End developer"
    subtitle={'21/11/2020 - 3 years ago'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const XPCardStory = (): JSX.Element => (
  <Card
    image={xpImg}
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
    image={smallImg}
    title={
      <>
        <strong>OCT 2019 - JUN 2020</strong> · MA IN FULL-STACK WEB DEVELOPMENT
        AT ASSEMBLER SCHOOL
      </>
    }
    onClick={action('Primary action button')}
  />
);
