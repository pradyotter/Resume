import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Pradunya's Portfolio",
  description:
    "Welcome to Pradunya's portfolio. Explore my projects, skills, and professional journey in web development and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
