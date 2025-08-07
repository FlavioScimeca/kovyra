import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';

export const config = createTamagui({
  ...defaultConfig,
  // animations,
  // shorthands,
  // fonts: {
  //   body: custom_bodyFont,
  //   heading: custom_headingFont,
  // },
  // tokens: custom_tokens,
  // tokens: {
  //   ...tokens,
  // },
  // themes: {
  //   light: { ...light_colors },
  //   dark: { ...dark_colors },
  // },
});
