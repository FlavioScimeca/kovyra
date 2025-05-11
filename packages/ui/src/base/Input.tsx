import { Input, styled } from 'tamagui';

export const UiInput = styled(Input, {
  name: 'UiInput',
  borderWidth: 1,
  p: 12,
  fontSize: 16,
  outlineWidth: 0,

  variants: {
    variant: {
      outline: {
        background: 'transparent',
      },
      filled: {
        borderColor: 'transparent',
        background: '$backgroundSubtle',
      },
      underlined: {
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingEnd: 0,
        paddingStart: 0,
        background: 'transparent',
      },
    },
    state: {
      disabled: {
        opacity: 0.5,
      },
    },
    size: {
      sm: {
        padding: 8,
        fontSize: 14,
      },
      md: {
        padding: 12,
        fontSize: 16,
      },
      lg: {
        padding: 16,
        fontSize: 18,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});
