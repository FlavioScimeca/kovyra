import { Tabs, styled } from 'tamagui';

export const UiTabs = styled(Tabs, {
  name: 'UiTabs',
});

export const UiTabsList = styled(Tabs.List, {
  name: 'UiTabsList',
  gap: 10,
});

export const UiTabsTrigger = styled(Tabs.Trigger, {
  name: 'UiTabsTrigger',
  bg: 'transparent',
  px: 12,
  py: 8,
  outlineWidth: 0,
  hoverStyle: {
    bg: '#F3F4F6',
  },
  focusStyle: {
    outlineWidth: 0,
  },
  variants: {
    state: {
      active: {
        color: '#3B82F6',
        fontWeight: '600',
        borderBottomWidth: 2,
        borderBottomColor: '#3B82F6',
      },
      disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    variant: {
      underlined: {
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
      },
      filled: {
        borderRadius: 6,
      },
      outline: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 6,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'underlined',
  },
});

export const UiTabsContent = styled(Tabs.Content, {
  name: 'UiTabsContent',
  p: 16,
});

export { Tabs };
