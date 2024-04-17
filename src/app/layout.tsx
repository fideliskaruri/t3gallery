import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "A gallery of images",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans flex flex-col gap-4 ${inter.variable}`}>
          <TopNav />
          {children}</body>
      </html>
    </ClerkProvider>
   
  );
}
