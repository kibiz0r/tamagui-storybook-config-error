import React from 'react';
import {Preview} from '@storybook/react';
// import config from '../tamagui.config';
import {TamaguiProvider, createFont, createTamagui} from 'tamagui';
import { themes, tokens } from '@tamagui/themes';
import { shorthands } from '@tamagui/shorthands';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          {value: 'light', left: '☀️', title: 'Light Mode'},
          {value: 'dark', left: '🌙', title: 'Dark Mode'},
        ],
      },
    },
  },
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      de: 'German',
    },
  },
  // parameters: {
  //   i18n,
  // },
  // decorators: [
  //   Story => {
  //     const config = createTamagui({
  //       themes,
  //       tokens,
  //       shorthands,
  //       fonts: {
  //         body: createFont({
  //           family: 'Montserrat',
  //           size: {
  //             // You'll want to fill these values in so you can use them
  //             // for now, fontSize="$4" will be 14px.
  //             // You can define different keys, but `tamagui`
  //             // standardizes on 1-15.
  //             4: 14,
  //           },
  //           lineHeight: {
  //             4: 16,
  //           },
  //         }),
  //       },
  //     });
  //     console.log('decorator');
  //     return (
  //       <TamaguiProvider config={config}>
  //         <Story />
  //       </TamaguiProvider>
  //     );
  //   },
  // ],
};

export default preview;
