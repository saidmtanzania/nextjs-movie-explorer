import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { MovieProvider } from "@/context/MovieContext";

const inter = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "A simple Movie Explorer site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-3">
          <MovieProvider>{children}</MovieProvider>
        </main>
      </body>
    </html>
  );
}
