module.exports = (api) => {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['../..'],
          alias: {
            // define aliases to shorten the import paths
            '@kovyra/ui': '../../packages/ui',
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        },
      ],
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      // ...(process.env.EAS_BUILD_PLATFORM === 'android'
      //   ? []
      //   : [
      //       [
      //         '@tamagui/babel-plugin',
      //         {
      //           components: ['@kovyra/ui', 'tamagui'],
      //           config: '../../packages/theme/src/tamagui.config.ts',
      //           logTimings: true,
      //           disableExtraction: process.env.NODE_ENV === 'development',
      //         },
      //       ],
      //     ]),
    ],
  };
};
