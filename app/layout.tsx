import { Caprasimo, Figtree } from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';

const caprasimo = Caprasimo({
  weight: '400',
  variable: '--font-caprasimo',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${caprasimo.variable} ${figtree.variable} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
