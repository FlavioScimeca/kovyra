import type { Metadata } from 'next';

import { NextTamaguiProvider } from '../providers/NextTamaguiProvider';

export const metadata: Metadata = {
  title: 'Kovyra',
  description: 'Kovyra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
