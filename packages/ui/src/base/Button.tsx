import { Button, styled } from 'tamagui';

export const UiButton = styled(Button, {
  name: 'UiButton',

  variants: {
    variant: {
      primary: {
        background: 'AppWorkspace',
      },
    },
    size: {
      sm: {
        py: 4,
        px: 8,
        fontSize: 14,
      },
      md: {
        py: 8,
        px: 12,
        fontSize: 16,
      },
      lg: {
        py: 12,
        px: 16,
        fontSize: 18,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
