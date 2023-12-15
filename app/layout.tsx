import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNavBar from './components/sidenavbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavBar />
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}
