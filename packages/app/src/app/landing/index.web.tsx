import { Stack, UiButton, UiCard, UiHeading, UiText } from '@kovyra/ui';

export const Landing = () => {
  return (
    <Stack
      backgroundColor="$background"
      minHeight="100vh"
      padding="$4"
      alignItems="center"
      justifyContent="center"
      space="$6"
    >
      {/* Hero Section */}
      <Stack alignItems="center" space="$4" maxWidth={800}>
        <UiHeading size="$10" textAlign="center" color="$brand_primary" fontWeight="bold">
          Welcome to Kovyra
        </UiHeading>
        <UiText fontSize="$6" textAlign="center" color="$color" maxWidth={600} opacity={0.8}>
          Build amazing applications with our modern, scalable platform
        </UiText>
      </Stack>

      {/* Features Section */}
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" space="$4" maxWidth={1200}>
        <UiCard
          padding="$4"
          borderRadius="$4"
          backgroundColor="$brand_nonary"
          minWidth={280}
          maxWidth={350}
          borderWidth={1}
          borderColor="$brand_octonary"
        >
          <Stack space="$3">
            <UiHeading size="$6" color="$brand_primary">
              🚀 Fast Development
            </UiHeading>
            <UiText color="$color" opacity={0.8}>
              Accelerate your development process with our pre-built components and tools
            </UiText>
          </Stack>
        </UiCard>

        <UiCard
          padding="$4"
          borderRadius="$4"
          backgroundColor="$brand_nonary"
          minWidth={280}
          maxWidth={350}
          borderWidth={1}
          borderColor="$brand_octonary"
        >
          <Stack space="$3">
            <UiHeading size="$6" color="$brand_primary">
              🎨 Beautiful UI
            </UiHeading>
            <UiText color="$color" opacity={0.8}>
              Create stunning user interfaces with our comprehensive design system
            </UiText>
          </Stack>
        </UiCard>

        <UiCard
          padding="$4"
          borderRadius="$4"
          backgroundColor="$brand_nonary"
          minWidth={280}
          maxWidth={350}
          borderWidth={1}
          borderColor="$brand_octonary"
        >
          <Stack space="$3">
            <UiHeading size="$6" color="$brand_primary">
              📱 Cross Platform
            </UiHeading>
            <UiText color="$color" opacity={0.8}>
              Build once, deploy everywhere - web, mobile, and desktop applications
            </UiText>
          </Stack>
        </UiCard>
      </Stack>

      {/* CTA Section */}
      <Stack alignItems="center" space="$4">
        <Stack flexDirection="row" space="$3" flexWrap="wrap" justifyContent="center">
          <UiButton
            variant="primary"
            size="$5"
            borderRadius="$4"
            paddingHorizontal="$6"
            paddingVertical="$3"
          >
            Get Started
          </UiButton>
          <UiButton
            variant="secondary"
            size="$5"
            borderRadius="$4"
            paddingHorizontal="$6"
            paddingVertical="$3"
          >
            Learn More
          </UiButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
