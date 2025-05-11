import { Text, UiButton, UiStack } from '@kovyra/ui';
import { Link } from 'solito/link';

export const Home = () => {
  return (
    <UiStack>
      <UiButton>ciao kovyra </UiButton>
      <UiButton>test button 1</UiButton>
      <Link href="/about">
        <Text>about what ?!! 12</Text>
      </Link>
    </UiStack>
  );
};
