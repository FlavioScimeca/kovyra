import { Button, UiHeading, UiStack, UiText, XStack, YStack } from '@kovyra/ui';
import { ArrowRight } from '@tamagui/lucide-icons';

export function PreFooter() {
  return (
    <UiStack backgroundColor="$gray2" paddingVertical="$8">
      <XStack width="100%" maxWidth={1200} marginHorizontal="auto" paddingHorizontal="$4">
        <XStack
          width="100%"
          $sm={{ flexDirection: 'column', space: '$6', alignItems: 'center' }}
          $gtSm={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Left Section - CTA Content */}
          <YStack
            space="$3"
            $sm={{ alignItems: 'center', maxWidth: '100%' }}
            $gtSm={{ alignItems: 'flex-start', maxWidth: 600 }}
          >
            <UiHeading
              size="$8"
              fontWeight="700"
              color="$color"
              $sm={{ textAlign: 'center' }}
              $gtSm={{ textAlign: 'left' }}
            >
              Ready to get started?
            </UiHeading>
            <UiText
              fontSize="$4"
              color="$color11"
              lineHeight="$6"
              $sm={{ textAlign: 'center' }}
              $gtSm={{ textAlign: 'left' }}
            >
              Join thousands of teams already using our platform to build better products faster.
            </UiText>
          </YStack>

          {/* Right Section - Action Buttons */}
          <XStack
            space="$3"
            $sm={{ flexDirection: 'column', width: '100%', maxWidth: 300 }}
            $gtSm={{ flexDirection: 'row', width: 'auto' }}
          >
            <Button size="$4" chromeless $sm={{ width: '100%' }}>
              <UiText>Learn More</UiText>
            </Button>
            <Button size="$4" icon={ArrowRight} $sm={{ width: '100%' }}>
              <UiText color="white">Start Free Trial</UiText>
            </Button>
          </XStack>
        </XStack>
      </XStack>
    </UiStack>
  );
}

export default PreFooter;
