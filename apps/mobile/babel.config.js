module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxRuntime: 'automatic',
          jsxImportSource: 'react',
        },
      ],
    ],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['../..'],
          alias: {
            // define aliases to shorten the import paths
            app: '../../packages/app',
            '@kovyra/ui': '../../packages/ui',
            '@kovyra/theme': '../../packages/theme',
            '@kovyra/app': '../../packages/app',
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.ios.js',
            '.android.js',
            '.web.js',
          ],
        },
      ],
      // Tamagui plugin for optimization
      [
        '@tamagui/babel-plugin',
        {
          components: ['@kovyra/ui', 'tamagui'],
          config: '../../packages/theme/src/tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      // if you want reanimated support, uncomment:
      // 'react-native-reanimated/plugin',
    ],
  };
};
