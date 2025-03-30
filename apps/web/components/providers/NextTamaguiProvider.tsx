'use client';

import { TamaguiProvider, type TamaguiProviderProps, config } from '@kovyra/ui';

export function NextTamaguiProvider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} defaultTheme={'light'} {...rest}>
      {children}
    </TamaguiProvider>
  );
}
