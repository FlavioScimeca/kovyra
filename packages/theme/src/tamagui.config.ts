import { defaultConfig, shorthands } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';
import { animations } from './animations';
import { bodyFont, headingFont } from './fonts';

export const config = createTamagui({
  ...defaultConfig,
  animations,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
});
