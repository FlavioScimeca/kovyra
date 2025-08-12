import { Button, styled } from 'tamagui';

export const UiButton = styled(Button, {
  name: 'UiButton',
  // For text color on buttons, use appropriate contrast
  color: '$brand_primary',
  backgroundColor: '$brand_octonary',
  hoverStyle: {
    background: '$brand_secondary',
  },
  variants: {
    variant: {
      primary: {
        background: '$brand_primary',
        color: 'white',
      },
      secondary: {
        background: '$brand_secondary',
        color: 'white',
      },
      tertiary: {
        background: '$brand_tertiary',
        color: 'white',
      },
    },
  } as const,
});
