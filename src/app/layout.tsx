import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taps",
  description: "Taps | Transform Your Customer Feedback Experience",

  openGraph: {
    title: "Taps",
    description: "Taps | Transform Your Customer Feedback Experience",
    url: "https://trytaps.com",
    siteName: "Taps",
    images: [
      {
        url: "/logo.png",
        width: 1260,
        height: 800,
        alt: "Taps Logo",
      },
    ],
  },
  // verification: {
  //   google: "D0hqeHv3-89KOuJU-REFQ163QVU98ueJQcv1kUxlrTo",
  // },
  keywords: ["Taps", "Taps Smart Card", "Taps Smart Stand"],
  authors: [
    {
      name: "Said Al Zain",
      url: "https://said-mz.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed bottom-10 left-10 z-50">
            <ModeToggle />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
