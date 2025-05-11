import { createInterFont } from '@tamagui/font-inter';
import { fontSize } from './fontSize';
import { fontWeight } from './fontWeight';
import { letterSpacing } from './letterSpacing';

export const custom_headingFont = createInterFont({
  size: fontSize,
  weight: fontWeight,
  letterSpacing: letterSpacing,
  face: {
    700: { normal: 'InterBold' },
    400: { normal: 'InterRegular' },
    500: { normal: 'InterMedium' },
    600: { normal: 'InterSemiBold' },
    800: { normal: 'InterExtraBold' },
    900: { normal: 'InterBlack' },
  },
});

export const custom_bodyFont = createInterFont({
  size: fontSize,
  weight: fontWeight,
  letterSpacing: letterSpacing,
  face: {
    700: { normal: 'InterBold' },
    400: { normal: 'InterRegular' },
    500: { normal: 'InterMedium' },
    600: { normal: 'InterSemiBold' },
    800: { normal: 'InterExtraBold' },
    900: { normal: 'InterBlack' },
  },
});
