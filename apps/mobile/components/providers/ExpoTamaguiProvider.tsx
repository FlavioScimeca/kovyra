import { TamaguiProvider, type TamaguiProviderProps, config } from '@kovyra/ui';

export function ExpoTamaguiProvider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} defaultTheme={'light'} {...rest}>
      {children}
    </TamaguiProvider>
  );
}
