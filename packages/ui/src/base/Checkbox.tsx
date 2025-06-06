import { Checkbox, styled } from 'tamagui';

export const UiCheckbox = styled(Checkbox, {
  name: 'UiCheckbox',

  variants: {
    size: {
      sm: {
        size: 16,
      },
      md: {
        size: 20,
      },
      lg: {
        size: 24,
      },
    },
    variant: {
      default: {
        bg: 'transparent',
        borderWidth: 1,
        borderColor: '#E5E7EB',
      },
      filled: {
        bg: '#3B82F6',
        borderWidth: 0,
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export const UiCheckboxIndicator = styled(Checkbox.Indicator, {
  name: 'UiCheckboxIndicator',
  borderColor: '$accent2',
});

export { Checkbox };
