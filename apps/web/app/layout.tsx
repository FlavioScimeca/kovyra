import type { Metadata } from 'next';

import { NextTamaguiProvider } from '@/providers/NextTamaguiProvider';

export const metadata: Metadata = {
  title: 'Kovyra',
  description: 'Kovyra',
  icons: {
    icon: '../../shared/assets/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
