import { UiButton, UiStack } from '@kovyra/ui';
import { TextLink } from 'solito/link';

export const Home = () => {
  return (
    <UiStack>
      <UiButton>ciao kovyra</UiButton>
      <TextLink href="/about">about</TextLink>
    </UiStack>
  );
};
