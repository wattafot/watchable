import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney Clone",
  description: "Disney Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
