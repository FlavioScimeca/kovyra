import { createTokens } from 'tamagui';
import { app_colors } from './const/colors/app';
import { radius } from './const/radius';
import { size } from './const/size';
import { spaces } from './const/space';
import { zIndex } from './const/zIndex';

export const custom_tokens = createTokens({
  color: app_colors,
  radius: radius,
  size: size,
  space: { ...spaces },
  zIndex: zIndex,
});
