import { withTamagui } from '@tamagui/next-plugin';
import type { NextConfig } from 'next';
import { join } from 'node:path';

const boolVals = {
  true: true,
  false: false,
};

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION as keyof typeof boolVals] ??
  process.env.NODE_ENV === 'development';

const plugins = [
  withTamagui({
    config: '../../packages/theme/src/tamagui.config.ts',
    components: ['tamagui', '@kovyra/ui'],
    appDir: true,
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    disableExtraction,
    shouldExtract: (path: string) => {
      if (path.includes(join('packages', 'app'))) {
        return true;
      }
    },
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
    ],
  }),
];

const nextConfig: NextConfig = () => {
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      '@kovyra/app',
      '@kovyra/ui',
      '@kovyra/theme',
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
    ],
    experimental: {
      scrollRestoration: true,
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

export default nextConfig;
