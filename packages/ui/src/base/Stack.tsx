import { YStack, styled } from 'tamagui';

export const UiStack = styled(YStack, {
  name: 'UiStack',
  background: '$background',

  variants: {
    blue: {
      true: {
        bg: 'blue',
      },
    },
  } as const,
});
