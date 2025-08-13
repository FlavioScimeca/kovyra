import { Button, styled } from 'tamagui';

const UiButton = styled(Button, {
  name: 'UiButton',
  // For text color on buttons, use appropriate contrast
  color: '$brand_primary',
  backgroundColor: '$brand_octonary',
  hoverStyle: {
    backgroundColor: '$brand_secondary',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand_primary',
        color: 'white',
      },
      secondary: {
        backgroundColor: '$brand_secondary',
        color: 'white',
      },
      tertiary: {
        backgroundColor: '$brand_tertiary',
        color: 'white',
      },
    },
  } as const,
});

export { UiButton };
