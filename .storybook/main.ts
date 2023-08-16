// @ts-ignore
import {StorybookConfig} from '@storybook/nextjs';

process.env.TAMAGUI_TARGET = 'web';

const config: StorybookConfig = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'solito',
          // 'react-native-web',
          'expo-linking',
          'expo-constants',
          'expo-modules-core',
          // 'react-i18next',
          'expo-document-picker',
          'expo-av',
          'expo-asset',
        ],

        babelPlugins: [
          // "react-native-reanimated/plugin", // this breaks...
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      // nextConfigPath: path.resolve(projectRoot, 'next.config.js'),
    },
  },
  webpackFinal: async (config, {configType}) => {
    const storybookDefinePlugin = config.plugins.find((plugin) => plugin.definitions);

    config.plugins = config.plugins.map((plugin) => {
      if (plugin.constructor.name === 'DefinePlugin') {
        plugin.definitions['process'] = '({"env":{"TAMAGUI_TARGET":"web"}})';
        plugin.definitions['process.env'] = '({"TAMAGUI_TARGET":"web"})';
        plugin.definitions['process.env.TAMAGUI_TARGET'] = '("web")';
      }

      return plugin;
    });

    return config;
  },
  env: config => ({
    ...config,
    TAMAGUI_TARGET: 'web',
  }),
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
};
export default config;
