import { Button, UiHeading, UiStack, UiText, XStack, YStack } from '@kovyra/ui';
import { ChevronRight, Plus } from '@tamagui/lucide-icons';

export function SubHeader() {
  return (
    <UiStack
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      paddingHorizontal="$4"
      paddingVertical="$4"
    >
      <XStack
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth={1200}
        marginHorizontal="auto"
      >
        {/* Left Section - Breadcrumbs and Page Title */}
        <YStack space="$2">
          {/* Breadcrumbs */}
          <XStack alignItems="center" space="$1">
            <UiText fontSize="$2" color="$color11">
              Dashboard
            </UiText>
            <ChevronRight size={12} color="$color11" />
            <UiText fontSize="$2" color="$color11">
              Analytics
            </UiText>
            <ChevronRight size={12} color="$color11" />
            <UiText fontSize="$2" color="$color">
              Overview
            </UiText>
          </XStack>

          {/* Page Title */}
          <UiHeading size="$7" fontWeight="600" color="$color">
            Analytics Overview
          </UiHeading>
        </YStack>

        {/* Right Section - Actions */}
        <XStack alignItems="center" space="$3">
          <Button size="$3" chromeless $sm={{ display: 'none' }} $gtSm={{ display: 'flex' }}>
            <UiText>Export Data</UiText>
          </Button>

          <Button size="$3" icon={Plus}>
            <UiText color="white">New Report</UiText>
          </Button>
        </XStack>
      </XStack>
    </UiStack>
  );
}

export default SubHeader;
