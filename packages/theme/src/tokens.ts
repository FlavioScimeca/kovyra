import { defaultConfig } from '@tamagui/config/v4';
import { createTokens } from 'tamagui';
import { app_colors } from './const/colors/app';
import { radius } from './const/radius';
import { spaces } from './const/space';
import { zIndex } from './const/zIndex';

export const custom_tokens = createTokens({
  color: app_colors,
  radius: radius,
  size: { ...defaultConfig.tokens.size },
  space: spaces,
  zIndex: zIndex,
});
