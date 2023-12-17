import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNavBar from './components/sidenavbar';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <SideNavBar />
        <div className="main-content flex flex-col flex-grow">{children}</div>
      </body>
    </html>
  );
}
