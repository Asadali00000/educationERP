"use client"
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
// import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Your App',
//   description: 'Something...',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       suppressHydrationWarning>
				<Provider store={store}>


          {children}
				</Provider>
      </body>
    </html>
  );
}
