/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin');

const plugins = [
  withTamagui({
    config: '../../packages/theme/src/tamagui.config.ts',
    components: ['tamagui'],
    appDir: true,
  }),
];

module.exports = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
