import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from "./_components/topnav";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Hoblit Gallery",
  description: "Demonstrative image gallery by Andrew Hoblit",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className={'font-sans flex flex-col gap-4'}>
          <TopNav />
          {children}
          </body>
      </html>
    </ClerkProvider>

  );
}
