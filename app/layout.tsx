import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./components/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "> Web 3 Quiz",
  description: "Challenge for Rather Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen bg-gradient-to-br from-sky-50 to-gray-200 h-full">
          <div className="container m-auto text-gray-500 px-6 xl:px-30">
            <Provider>{children}</Provider>
          </div>
        </main>
      </body>
    </html>
  );
}
