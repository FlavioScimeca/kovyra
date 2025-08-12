// This file is now deprecated in favor of the comprehensive token system in tamagui.config.ts
// All tokens are now defined directly in the config for better organization and type safety

import { defaultConfig } from '@tamagui/config/v4';
import { createTokens } from 'tamagui';
import { app_colors } from './const/colors/app';
import { radius } from './const/radius';
import { spaces } from './const/space';
import { zIndex } from './const/zIndex';

// Legacy tokens export - consider removing once migration is complete
export const custom_tokens = createTokens({
  color: { ...app_colors },
  radius: { ...defaultConfig.tokens.radius, ...radius },
  size: { ...defaultConfig.tokens.size },
  space: { ...defaultConfig.tokens.space, ...spaces },
  zIndex: { ...defaultConfig.tokens.zIndex, ...zIndex },
});
