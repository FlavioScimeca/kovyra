import {
  Button,
  Circle,
  Separator,
  UiAvatar,
  UiHeading,
  UiStack,
  UiText,
  XStack,
  YStack,
} from '@kovyra/ui';
import { Bell, Menu, Search, Settings } from '@tamagui/lucide-icons';

export function MainHeader() {
  return (
    <UiStack
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      paddingHorizontal="$4"
      paddingVertical="$3"
      shadowOpacity={0.1}
      shadowRadius={2}
      shadowOffset={{ width: 0, height: 1 }}
    >
      <XStack
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth={1200}
        marginHorizontal="auto"
      >
        {/* Left Section - Logo/Title and Navigation */}
        <XStack alignItems="center" space="$4">
          {/* Mobile Menu Button */}
          <Button
            size="$3"
            icon={Menu}
            $sm={{ display: 'flex' }}
            $gtSm={{ display: 'none' }}
            chromeless
            circular
          />

          {/* Logo/Title */}
          <UiHeading size="$6" fontWeight="600" color="$color">
            Dashboard
          </UiHeading>

          {/* Navigation Links - Hidden on mobile */}
          <XStack space="$2" $sm={{ display: 'none' }} $gtSm={{ display: 'flex' }}>
            <Button size="$3" chromeless>
              <UiText>Overview</UiText>
            </Button>
            <Button size="$3" chromeless>
              <UiText>Analytics</UiText>
            </Button>
            <Button size="$3" chromeless>
              <UiText>Reports</UiText>
            </Button>
          </XStack>
        </XStack>

        {/* Right Section - Search, Notifications, User */}
        <XStack alignItems="center" space="$3">
          {/* Search Button */}
          <Button
            size="$3"
            icon={Search}
            chromeless
            circular
            $sm={{ display: 'none' }}
            $gtSm={{ display: 'flex' }}
          />

          {/* Notifications */}
          <Button size="$3" icon={Bell} chromeless circular position="relative">
            {/* Notification dot */}
            <Circle position="absolute" top={-2} right={-2} size={8} backgroundColor="$red10" />
          </Button>

          {/* Settings */}
          <Button
            size="$3"
            icon={Settings}
            chromeless
            circular
            $sm={{ display: 'none' }}
            $gtSm={{ display: 'flex' }}
          />

          {/* Divider */}
          <Separator vertical height={24} />

          {/* User Profile */}
          <XStack alignItems="center" space="$2">
            <UiAvatar size="sm" backgroundColor="$blue5">
              <UiText fontSize="$2" color="$blue11">
                JD
              </UiText>
            </UiAvatar>

            <YStack $sm={{ display: 'none' }} $gtSm={{ display: 'flex' }}>
              <UiText fontSize="$3" fontWeight="500" lineHeight="$1">
                John Doe
              </UiText>
              <UiText fontSize="$2" color="$color11" lineHeight="$1">
                john@example.com
              </UiText>
            </YStack>
          </XStack>
        </XStack>
      </XStack>
    </UiStack>
  );
}

export default MainHeader;
