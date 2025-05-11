import { Card, styled } from 'tamagui';

export const UiCard = styled(Card, {
  name: 'UiCard',
  background: '$surface',
  p: 16,

  variants: {
    variant: {
      elevated: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2,
      },
      outlined: {
        borderWidth: 1,
        border: '$border',
      },
      filled: {
        background: '$surfaceSubtle',
      },
    },
    size: {
      sm: {
        p: 12,
      },
      md: {
        p: 16,
      },
      lg: {
        p: 24,
      },
    },
    rounded: {
      none: {
        borderRadius: '$none',
      },
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      lg: {
        borderRadius: '$lg',
      },
      full: {
        borderRadius: '$full',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'elevated',
    size: 'md',
    rounded: 'md',
  },
});
