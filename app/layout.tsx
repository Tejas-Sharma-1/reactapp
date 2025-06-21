import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { CartProvider } from '@/contexts/CartContext';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FoodieDelight - Delicious Food Delivered Fast',
  description: 'Order your favorite meals from our restaurant and get them delivered to your doorstep in minutes.',
  keywords: 'food delivery, restaurant, meals, fast delivery, online ordering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CartProvider>
            <Layout>
              {children}
            </Layout>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}