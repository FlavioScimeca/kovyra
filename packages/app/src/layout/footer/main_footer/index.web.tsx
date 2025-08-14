import { Button, Separator, UiHeading, UiStack, UiText, XStack, YStack } from '@kovyra/ui';
import { Github, Linkedin, Mail, Twitter } from '@tamagui/lucide-icons';

export function MainFooter() {
  return (
    <UiStack
      backgroundColor="$background"
      borderTopWidth={1}
      borderTopColor="$borderColor"
      paddingVertical="$6"
    >
      <XStack width="100%" maxWidth={1200} marginHorizontal="auto" paddingHorizontal="$4">
        {/* Main Footer Content */}
        <XStack
          width="100%"
          $sm={{ flexDirection: 'column', space: '$4' }}
          $gtSm={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          {/* Left Section - Company Info */}
          <YStack space="$3" $sm={{ alignItems: 'center' }} $gtSm={{ alignItems: 'flex-start' }}>
            <UiHeading size="$5" fontWeight="600" color="$color">
              Kovyra
            </UiHeading>
            <UiText
              fontSize="$3"
              color="$color11"
              maxWidth={300}
              $sm={{ textAlign: 'center' }}
              $gtSm={{ textAlign: 'left' }}
            >
              Building the future of dashboard experiences with modern tools and beautiful design.
            </UiText>

            {/* Social Links */}
            <XStack space="$2" alignItems="center">
              <Button size="$2" icon={Github} chromeless circular />
              <Button size="$2" icon={Twitter} chromeless circular />
              <Button size="$2" icon={Linkedin} chromeless circular />
              <Button size="$2" icon={Mail} chromeless circular />
            </XStack>
          </YStack>

          {/* Right Section - Links */}
          <XStack
            space="$8"
            $sm={{ justifyContent: 'center', marginTop: '$4' }}
            $gtSm={{ marginTop: 0 }}
          >
            {/* Product Links */}
            <YStack space="$2" $sm={{ alignItems: 'center' }} $gtSm={{ alignItems: 'flex-start' }}>
              <UiText fontSize="$3" fontWeight="600" color="$color" marginBottom="$1">
                Product
              </UiText>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Features
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Pricing
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Documentation
                </UiText>
              </Button>
            </YStack>

            {/* Company Links */}
            <YStack space="$2" $sm={{ alignItems: 'center' }} $gtSm={{ alignItems: 'flex-start' }}>
              <UiText fontSize="$3" fontWeight="600" color="$color" marginBottom="$1">
                Company
              </UiText>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  About
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Blog
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Contact
                </UiText>
              </Button>
            </YStack>

            {/* Support Links */}
            <YStack space="$2" $sm={{ alignItems: 'center' }} $gtSm={{ alignItems: 'flex-start' }}>
              <UiText fontSize="$3" fontWeight="600" color="$color" marginBottom="$1">
                Support
              </UiText>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Help Center
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Privacy Policy
                </UiText>
              </Button>
              <Button size="$2" chromeless>
                <UiText fontSize="$2" color="$color11">
                  Terms of Service
                </UiText>
              </Button>
            </YStack>
          </XStack>
        </XStack>
      </XStack>

      {/* Bottom Section - Copyright */}
      <UiStack paddingHorizontal="$4" marginTop="$4">
        <Separator />
        <XStack
          width="100%"
          maxWidth={1200}
          marginHorizontal="auto"
          paddingTop="$4"
          $sm={{ justifyContent: 'center' }}
          $gtSm={{ justifyContent: 'space-between' }}
        >
          <UiText fontSize="$2" color="$color11">
            © 2024 Kovyra. All rights reserved.
          </UiText>
          <UiText
            fontSize="$2"
            color="$color11"
            $sm={{ display: 'none' }}
            $gtSm={{ display: 'flex' }}
          >
            Made with ❤️ in San Francisco
          </UiText>
        </XStack>
      </UiStack>
    </UiStack>
  );
}

export default MainFooter;
