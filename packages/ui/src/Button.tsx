import { Button, styled } from 'tamagui';

export const UiButton = styled(Button, {
  name: 'UiButton',

  variants: {
    variant: {
      primary: {
        borderEndEndRadius: '$1',
      },
    },
    size: {
      sm: {
        py: '$1',
        px: '$3',
        bg: '$radius.true',
      },
      md: {
        py: '$3',
        px: '$4',
      },
      lg: {
        py: '$4',
        px: '$5',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
