import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';
import { animations } from './const/animations';
import { dark_colors } from './const/colors/dark';
import { light_colors } from './const/colors/light';
import { custom_bodyFont, custom_headingFont } from './const/fonts/fonts';
import { shorthands } from './const/shorthands';
import { custom_tokens } from './tokens';

export const config = createTamagui({
  ...defaultConfig,
  animations,
  shorthands,
  fonts: {
    body: custom_bodyFont,
    heading: custom_headingFont,
  },
  tokens: custom_tokens,
  themes: {
    light: { ...light_colors },
    dark: { ...dark_colors },
  },
});

// const old_config = createTamagui({
//   ...defaultConfig,
//   tokens: { ...defaultConfig.tokens },
// });
