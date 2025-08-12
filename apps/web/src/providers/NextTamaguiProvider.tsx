'use client';

import '@tamagui/core/reset.css';
import '@tamagui/polyfill-dev';

import { config as tamaguiConfig } from '@kovyra/theme';
import { NextThemeProvider } from '@tamagui/next-theme';
import { useServerInsertedHTML } from 'next/navigation';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { TamaguiProvider } from 'tamagui';

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <style
          // biome-ignore lint: noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          // biome-ignore lint: noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: tamaguiConfig.getNewCSS(),
          }}
        />
      </>
    );
  });

  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
