import { Stack, UiButton } from '@kovyra/ui';

export const Home = () => {
  const hey = 'Hola!';

  return (
    <Stack bg={'$brand_nonary'}>
      <UiButton>ciao kovyra {hey}</UiButton>
      <UiButton>test button 1 </UiButton>
      {/* <Link href="/about">
        <Text>about what ?!! 12 34</Text>
      </Link> */}
    </Stack>
  );
};
