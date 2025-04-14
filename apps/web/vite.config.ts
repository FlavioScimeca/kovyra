import { tamaguiPlugin } from '@tamagui/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      // points to your tamagui config file
      config: '../../packages/theme/src/tamagui.config.ts',
      // points to any linked packages or node_modules
      // that have tamagui components to optimize
      components: ['tamagui', '@kovyra/ui', '@kovyra/theme', '@kovyra/app'],
      // turns on the optimizing compiler
      // optimize: true,
    }),
  ],
  resolve: {
    alias: {
      '@kovyra/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@kovyra/theme': path.resolve(__dirname, '../../packages/theme/src'),
      '@kovyra/app': path.resolve(__dirname, '../../packages/app/src'),
    },
  },
});
