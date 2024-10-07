import { seoData } from '@/lib/content/portfolio';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';

import Cursor from '@/components/ui/Cursor';

import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoData.title,
  authors: [
    {
      name: seoData.author,
    },
  ],
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/favicons/kurtlogo120x120.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/kurtlogo512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/kurtlogo192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/kurtlogo32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/kurtlogo16x16.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        <Cursor className="hidden dark:lg:block" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
