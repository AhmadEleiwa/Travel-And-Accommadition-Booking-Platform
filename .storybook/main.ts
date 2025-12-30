import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../**/*.mdx",                             // General docs from src
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)" // Component-specific stories
    
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // "@storybook/addon-styling-webpack"
  ],
  "framework": "@storybook/react-vite"
};
export default config;