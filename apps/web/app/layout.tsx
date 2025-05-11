import type { Metadata } from 'next';
import { NextTamaguiProvider } from '../src/providers/WebTamaguiProvider';

export const metadata: Metadata = {
  title: 'Kovyra',
  description: 'Kovyra',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
