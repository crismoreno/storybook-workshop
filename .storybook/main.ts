import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials',
	'@storybook/addon-storysource',
	'@storybook/addon-actions',
	'@storybook/addon-toolbars',
	'@storybook/addon-backgrounds',
	'@storybook/addon-measure'],
	typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json',
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      skipChildrenPropWithoutDoc: false,
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
