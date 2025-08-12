import { Avatar, styled } from 'tamagui';

export const UiAvatar = styled(Avatar, {
  name: 'UiAvatar',

  variants: {
    size: {
      xs: {
        width: 24,
        height: 24,
      },
      sm: {
        width: 32,
        height: 32,
      },
      md: {
        width: 40,
        height: 40,
      },
      lg: {
        width: 48,
        height: 48,
      },
      xl: {
        width: 64,
        height: 64,
      },
      '2xl': {
        width: 80,
        height: 80,
      },
    },
    variant: {
      circle: {
        borderRadius: 9999,
      },
      rounded: {
        borderRadius: 8,
      },
      square: {
        borderRadius: 0,
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
    variant: 'circle',
  },
});
