import { Button, UiStack, UiText, XStack } from '@kovyra/ui';
import { X } from '@tamagui/lucide-icons';

export function PreHeader() {
  return (
    <UiStack backgroundColor="$blue2" paddingHorizontal="$4" paddingVertical="$2">
      <XStack
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth={1200}
        marginHorizontal="auto"
        position="relative"
      >
        {/* Announcement Text */}
        <UiText fontSize="$3" color="$blue11" textAlign="center" fontWeight="500">
          🎉 New features available! Check out our latest updates.
        </UiText>

        {/* Close Button */}
        <Button
          size="$2"
          icon={X}
          chromeless
          circular
          position="absolute"
          right={0}
          color="$blue11"
        />
      </XStack>
    </UiStack>
  );
}

export default PreHeader;
