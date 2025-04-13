import type { Metadata } from 'next';

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
    // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <NextTamaguiProvider>{children}</NextTamaguiProvider> */}
        {children}
      </body>
    </html>
  );
}
