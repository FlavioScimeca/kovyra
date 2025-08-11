import tailwindcss from '@tailwindcss/vite';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    tailwindcss(),
    tamaguiPlugin({
      // points to your tamagui config file
      config: '../../packages/theme/src/tamagui.config.ts',
      // points to any linked packages or node_modules
      // that have tamagui components to optimize
      components: ['tamagui', '@kovyra/ui', '@kovyra/theme', '@kovyra/app'],
      // turns on the optimizing compiler
      optimize: true,
    }),
  ],
  // React Native Web compatibility configurations
  define: {
    DEV: `${process.env.NODE_ENV === 'development' ? true : false}`,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // React Native Web alias
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Set up web extensions for React Native Web compatibility
      resolveExtensions: [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ],
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
