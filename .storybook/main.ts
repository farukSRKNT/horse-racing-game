import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            // Global SCSS imports available in all components
            // additionalData: `
            //   @use "src/styles/design-system/tokens.module.scss" as tokens;
            //   @use "src/styles/design-system/mixins.module.scss" as mixins;
            // `,
            // Modern Dart Sass API
            api: 'modern-compiler',
          },
        },
        modules: {
          // CSS Modules configuration
          localsConvention: 'camelCaseOnly',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
      resolve: {
        alias: {
          // Add path aliases if needed
          '@': '/src',
        },
      },
    })
  },
}
export default config
