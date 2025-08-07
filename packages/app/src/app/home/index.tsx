import { RoundedSquare, Text, UiButton, UiStack } from '@kovyra/ui';
import { Link } from 'solito/link';

export const Home = () => {
  return (
    <UiStack bg={'red'}>
      <UiButton>ciao kovyra </UiButton>
      <UiButton>test button 1</UiButton>
      <Link href="/about">
        <Text>about what ?!! 12 34</Text>
      </Link>
      <RoundedSquare pin="top" size="md" />
    </UiStack>
  );
};
