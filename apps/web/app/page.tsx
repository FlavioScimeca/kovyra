'use client';

import { Button, YStack } from '@kovyra/ui';

export default function Home() {
  return (
    <YStack flex={1} height='100vh' bg='blue' justify='center' items='center'>
      <Button>Hello World</Button>
    </YStack>
  );
}
