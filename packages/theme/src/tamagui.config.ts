import { config as defaultConfig } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';

// Import all custom theme elements
import { animations } from './const/animations';
import { app_colors } from './const/colors/app';
import { dark_colors } from './const/colors/dark';
import { light_colors } from './const/colors/light';
import { custom_bodyFont, custom_headingFont } from './const/fonts/fonts';
import { custom_tokens } from './tokens';

// Create comprehensive themes
const themes = {
  light: {
    ...light_colors,
    // Map brand colors to semantic theme variables
    background: light_colors.background,
    backgroundHover: '#F5F5F5',
    backgroundPress: '#EEEEEE',
    backgroundFocus: '#E3E3E3',
    backgroundStrong: '#FFFFFF',
    backgroundTransparent: 'rgba(255,255,255,0.8)',

    color: light_colors.text,
    colorHover: '#333333',
    colorPress: '#666666',
    colorFocus: '#000000',
    colorTransparent: 'rgba(0,0,0,0.8)',

    borderColor: '#E5E5E5',
    borderColorHover: '#D4D4D4',
    borderColorPress: '#A3A3A3',
    borderColorFocus: app_colors.brand_primary,

    // Brand color integration
    primary: app_colors.brand_primary,
    primaryHover: '#FF69B4',
    primaryPress: '#FF1493',

    secondary: app_colors.brand_secondary,
    secondaryHover: '#6366F1',
    secondaryPress: '#4F46E5',

    // Shadows and overlays
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowColorHover: 'rgba(0,0,0,0.15)',
    shadowColorPress: 'rgba(0,0,0,0.2)',

    // Status colors
    success: '#10B981',
    successHover: '#059669',
    warning: '#F59E0B',
    warningHover: '#D97706',
    error: '#EF4444',
    errorHover: '#DC2626',
    info: '#3B82F6',
    infoHover: '#2563EB',
  },

  dark: {
    ...dark_colors,
    // Map brand colors to semantic theme variables for dark theme
    background: dark_colors.background,
    backgroundHover: '#1A1A1A',
    backgroundPress: '#2A2A2A',
    backgroundFocus: '#3A3A3A',
    backgroundStrong: '#000000',
    backgroundTransparent: 'rgba(0,0,0,0.8)',

    color: dark_colors.text,
    colorHover: '#E5E5E5',
    colorPress: '#CCCCCC',
    colorFocus: '#FFFFFF',
    colorTransparent: 'rgba(255,255,255,0.8)',

    borderColor: '#262626',
    borderColorHover: '#404040',
    borderColorPress: '#525252',
    borderColorFocus: app_colors.brand_primary,

    // Brand color integration (slightly adjusted for dark theme)
    primary: app_colors.brand_primary,
    primaryHover: '#FF69B4',
    primaryPress: '#FF1493',

    secondary: app_colors.brand_secondary,
    secondaryHover: '#6366F1',
    secondaryPress: '#4F46E5',

    // Shadows and overlays for dark theme
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowColorHover: 'rgba(0,0,0,0.4)',
    shadowColorPress: 'rgba(0,0,0,0.5)',

    // Status colors (slightly adjusted for dark theme)
    success: '#10B981',
    successHover: '#059669',
    warning: '#F59E0B',
    warningHover: '#D97706',
    error: '#EF4444',
    errorHover: '#DC2626',
    info: '#3B82F6',
    infoHover: '#2563EB',
  },
};

export const config = createTamagui({
  // Inherit from default config as base
  ...defaultConfig,

  // Custom animations for smooth interactions
  animations,

  // Custom shorthands for efficient styling

  // Custom font configuration
  fonts: {
    ...defaultConfig.fonts,
    heading: custom_headingFont,
    body: custom_bodyFont,
  },

  // Comprehensive token system
  tokens: custom_tokens,

  // Light and dark theme configuration
  themes,

  // Media queries for responsive design
  media: {
    ...defaultConfig.media,
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // Component settings for optimal performance
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});
