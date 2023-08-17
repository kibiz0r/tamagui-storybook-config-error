# tamagui-storybook-config-error

Demonstrating "missing tamagui config" error when using tamagui with storybook

```
Error: Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering.
  at getFontSizeToken (/vendors-node_modules_tamagui_shorthands_dist_cjs_index_js-node_modules_tamagui_themes_dist_cj-50a627.iframe.bundle.js:16944:72))
  at getFontSizeVariable (/vendors-node_modules_tamagui_shorthands_dist_cjs_index_js-node_modules_tamagui_themes_dist_cj-50a627.iframe.bundle.js:16932:17))
  at getFontSize (/vendors-node_modules_tamagui_shorthands_dist_cjs_index_js-node_modules_tamagui_themes_dist_cj-50a627.iframe.bundle.js:16925:15))
  at useButton (/vendors-node_modules_tamagui_shorthands_dist_cjs_index_js-node_modules_tamagui_themes_dist_cj-50a627.iframe.bundle.js:6448:94))
  at Button (/vendors-node_modules_tamagui_shorthands_dist_cjs_index_js-node_modules_tamagui_themes_dist_cj-50a627.iframe.bundle.js:6401:34))
  at renderWithHooks (/vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-1918cb.iframe.bundle.js:40684:18))
  at updateForwardRef (/vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-1918cb.iframe.bundle.js:43600:20))
  at beginWork (/vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-1918cb.iframe.bundle.js:46010:16))
  at beginWork$1 (/vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-1918cb.iframe.bundle.js:51800:14))
```

Run with `yarn storybook`

Created by doing:

```
npx react-native init MyApp --template react-native-template-storybook
mv MyApp/{*,.*} .
rmdir MyApp
npx sb init --type react_native
npx sb upgrade
yarn add -D @storybook/nextjs next tamagui @tamagui/babel-plugin @tamagui/shorthands @tamagui/themes
```

...and then editing .storybook/main.ts, preview.tsx, and Button.js to use Tamagui and follow the `@storybook/nextjs` builder config from https://github.com/dohomi/tamagui-kitchen-sink
