import { UiButton, UiStack } from '@kovyra/ui';
import { TextLink } from 'solito/link';

export const Home = () => {
  return (
    <UiStack>
      <UiButton>ciao kovyra </UiButton>
      <UiButton>test button </UiButton>
      <TextLink href="/about">about what ?!!</TextLink>
    </UiStack>
  );
};
