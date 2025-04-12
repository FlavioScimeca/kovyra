import { Button, styled } from 'tamagui';

export const UiButton = styled(Button, {
  name: 'UiButton',
  background: '$background',

  variants: {
    variant: {
      primary: {
        background: '$primary',
      },
    },
  } as const,
});
